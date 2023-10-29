import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { ValueTimeComponent } from './value-time/value-time.component';
import { RedesComponent } from './redes/redes.component';
import { SvgIconComponent } from './redes/svg-icon/svg-icon.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    ValueTimeComponent,
    RedesComponent,
    SvgIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
