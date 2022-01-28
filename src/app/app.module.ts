import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from './shared/shared.module';
import { GetdayPipe } from './pipes/getday.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { PhotoPipe } from './pipes/photo.pipe';
import { GetdatesPipe } from './pipes/getdates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    GetdayPipe,
    TemperaturePipe,
    PhotoPipe,
    GetdatesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
