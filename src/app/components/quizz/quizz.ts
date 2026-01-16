import { Component, OnInit } from '@angular/core';
import * as quizz_questions from '../../../../public/assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  imports: [],
  templateUrl: './quizz.html',
  styleUrl: './quizz.css',
})
export class Quizz implements OnInit {
  title: string = 'Titulo';
  questions: any = '';
  questionSelected: any = '';

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizz_questions.questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      console.log(this.questionIndex);
      console.log(this.questionMaxIndex);
    }
  }
}
