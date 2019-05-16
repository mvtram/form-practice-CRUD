import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', redirectTo: 'create',pathMatch: 'full'},
  {path: 'create', component: CreateComponent},
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {path: 'list',
  component: ListComponent},
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,

  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
