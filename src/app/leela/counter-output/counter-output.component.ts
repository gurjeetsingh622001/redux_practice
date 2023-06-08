import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  // @Input() counter: any
  // counter: number = 0
  counter: number

  constructor(private store: Store<{ counter: CounterState }>) { }

  counter$: Observable<CounterState>

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      // console.log('channel name observable is called')
      this.counter = data
    })
  }



}
