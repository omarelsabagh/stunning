import { Module } from '@nestjs/common';
import { LandingPageController } from './landing-page.controller';
import { LandingPageService } from './landing-page.service';
import { HeroModule } from '../hero/hero.module';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';

@Module({
  imports: [HeroModule, AboutModule, ContactModule],
  controllers: [LandingPageController],
  providers: [LandingPageService],
})
export class LandingPageModule {}
