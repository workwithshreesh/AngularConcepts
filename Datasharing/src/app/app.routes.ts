import { Routes } from '@angular/router';
import { SiblingsComponent } from './siblings/siblings.component';
import { Siblings2Component } from './siblings2/siblings2.component';
import { ParentComponent } from './parentChild/parent/parent.component';

export const routes: Routes = [
    {
        path:"",
        component:SiblingsComponent
    },
    {
        path:"sibling",
        component:Siblings2Component
    },
    {
        path:"parent",
        component: ParentComponent
    }
];
