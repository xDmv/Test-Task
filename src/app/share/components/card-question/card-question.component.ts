import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../interfaces/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.scss']
})
export class CardQuestionComponent {
  @Input() question!: Question;
  @Input() questionIndex!: number;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: Router) { }

  onDelete(i: number) {
    this.delete.next(i);
  }

  onEdit(index: number) {
    this.route.navigateByUrl('/edit-question/' + index).then();
  }
}
