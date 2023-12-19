import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() day: string = '';
  @Input() clock: string = '';
  @Input() leading: string = '';
  @Input() desc: string = '';
  @Input() styleClass: string = '';

  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  onRemoveClick() {
    this.remove.emit();
  }

  dateConverter(nowDate: string): string {
    const parseDate = new Date(nowDate);
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

    return `${month} ${day}${ordinalIndicator}`;
  }

  dayConverter(day: string): string {
    const parsedDate = new Date(day);
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(
      parsedDate
    );

    return `${weekday}`;
  }
}
