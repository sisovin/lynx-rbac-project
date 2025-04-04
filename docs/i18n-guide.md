# Internationalization (i18n) Guide

This guide provides an overview of the internationalization (i18n) features implemented in the Lynx RBAC Project. It covers the setup, usage, and management of multiple languages within the application.

## Overview

Internationalization (i18n) is the process of designing and developing an application that can be adapted to various languages and regions without requiring engineering changes. The Lynx RBAC Project supports multiple languages, allowing users to switch between languages seamlessly.

## Setup

### Backend

1. **Install Dependencies**

   Ensure that the necessary i18n dependencies are installed in the backend:

   ```bash
   npm install @nestjs/i18n
   ```

2. **Configure i18n Module**

   In the `backend/src/i18n/i18n.module.ts` file, configure the i18n module:

   ```typescript
   import { Module } from '@nestjs/common';
   import { I18nModule, I18nJsonParser } from 'nestjs-i18n';
   import * as path from 'path';
   import { I18nService } from './i18n.service';
   import { I18nController } from './i18n.controller';

   @Module({
     imports: [
       I18nModule.forRoot({
         fallbackLanguage: 'en',
         parser: I18nJsonParser,
         parserOptions: {
           path: path.join(__dirname, '/i18n/'),
           watch: true,
         },
       }),
     ],
     providers: [I18nService],
     controllers: [I18nController],
   })
   export class I18nModule {}
   ```

3. **Add Translation Files**

   Create translation files for each supported language in the `backend/src/i18n/` directory. For example, create `en.json` and `es.json` files with the following content:

   ```json
   // en.json
   {
     "hello": "Hello",
     "goodbye": "Goodbye"
   }

   // es.json
   {
     "hello": "Hola",
     "goodbye": "Adiós"
   }
   ```

### Frontend

1. **Install Dependencies**

   Ensure that the necessary i18n dependencies are installed in the frontend:

   ```bash
   npm install react-i18next i18next
   ```

2. **Configure i18n**

   In the `frontend/src/i18n/translations.ts` file, add the translation files for supported languages:

   ```typescript
   const translations = {
     en: {
       hello: 'Hello',
       goodbye: 'Goodbye',
       welcome: 'Welcome',
       user: 'User',
       role: 'Role',
       permission: 'Permission',
       log: 'Log',
       language: 'Language',
       websocket: 'WebSocket',
     },
     es: {
       hello: 'Hola',
       goodbye: 'Adiós',
       welcome: 'Bienvenido',
       user: 'Usuario',
       role: 'Rol',
       permission: 'Permiso',
       log: 'Registro',
       language: 'Idioma',
       websocket: 'WebSocket',
     },
   };

   export default translations;
   ```

3. **Initialize i18n**

   In the `frontend/src/index.tsx` file, initialize i18n:

   ```typescript
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { I18nextProvider } from 'react-i18next';
   import i18n from './i18n';
   import App from './App';

   ReactDOM.render(
     <I18nextProvider i18n={i18n}>
       <App />
     </I18nextProvider>,
     document.getElementById('root')
   );
   ```

## Usage

### Backend

1. **Translation Service**

   Use the `I18nService` to translate keys in the backend. For example, in a controller:

   ```typescript
   import { Controller, Get, Param } from '@nestjs/common';
   import { I18nService } from './i18n.service';

   @Controller('greet')
   export class GreetController {
     constructor(private readonly i18nService: I18nService) {}

     @Get(':lang')
     greet(@Param('lang') lang: string): string {
       return this.i18nService.translate('hello', lang);
     }
   }
   ```

### Frontend

1. **Translation Hook**

   Use the `useTranslation` hook to translate keys in the frontend. For example, in a component:

   ```typescript
   import React from 'react';
   import { useTranslation } from 'react-i18next';

   const Greeting = () => {
     const { t } = useTranslation();

     return <h1>{t('hello')}</h1>;
   };

   export default Greeting;
   ```

2. **Language Switcher**

   Implement a language switcher to allow users to change the language. For example, in a component:

   ```typescript
   import React, { useState } from 'react';
   import { useTranslation } from 'react-i18next';

   const LanguageSwitcher = () => {
     const { i18n } = useTranslation();
     const [language, setLanguage] = useState(i18n.language);

     const changeLanguage = (lang: string) => {
       i18n.changeLanguage(lang);
       setLanguage(lang);
     };

     return (
       <div>
         <button onClick={() => changeLanguage('en')}>English</button>
         <button onClick={() => changeLanguage('es')}>Español</button>
       </div>
     );
   };

   export default LanguageSwitcher;
   ```

## Management

### Adding New Languages

1. **Backend**

   - Create a new translation file in the `backend/src/i18n/` directory.
   - Add the translations for the new language in the file.

2. **Frontend**

   - Add the translations for the new language in the `frontend/src/i18n/translations.ts` file.
   - Update the language switcher component to include the new language.

### Updating Translations

1. **Backend**

   - Update the translation files in the `backend/src/i18n/` directory with the new translations.

2. **Frontend**

   - Update the translations in the `frontend/src/i18n/translations.ts` file with the new translations.

## Conclusion

The internationalization (i18n) features in the Lynx RBAC Project provide a robust solution for supporting multiple languages. By following this guide, you can set up, use, and manage the i18n features in your application.
