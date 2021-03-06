import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsManagementComponent } from './questions-management.component';

describe('QuestionManagementComponent', () => {
  let component: QuestionsManagementComponent;
  let fixture: ComponentFixture<QuestionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
