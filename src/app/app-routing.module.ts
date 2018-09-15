import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreSelectorComponent } from './store-selector/store-selector.component';
import { ItemFinderComponent } from './item-finder/item-finder.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'storeselector', component: StoreSelectorComponent },
  { path: 'store/:id', component: ItemFinderComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }