import { Injectable } from '@nestjs/common';
import { Gauge, Registry} from 'prom-client';
import { Device, Property } from 'src/otiohome/otiohome.entity';
import { OtiohomeService } from 'src/otiohome/otiohome.service';

@Injectable()
export class MetricsService {

    constructor(private readonly otioService: OtiohomeService) {}

    async getMetrics(): Promise<string> {

        const registry = new Registry();
        const devices: Device[] = await this.otioService.getDevices();
        const flatProperties: [Device, Property][] = [].concat(... devices.map((d) => d.Properties.map((p) => [d, p])))
        
        for(const [device, property] of flatProperties) {
            
            const gauge = new Gauge({
                name: this.sanitize(`${device.Name}_${property.PropertyId}`),
                help: `${property.PropertyId} of ${device.Name}`,
                labelNames: ['name', 'id', 'type', 'localDate'],
                registers: [
                    registry
                ]
            });

            gauge.set(
                {
                    name: device.Name,
                    id: device.DeviceId,
                    type: device.DeviceTypeId,
                    localDate: property.LocalDate
                },
                Math.round(parseFloat(property.CurrentValue) * 100) / 100
            );
        }
        
        return await registry.metrics();
    }

    private sanitize(str: string): string {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^_a-z0-9]+/ig, '_')
            .toLowerCase();
    }
}
