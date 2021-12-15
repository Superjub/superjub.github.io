import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [
    ProjectComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class ContentModule { }
