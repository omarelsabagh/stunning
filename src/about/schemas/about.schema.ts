import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema({
  timestamps: true,
})
export class About {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string; // URL or path to the about section image

  @Prop({ type: [String], required: false })
  bulletPoints: string[];
}

export const AboutSchema = SchemaFactory.createForClass(About);
