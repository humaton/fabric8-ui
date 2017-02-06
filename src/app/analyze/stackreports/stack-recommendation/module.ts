import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ModalModule } from 'ng2-modal';
import {StackRecommendationComponent} from './stack-recommendation.component';

@NgModule({
    imports: [CommonModule, ModalModule],
    declarations: [StackRecommendationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [StackRecommendationComponent]
})

export class StackRecoModule {}