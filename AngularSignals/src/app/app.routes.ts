import { Routes } from '@angular/router';
import { CounterSignalsComponent } from './counter-signals/counter-signals.component';
import { SignalsFunctionsComponent } from './signals-functions/signals-functions.component';
import { SignalsAdvFuncComponent } from './signals-adv-func/signals-adv-func.component';
import { CrudSignalsComponent } from './crud-signals/crud-signals.component';
import { AdvanceCrudComponent } from './crud-signals-component/advance-crud/advance-crud.component';

export const routes: Routes = [
    {
        path:"signal-counter",
        component: CounterSignalsComponent
    },
    {
        path:"signal-function",
        component: SignalsFunctionsComponent
    },
    {
        path:"signal-advance",
        component: SignalsAdvFuncComponent
    },
    {
        path:'signal-crud',
        component: CrudSignalsComponent
    },
    {
        path:'signal-advcrud',
        component: AdvanceCrudComponent
    }
];
