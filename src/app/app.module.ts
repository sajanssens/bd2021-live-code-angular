import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeNL from '@angular/common/locales/nl';
import {registerLocaleData} from '@angular/common';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {IntroComponent} from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { ContactRowComponent } from './contact-row/contact-row.component';

registerLocaleData(localeNL);


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ContactFormComponent,
    IntroComponent,
    LoadingComponent,
    ContactRowComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  exports: [],
  providers: [{provide: LOCALE_ID, useValue: 'nl-NL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
