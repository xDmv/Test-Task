import {Answers} from "./answers";

export interface Question {
  title: string;
  type: string; // "single" | "multiple" | "open";
  isRead: boolean;
  createDate: string;
  answers: Answers[];
}
