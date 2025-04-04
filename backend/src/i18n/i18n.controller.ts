import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { I18nService } from './i18n.service';

@Controller('i18n')
export class I18nController {
  constructor(private readonly i18nService: I18nService) {}

  @Get(':lang/:key')
  translate(@Param('lang') lang: string, @Param('key') key: string): string {
    return this.i18nService.translate(key, lang);
  }

  @Post()
  addTranslation(
    @Body('lang') lang: string,
    @Body('key') key: string,
    @Body('value') value: string,
  ): void {
    this.i18nService.addTranslation(lang, key, value);
  }
}
