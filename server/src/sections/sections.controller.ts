/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Post, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('api/sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post('generate')
  async generate(@Body('idea') idea: string) {
    const trimmedIdea = (idea || '').trim();

    if (!trimmedIdea) {
      return { success: false, message: 'Invalid idea input' };
    }

    try {
      const sections =
        await this.sectionsService.generateWithClaude(trimmedIdea);
      return { success: true, sections };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Error fetching sections',
      };
    }
  }
}
