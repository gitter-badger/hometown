//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import 'ng2-material/all.webpack';

import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {InjectUser, LoginButtons} from 'angular2-meteor-accounts-ui';

import {Login} from './ts/login.ts';
import {Signup} from './ts/signup.ts';
import {Recover} from './ts/recover.ts';


//Server imports

//My components imports
import {MainPage} from './ts/main';


@Component({
    selector: 'app',
    templateUrl: 'client/html/app.html',
    directives: [ROUTER_DIRECTIVES ,MainPage, MATERIAL_DIRECTIVES, RouterLink, LoginButtons]
})
@RouteConfig([
    { path: '/', as: 'MainPage', component: MainPage },
    { path: '/login', as: 'Login', component: Login },
    { path: '/signup', as: 'Signup', component: Signup },
    { path: '/recover', as: 'Recover', component: Recover }

])
@InjectUser()
class Hometown {
    headerText: string;
    constructor() {
        this.headerText = 'Главная';
        setTimeout(function(){
            //JQuery Materialize functions
            $('ul.tabs').tabs();
            $('.dropdown-button').dropdown({
                    inDuration: 300,
                    outDuration: 225,
                    constrain_width: true, // Does not change width of dropdown to that of the activator
                    hover: false, // Activate on hover
                    gutter: 0, // Spacing from edge
                    belowOrigin: false, // Displays dropdown below the button
                    alignment: 'left' // Displays dropdown with edge aligned to the left of button
                }
            );
        }, 200)//Set Timeout [END]
    }

    changeHeader(name) {
        this.headerText = name;
    }

    logout() {
        Materialize.toast('Вихід здійснено', 3000, 'green');
        Meteor.logout();
    }
}

bootstrap(Hometown, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);