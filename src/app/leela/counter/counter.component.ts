import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number = 0
  constructor(private store: Store<{ counter: CounterState }>) { }

  counter$: Observable<CounterState>

  ngOnInit(): void {
    this.counter$ = this.store.select('counter')
  }


  onIncreament() {
    this.counter++
  }

  onDecrement() {
    this.counter--
  }

  onReset() {
    this.counter = 0
  }

}
