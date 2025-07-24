import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    LandingPageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
