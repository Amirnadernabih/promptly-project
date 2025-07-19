/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './section.interface'; // <-- import it here

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel('Section') private readonly sectionModel: Model<Section>,
  ) {}

  async generateWithClaude(idea: string) {
    const sections = await this.sectionModel.find({ idea }).exec();

    if (!sections.length) {
      throw new Error('No matching sections found in database');
    }

    return sections;
  }
}
