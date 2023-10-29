import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogInterceptor } from './core/log.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
