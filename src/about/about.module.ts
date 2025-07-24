import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { About, AboutSchema } from './schemas/about.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }]),
  ],
  exports: [MongooseModule],
})
export class AboutModule {}
