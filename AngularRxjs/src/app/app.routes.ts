import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';

export const routes: Routes = [
    {
        path:'promise',
        component: PromiseComponent
    },
    {
        path:'observables',
        component: ObservablesComponent,
        children: [
            {
                path:"",
                component:ListComponent
            },
            {
                path:'from-event',
                component: FromEventComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'promise'
    }
];
