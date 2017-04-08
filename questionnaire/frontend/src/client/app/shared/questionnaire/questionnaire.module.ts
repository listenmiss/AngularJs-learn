import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ng2-bootstrap/components/alert';

import { QuestionModule } from '../question/question.module';
import { QuestionnaireComponent } from './questionnaire.component';

@NgModule({
    imports:[CommonModule,FormsModule,QuestionModule
    ,AlertModule
    ],
    declarations:[QuestionnaireComponent],
    exports:[QuestionnaireComponent,CommonModule,FormsModule]
})
export class QuestionnaireModule{

}