import { Routes } from '@angular/router';
import { CounterSignalsComponent } from './counter-signals/counter-signals.component';
import { SignalsFunctionsComponent } from './signals-functions/signals-functions.component';
import { SignalsAdvFuncComponent } from './signals-adv-func/signals-adv-func.component';
import { CrudSignalsComponent } from './crud-signals/crud-signals.component';
import { AdvanceCrudComponent } from './crud-signals-component/advance-crud/advance-crud.component';
import { PostFormComponent } from './crud-signals-component/post-form/post-form.component';

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
        path:'',
        children : [
            {
                path: 'signal-advcrud',
                component: AdvanceCrudComponent
            },
            {
                path: 'signal-form',
                component: PostFormComponent
            }
        ]
    }
];
