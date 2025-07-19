/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SectionsController } from './sections.controller';
import { SectionsService } from './sections.service';
import { SectionSchema } from './section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Section', schema: SectionSchema }]),
  ],
  controllers: [SectionsController],
  providers: [SectionsService],
})
export class SectionsModule {}
