import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PizzaAppComponent } from './pizza-app/pizza-app.component';
import { SizePipe } from './shared/pipes/size.pipe';
import { NavBarComponent } from './shared/components/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaAppComponent,
    SizePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
