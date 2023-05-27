import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './feature/quotes/quotes.component';
import { RandomComponent } from './feature/random/random.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'random',
    component: RandomComponent
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
