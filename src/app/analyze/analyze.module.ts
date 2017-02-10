import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

import { AnalyzeComponent } from './analyze.component';
import { AnalyzeRoutingModule } from './analyze-routing.module';

import { AnalyzeOverviewModule } from './analyze-overview/analyze-overview.module';
<<<<<<< HEAD
<<<<<<< HEAD
=======

import { StackDetailsModule } from './stack/stack-details/stack-details.module';

>>>>>>> e5f6d20... add recommender feature under analyze
=======

import { StackDetailsModule } from './stack/stack-details/stack-details.module';

>>>>>>> 97e90ae... fixup merge conflict recommendor

@NgModule({
  imports: [StackDetailsModule, AnalyzeOverviewModule,
            CommonModule, AnalyzeRoutingModule, HttpModule],
  declarations: [AnalyzeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnalyzeModule {
<<<<<<< HEAD
<<<<<<< HEAD
  constructor(http: Http) {}
=======
  constructor(http: Http) { }
>>>>>>> e5f6d20... add recommender feature under analyze
}
=======
  constructor(http: Http) { }
}
>>>>>>> 97e90ae... fixup merge conflict recommendor
