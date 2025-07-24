import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeroDocument = Hero & Document;

@Schema({
  timestamps: true, // Adds createdAt and updatedAt fields
})
export class Hero {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  headline: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string; // This will store the image URL or path
}

export const HeroSchema = SchemaFactory.createForClass(Hero);
