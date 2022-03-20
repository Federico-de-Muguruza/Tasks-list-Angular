import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DividerComponent } from './divider/divider.component';
import { HeaderComponent } from './header/header.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    HomeComponent,
    DividerComponent,
    HeaderComponent,
    IconButtonComponent,
    ButtonBarComponent,
    InputCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
