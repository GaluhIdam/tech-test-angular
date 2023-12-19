import { Component, OnInit } from '@angular/core';
import { ToDoDTO } from './dto/ToDoDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dateConverter();
    this.dayConverter();
  }

  title = 'My ToDo List';
  nowDate?: string;
  nowDay?: string;

  dataTodo: ToDoDTO[] = [
    {
      title: "Today is awesome, tomorrow I don't know!",
      description:
        'Failure is not the end of the journey, but the first step towards greater success.',
        clock: '23.59',
        day: '2023-12-31'
    },
  ];
  isModalOpen = false;

  dateConverter(): void {
    const parseDate = new Date();
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
      parseDate
    );
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(
      parseDate
    );
    const ordinalIndicator =
      new Intl.DateTimeFormat('en', { day: '2-digit' })
        .formatToParts(parseDate)
        .find((part) => part.type === 'dayPeriod')?.value || '';

    this.nowDate = `${month} ${day}${ordinalIndicator}`;
  }

  dayConverter(): void {
    const date = new Date();
    this.nowDay = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(
      date
    );
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addData(newActivity: {
    title: string;
    description: string;
    day: string;
    clock: string;
  }): void {
    console.log(newActivity);
    this.dataTodo.push({
      day: newActivity.day,
      clock: newActivity.clock,
      title: newActivity.title,
      description: newActivity.description,
    });

    this.isModalOpen = false;
  }

  removeData(index: number): void {
    this.dataTodo.splice(index, 1);
    console.log('ok');
  }
}
