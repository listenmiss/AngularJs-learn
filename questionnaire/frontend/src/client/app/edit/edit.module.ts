import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { EditSharedModule } from './shared/edit-shared.module';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';
import { TabsModule } from 'ng2-bootstrap/components/tabs';


@NgModule({
    imports: [CommonModule, TabsModule, EditSharedModule, QuestionnaireModule],
    declarations: [EditComponent],
    exports: [EditComponent, EditSharedModule]
})
export class EditModule { }
