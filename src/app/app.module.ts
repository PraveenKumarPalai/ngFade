import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import from node_modulse
import { NgFadeDirective } from 'ng-fade';

// Local Import
// import { NgFadeDirective } from 'projects/ng-fade/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    NgFadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
