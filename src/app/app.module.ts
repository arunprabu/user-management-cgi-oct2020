import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';

@NgModule({
  declarations: [
    AppComponent,
    // cli ensures the comp is part of ng app
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    ConceptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // 3. AppModule should bootstrap AppComponent
})
export class AppModule { }
