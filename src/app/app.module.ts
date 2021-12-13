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
import { UploadComponent } from './components/upload/upload.component';
import { ImagesComponent } from './components/images/images.component';

registerLocaleData(localeNL);


@NgModule({ // decorator = annotatie
  bootstrap: [AppComponent], // wat is mijn root component?
  declarations: [ // welke componenten zitten er in deze module en kunnen gebruikt gaan worden?
    AppComponent,
    HelloWorldComponent,
    ContactFormComponent,
    IntroComponent,
    LoadingComponent,
    ContactRowComponent,
    HomeComponent,
    ContactListComponent,
    ContactPageComponent,
    ContactDetailComponent,
    UploadComponent,
    ImagesComponent
  ],
  imports: [ // welke dingen uit andere modules wil ik in deze module gebruiken?
    BrowserModule,
    FormsModule, // template driven form
    ReactiveFormsModule, // model driven form
    HttpClientModule,
    RouterModule.forRoot([ // root component must have a router-outlet for childern
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'upload', component: UploadComponent},
      {path: 'images', component: ImagesComponent},
      {
        path: 'contacts', component: ContactPageComponent, // has children, so needs to have a router-outlet!
        children: [{
          path: ':id', component: ContactDetailComponent
        }]
      },
      {path: 'contactdetails/:id', component: ContactDetailComponent},
    ])
  ],
  exports: [], // welke onderdelen van deze module stel ik beschikbaar voor andere modules?
  providers: [{provide: LOCALE_ID, useValue: 'en-US'}]
})
export class AppModule {
}
