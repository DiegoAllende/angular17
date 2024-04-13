import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { IConfig, provideEnvironmentNgxMask } from 'ngx-mask';
import { provideHttpClient } from '@angular/common/http';

const maskConfig: Partial<IConfig> = {
  validation: false,
  allowNegativeNumbers: false,
  thousandSeparator: ",",
  decimalMarker: ".",
  separatorLimit: "1000000000",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(maskConfig),
    provideHttpClient(),
  ]
};


