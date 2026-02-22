import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { JwtInterceptor } from './app/interceptors/jwt.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    provideToastr(),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
}).catch(err => console.error(err));