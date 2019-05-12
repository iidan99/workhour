import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  timer: number = Date.now() - 1557212484710;
  
  time = new Observable(observer => (setInterval(() => observer.next(new Date().toString()), 1000) as any));


  ngOnInit() {
  
  }
  
}
