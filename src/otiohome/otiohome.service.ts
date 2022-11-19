import { Injectable } from '@nestjs/common';
import { Device } from './otiohome.entity';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OtiohomeService {

    private accessToken: string;
    private refreshToken: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.accessToken = this.configService.get('OTIO_ACCESS_TOKEN');
        this.refreshToken = this.configService.get('OTIO_REFRESH_TOKEN');
    }

    async getDevices(): Promise<Device[]> {
        try {
            const res = await this.getPlaceDevices();
            return res.data.Devices;
        } catch(err) {
            if(err.response.status === 401) {
                this.refreshAccessToken();
                const res = await this.getPlaceDevices();
                return res.data.Devices;
            }
            console.error(err);
            throw err;
        }
    }

    private async getPlaceDevices(): Promise<any> {
        return await lastValueFrom(
            this.httpService.get(
                `https://${this.configService.get('OTIO_HOST')}/api/place/${this.configService.get('OTIO_PLACE_ID')}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.accessToken}`
                    }
                }
            )
        );
    }

    async refreshAccessToken() {
        const params = new URLSearchParams();
        params.append('client_id', this.configService.get('OTIO_CLIENT_ID'));
        params.append('client_info', '1');
        params.append(
          'scope',
          [
            'https://otiohome.onmicrosoft.com/otiohome-api/objects',
            'https://otiohome.onmicrosoft.com/otiohome-api/place',
            'https://otiohome.onmicrosoft.com/otiohome-api/profile',
            'offline_access',
            'openid',
            'profile'
          ].join(' '));
        params.append('grant_type', 'refresh_token');
        console.log(`https://${this.configService.get('OTIO_OPENID_HOST')}/otiohome.onmicrosoft.com/b2c_1_otiohome/oauth2/v2.0/token`);
        params.append('refresh_token', this.refreshToken);
        const res = await lastValueFrom(
            this.httpService.post(
                `https://${this.configService.get('OTIO_OPENID_HOST')}/otiohome.onmicrosoft.com/b2c_1_otiohome/oauth2/v2.0/token`,
                params
            )
        )
        this.accessToken = res.data.access_token;
        this.refreshToken = res.data.refresh_token;
    }
}
