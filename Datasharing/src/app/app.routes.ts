import { Routes } from '@angular/router';
import { SiblingsComponent } from './siblingsCommunication/siblings/siblings.component';
import { Siblings2Component  } from './siblingsCommunication/siblings2/siblings2.component';
import { ParentComponent as ParentComponentViewChild } from './viewChildCommunition/parent/parent.component';
import { ParentComponent as ParentComponentCircular  } from './cercularParentChild/parent/parent.component';
import { ParentComponent  as ParentComponentContentChild } from './viewContentCommunication/parent/parent.component';
import { ChildComponent as ChildComponentContentChild } from './viewContentCommunication/child/child.component';
import { ParentComponent as CustomInputParent } from './customInput/parent/parent.component';
import { ChildComponent as CustomInputChild } from './customInput/child/child.component';
import { ParentComponent as InputOutputParent } from './InputOutputDecorator/parent/parent.component';
import { ChildComponent as InputOutputChild } from './InputOutputDecorator/child/child.component';

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
        path:"parentcircular",
        component: ParentComponentCircular
    },
    {
        path:"viewchildcom",
        component: ParentComponentViewChild
    },
    {
        path:"viewcontenparent",
        component: ParentComponentContentChild
    },
    {
        path:"viewcontentchild",
        component: ChildComponentContentChild
    },
    {
        path:"custominputparent",
        component: CustomInputParent
    },
    {
        path:"custominputchild",
        component:CustomInputChild
    },
    {
        path:"inputoutputparent",
        component: InputOutputParent
    },
    {
        path:"inputoutputchild",
        component: InputOutputChild
    }
];
