import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { LandingComponent } from './website/landing/landing.component';
import { ProductsComponent } from './admin/products/products.component';
import { LayoutComponent } from './admin/layout/layout.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'login',
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },

    {
        path:"",
        component:LayoutComponent,
        children: [
            {
                path:'productos',
                component: ProductsComponent
            }
        ]
    }





];
