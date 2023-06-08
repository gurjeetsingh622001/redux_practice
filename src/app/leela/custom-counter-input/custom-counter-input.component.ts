import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  channelName: String
  value: number

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe(data => {
      console.log('channel name observable is called')
      this.channelName = data
    })
  }

  add() {
    this.store.dispatch(customIncrement({ value: this.value }))
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName())
  }

}
