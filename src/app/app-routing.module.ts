import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';

// configuring the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/1', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
