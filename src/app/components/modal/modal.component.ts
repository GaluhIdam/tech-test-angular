import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Input() title: string = 'Add Activity';
  @Output() onSubmit: EventEmitter<{
    title: string;
    description: string;
    day: string;
    clock: string;
  }> = new EventEmitter<{
    title: string;
    description: string;
    day: string;
    clock: string;
  }>();

  activityTitle: string = '';
  activityDescription: string = '';
  activityDay: string = '';
  activityClock: string = '';

  submitActivity() {
    this.onSubmit.emit({
      title: this.activityTitle,
      description: this.activityDescription,
      day: this.activityDay,
      clock: this.activityClock,
    });
  }

  close() {
    this.closeModal.emit();
  }
}
