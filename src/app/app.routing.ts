import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { NikonComponent } from './components/nikon/nikon.component';
import { CanonComponent } from './components/canon/canon.component';
import { TamronComponent } from './components/tamron/tamron.component';
import { AllComponent } from './components/all/all.component';
const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'Nikon',     component: NikonComponent },
    { path: 'Canon',     component: CanonComponent },
    { path: 'Tamron',     component: TamronComponent },
    { path: 'All',     component: AllComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{ useHash: true })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
