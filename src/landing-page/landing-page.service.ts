import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero, HeroDocument } from '../hero/schemas/hero.schema';
import { About, AboutDocument } from '../about/schemas/about.schema';
import { Contact, ContactDocument } from '../contact/schemas/contact.schema';

@Injectable()
export class LandingPageService {
  constructor(
    @InjectModel(Hero.name) private heroModel: Model<HeroDocument>,
    @InjectModel(About.name) private aboutModel: Model<AboutDocument>,
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async generateLandingPage(prompt: string) {
    // For MVP, we'll return dummy data instead of actual AI processing
    // In a real implementation, you would call an AI service here

    // Get the first hero from the database or create a dummy one if none exists
    const hero = await this.heroModel.findOne().exec();

    // Get the first about section or create a dummy one
    const about = await this.aboutModel.findOne().exec();

    // Get the first contact section or create a dummy one
    const contact = await this.contactModel.findOne().exec();

    return {
      hero,
      about,
      contact,
      prompt, // Return the original prompt for reference
    };
  }
}
