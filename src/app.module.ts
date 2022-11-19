import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { MetricsController } from './metrics/metrics.controller';
import { MetricsService } from './metrics/metrics.service';
import { OtiohomeService } from './otiohome/otiohome.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [HealthController, MetricsController],
  providers: [MetricsService, OtiohomeService],
})
export class AppModule {}
