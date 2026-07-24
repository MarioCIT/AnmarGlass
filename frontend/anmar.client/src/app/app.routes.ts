import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Services } from './features/services/services';
import { Gallery } from './features/gallery/gallery';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
    component: Home
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: 'gallery',
        component: Gallery
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    }
];
