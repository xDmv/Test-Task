import { Injectable } from '@angular/core';
import { Question } from '../share/interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class StateAppService {
  private questions!: Question[];

  constructor() {
    this.questions = [];
  }

  init() {
    if (localStorage.getItem('questions') === null) {
      return;
    }
    const element = `${localStorage.getItem('questions')}`;
    this.questions = JSON.parse(element);
  }

  setQuestion(value: Question) {
    if (this.questions === null) {
      this.questions = [];
    }
    this.questions.push(value);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  getQuestion(): Question[] {
    const element = `${localStorage.getItem('questions')}`;
    this.questions = JSON.parse(element);
    return this.questions;
  }

  editQuestion(index: number): Question {
    let item: Question[] = this.questions.filter(element => element.id === index);
    return item[0];
  }

  saveEditQuestion(value: Question, index: number) {
    let newQuestions: Question[] = this.questions.map(
      (item: Question): Question => {
        if (item.id === index) {
          return {...value};
        }
        return item;
      }
    );
    this.questions = newQuestions;
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  deleteQuestion(value: Question[]) {
    this.questions = [];
    this.questions = value;
    localStorage.removeItem('questions');
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
