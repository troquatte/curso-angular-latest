import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

const translateModuleConfig: TranslateModuleConfig = {
  defaultLanguage: 'pt-br',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
};

export const provideTranslate = () => {
  return importProvidersFrom(TranslateModule.forRoot(translateModuleConfig));
};
