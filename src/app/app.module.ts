import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    // cli ensures the comp is part of ng app
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    ConceptsComponent,
    CpbComponent,
    CebComponent,
    UsersComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] // 3. AppModule should bootstrap AppComponent
})
export class AppModule { }
