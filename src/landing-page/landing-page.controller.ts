import { Controller, Post, Body } from '@nestjs/common';
import { LandingPageService } from './landing-page.service';
import { GenerateLandingPageDto } from './dto/generate-landing-page.dto';

@Controller('landing-page')
export class LandingPageController {
  constructor(private readonly landingPageService: LandingPageService) {}

  @Post('generate')
  generateLandingPage(@Body() generateLandingPageDto: GenerateLandingPageDto) {
    return this.landingPageService.generateLandingPage(
      generateLandingPageDto.prompt,
    );
  }
}
