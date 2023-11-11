import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: LOCALE_ID, useValue: 'pt-BR' }],
};
