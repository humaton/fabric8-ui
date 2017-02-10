import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { HttpModule, Http } from '@angular/http';
<<<<<<< HEAD
<<<<<<< HEAD

import { StackDetailsComponent }     from './stack-details.component';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
=======
=======
>>>>>>> 97e90ae... fixup merge conflict recommendor
import {DataTableModule} from "angular2-datatable";

import { StackDetailsComponent }     from './stack-details.component';
import { ModalModule } from 'ng2-modal';

import {StackRecoModule} from '../stack-recommendation/module';
import {ContainerTogglerModule} from '../container-toggler/module';

@NgModule({
  imports:      [StackRecoModule, ContainerTogglerModule, CommonModule, HttpModule,DataTableModule, ModalModule ],
<<<<<<< HEAD
>>>>>>> e5f6d20... add recommender feature under analyze
=======
>>>>>>> 97e90ae... fixup merge conflict recommendor
  declarations: [ StackDetailsComponent ],
  exports: [ StackDetailsComponent ]
})
export class StackDetailsModule {
  constructor(http: Http) {}
}