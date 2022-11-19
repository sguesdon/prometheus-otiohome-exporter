import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
    
    constructor(private readonly service: MetricsService) {};

    @Get()
    metrics() {
        return this.service.getMetrics();
    }
}
