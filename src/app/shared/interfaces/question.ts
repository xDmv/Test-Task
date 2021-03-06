import { Answers } from './answers';

export interface Question {
  id: number;
  title: string;
  type: string;
  isRead: boolean;
  createDate: string;
  answerDate: string;
  answers: Answers[];
}
