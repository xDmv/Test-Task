import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuestionForListComponent } from './card-question-for-list.component';

describe('CardQuestionForListComponent', () => {
  let component: CardQuestionForListComponent;
  let fixture: ComponentFixture<CardQuestionForListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuestionForListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuestionForListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
