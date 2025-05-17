import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';
import { CustomComponent } from './observables/custom/custom.component';

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
                path:'form-event',
                component: FromEventComponent
            },
            {
                path: 'interval',
                component: IntervalComponent
            },
            {
                path: 'of-from',
                component: OfFromComponent
            },
            {
                path: 'to-array',
                component: ToArrayComponent
            },
            {
                path: 'custom-observable',
                component: CustomComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'promise'
    }
];
