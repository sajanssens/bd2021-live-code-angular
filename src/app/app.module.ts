import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ContactFormComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
