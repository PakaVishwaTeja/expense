import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [ 
{path : 'signin' , component : SigninComponent},
{path : 'home' , component : HeaderComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
