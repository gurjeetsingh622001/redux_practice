import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{ counter: CounterState }>) { }

  // {counter:{counter:number}} the first counter is for store.Module which is defined in app.module.ts file and {counter: number }  is indicating the state created in counter.state


  counter$: Observable<CounterState>

  ngOnInit(): void {
    this.counter$ = this.store.select('counter')
  }

  Increment() {
    // this.increment.emit()
    this.store.dispatch(increment())
  }

  Decrement() {
    // this.decrement.emit()
    this.store.dispatch(decrement())

  }

  Reset() {
    // this.reset.emit()
    this.store.dispatch(reset())

  }

}
