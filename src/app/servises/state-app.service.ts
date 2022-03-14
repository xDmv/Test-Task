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
    if (localStorage.getItem('questions')) {
      return;
    }
    const element = `${localStorage.getItem('questions')}`;
    this.questions = JSON.parse(element);
  }

  setQuestion(value: Question) {
    this.questions.push(value);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  getQuestion(): Question[] {
    const element = `${localStorage.getItem('questions')}`;
    this.questions = JSON.parse(element);
    return this.questions;
  }

  editQuestion() {

  }

  deleteQuestion(value: Question[]) {
    this.questions = [];
    this.questions = value;
    localStorage.removeItem('questions');
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }
}
