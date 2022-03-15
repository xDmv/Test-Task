import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestionForAnswerComponent } from './card-question-for-answer.component';

describe('CardQuestionForAnswerComponent', () => {
  let component: CardQuestionForAnswerComponent;
  let fixture: ComponentFixture<CardQuestionForAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuestionForAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuestionForAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
