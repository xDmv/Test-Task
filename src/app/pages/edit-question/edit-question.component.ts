import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Question } from '../../shared/interfaces/question';
import { StateAppService } from '../../servises/state-app.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answers } from '../../shared/interfaces/answers';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  public question!: Question;
  public formQuestion!: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private route: Router,
    private activateRoute: ActivatedRoute,
    public storage: StateAppService
    ) {}

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.storage.init();
    this.init();
  }
  public init() {
    let id = Number(this.activateRoute.snapshot.params['id']);
    this.question = this.storage.editQuestion(id);
    this.formQuestion = this.formBuilder.group({
      title: [this.question.title, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      typeQuestion: [this.question.type, [Validators.required]],
      answers: this.formBuilder.array([])
    });
    this.choiceType(this.question.type);
    if (this.question.type !== 'open') {
      let item: FormArray = this.formQuestion.get('answers') as FormArray;
      this.question.answers.map(
        (value) => {
          item.push(this.formBuilder.group({
            answer: [value.answer, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
            isChoice: value.isChoice
          }))
        }
      );
    }
  }

  public choiceType(value: string) {
    this.formQuestion.controls['typeQuestion'].setValue(value);
  }

  public addAnswer(answer: string = '') {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.push(this.formBuilder.group({
      answer: [answer, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      isChoice: false
    }))
  }

  public deleteAnswer(i: number) {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.removeAt(i);
  }

  public saveQuestion() {
    const arrayAnswer: Answers[] = [];
    this.formQuestion.markAllAsTouched();
    this.formQuestion.controls['answers'].value.map(
      (value: Answers) => {
        arrayAnswer.push({
          answer: value.answer,
          isChoice: false
        })
      }
    );
    let questionEdit: Question;
    questionEdit = {
      id: this.question.id,
      title: this.formQuestion.controls['title'].value,
      type: this.formQuestion.controls['typeQuestion'].value,
      isRead: false,
      createDate: this.question.createDate,
      answerDate: '',
      answers: this.formQuestion.controls['answers'].value
    };
    if (this.formQuestion.controls['typeQuestion'].value === 'open') {
      questionEdit = {
        id: this.question.id,
        title: this.formQuestion.controls['title'].value,
        type: this.formQuestion.controls['typeQuestion'].value,
        isRead: false,
        createDate: this.question.createDate,
        answerDate: '',
        answers: [
          {
            answer: '',
            isChoice: false
          }
        ]
      };
    }

    this.storage.saveEditQuestion(questionEdit, this.question.id);
    this.route.navigateByUrl('/questions-management').then();
  }

}
