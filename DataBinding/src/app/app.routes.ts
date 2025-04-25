import { Routes } from '@angular/router';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { TwowaywithoutngmodelComponent } from './twowaywithoutngmodel/twowaywithoutngmodel.component';
import { ParentComponent } from './customTwoWayBinding/parent/parent.component';

export const routes: Routes = [
    {
        path:"oneWay",
        component:OneWayBindingComponent
    },
    {
        path:"twoway",
        component:TwowaybindingComponent
    },
    {
        path:"event",
        component: EventbindingComponent
    },
    {
        path:"property",
        component: PropertybindingComponent
    },
    {
        path:"twowaysecond",
        component: TwowaywithoutngmodelComponent
    },
    {
        path:"parent",
        component: ParentComponent
    },
    // {
    //     path:""
    // }
];
