import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hero, HeroSchema } from './schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  exports: [MongooseModule],
})
export class HeroModule {}
