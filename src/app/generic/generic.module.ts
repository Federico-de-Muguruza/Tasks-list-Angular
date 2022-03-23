// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { DividerComponent } from './divider/divider.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    DividerComponent,
    IconButtonComponent,
    InputCheckboxComponent,
    ButtonBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    IconButtonComponent,
    InputCheckboxComponent,
    ButtonBarComponent,
    HeaderComponent,
  ]
})

export class GenericModule { }
