import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker'
  showAddTask: boolean = false

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })
  }

  ngOnInit(): void {

  }

  toggle() {
    this.uiService.toggleAddTask()
  }

  hasRoute(route: string){
    return this.router.url === route
  }
}
