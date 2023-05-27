import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './feature/quotes/quotes.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: '',  // ha semmmit nem ír be, irányítson rá a home-ra
    redirectTo: '/quotes',
    pathMatch: 'full'
  },
  {
    path: '**',  // ha bármi az url, irányítson rá a home-ra
    redirectTo: '/quotes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
