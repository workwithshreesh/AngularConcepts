import { Routes } from '@angular/router';
import { CounterSignalsComponent } from './counter-signals/counter-signals.component';
import { SignalsFunctionsComponent } from './signals-functions/signals-functions.component';
import { SignalsAdvFuncComponent } from './signals-adv-func/signals-adv-func.component';

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
    }
];
