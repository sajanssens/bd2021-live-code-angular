import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeNL from '@angular/common/locales/nl';
import {registerLocaleData} from '@angular/common';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {IntroComponent} from './components/intro/intro.component';
import {LoadingComponent} from './components/loading/loading.component';
import {ContactRowComponent} from './components/contact-row/contact-row.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';

registerLocaleData(localeNL);


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ContactFormComponent,
    IntroComponent,
    LoadingComponent,
    ContactRowComponent,
    HomeComponent,
    ContactListComponent,
    ContactPageComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'contacts', component: ContactPageComponent, // has children, so needs to have a router-outlet!
        children: [{
          path: ':id', component: ContactDetailComponent
        }]
      },
      {path: 'contactdetails/:id', component: ContactDetailComponent},
    ])
  ],
  exports: [],
  providers: [{provide: LOCALE_ID, useValue: 'nl-NL'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
