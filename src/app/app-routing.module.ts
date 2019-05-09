import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CreateComponent } from './create/create.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', redirectTo: 'create',pathMatch: 'full'},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: ProfileEditorComponent},
  {path: 'list', component: ListComponent},

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
