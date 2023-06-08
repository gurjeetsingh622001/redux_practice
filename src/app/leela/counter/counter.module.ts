import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CounterComponent } from "./counter.component";
import { CounterButtonComponent } from "../counter-button/counter-button.component";
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CustomCounterInputComponent } from "../custom-counter-input/custom-counter-input.component";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../state/counter.reducer";
import { Counter_State_Name } from "../state/counter.selector";

const routes: Routes = [
    { path: '', component: CounterComponent }
]

@NgModule({
    declarations: [
        CounterComponent,
        CounterButtonComponent,
        CounterOutputComponent,
        CustomCounterInputComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(Counter_State_Name, counterReducer)
    ]

})

export class CounterModule {



}