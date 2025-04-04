import { Injectable } from '@nestjs/common';

@Injectable()
export class I18nService {
  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      hello: 'Hello',
      goodbye: 'Goodbye',
    },
    es: {
      hello: 'Hola',
      goodbye: 'Adiós',
    },
  };

  translate(key: string, lang: string): string {
    return this.translations[lang]?.[key] || key;
  }

  addTranslation(lang: string, key: string, value: string): void {
    if (!this.translations[lang]) {
      this.translations[lang] = {};
    }
    this.translations[lang][key] = value;
  }
}
