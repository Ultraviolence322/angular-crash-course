import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes: IconDefinition = faTimes

  constructor() { }

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task)
  }

  ngOnInit(): void {
  }
}
