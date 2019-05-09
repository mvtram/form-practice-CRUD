import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { MatToolbarModule } from '@angular/material';
import { ProfileserviceService } from './profileservice.service';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,

  ],
  providers: [ProfileserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
