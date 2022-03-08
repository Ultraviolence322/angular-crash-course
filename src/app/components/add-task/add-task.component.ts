import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter()

  text: string = ''
  day: string = ''
  reminder: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault()

    const formData: Task = {
      id: Date.now(),
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddNewTask.emit(formData)
  }

}
