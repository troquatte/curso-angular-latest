import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from 'environments/environment';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// Interceptor
import { httpInterceptor } from './interceptor/http.interceptor';

// Translate
import { provideTranslate } from './app.translate';

// Img
import { provideImgixLoader, registerLocaleData } from '@angular/common';

// Animate

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideTranslate(),
    provideImgixLoader(environment.img),
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     const img = config.src.split('.');
    //     const name = img.shift();
    //     const type = img.pop();
    //     const width = config.width;
    //     return `${environment.img}${name}${
    //       width ? '-' + width + 'w' : ''
    //     }.${type}`;
    //   },
    // },
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
