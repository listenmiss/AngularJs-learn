import { Component,OnInit,EventEmitter,Input,Output } from '@angular/core';
import { QuestionnaireModel,QuestionnaireState } from '../models/questionnaire.model';

import { Router,ActivatedRoute } from '@angular/router'
@Component({
    moduleId:module.id,
    selector:'questionnaire',
    styleUrls:['questionnaire.component.css'],
    templateUrl:'questionnaire.component.html'
})
export class QuestionnaireComponent implements OnInit{
    @Input() questionnaire:QuestionnaireModel;
    @Output() submitQuestionnaire = new EventEmitter();

    private editable:boolean;
    private isPreviewPage:boolean;
    alert:any = {msg: '', type: '', closable: true};
    constructor(private router:Router,private activatedRoute:ActivatedRoute)
    {

    }
    ngOnInit(){
        this.editable  = this.questionnaire && this.questionnaire.state == QuestionnaireState.Created;

        //判断当前URL是否为预览页面
        this.activatedRoute.queryParams.subscribe(
            params => {
                this.isPreviewPage = params['type']==='preview';
            }
        );

    }

  onDeleteQuestion(index: number) {
    this.questionnaire.questionList.splice(index, 1);
  }

  onSubmit() {
     
      if(this.isPreviewPage)
      {
          
        this.router.navigateByUrl('admin/center');
      }
        
      switch(this.questionnaire.state)
      {
         
        case QuestionnaireState.Created:
       this.submitQuestionnaire.emit(this.questionnaire);
       break;
       case QuestionnaireState.Published:
       this.alert ={
           type:'success',
           msg:'提交成功，感谢您的耐心回答。'
       };
       break;
       default:
       break;
      }
      
  }

}