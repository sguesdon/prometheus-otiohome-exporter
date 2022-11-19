import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    @HttpCode(203)
    health() {}
}

