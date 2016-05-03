//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import 'ng2-material/all.webpack';

import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink, Router} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';
import {InjectUser, LoginButtons} from 'angular2-meteor-accounts-ui';

//Server imports

//My components imports
import {MainPage} from './ts/main';
import {Login} from './ts/login';
import {Signup} from './ts/signup';
import {Recover} from './ts/recover';
import {Education} from './ts/education';
import {Relax} from './ts/relax';
import {Cinema} from './ts/cinema';
import {FAQ} from './ts/faq';
import {PlaceDetails} from './ts/place_details.ts';
import undefined = Match.undefined;


@Component({
    selector: 'app',
    templateUrl: 'client/html/app.html',
    directives: [ROUTER_DIRECTIVES ,MainPage, MATERIAL_DIRECTIVES, RouterLink, LoginButtons]
})
@RouteConfig([
    { path: '/', as: 'MainPage', component: MainPage },
    { path: '/education', as: 'Education', component: Education },
    { path: '/places', as: 'Places', component: Relax },
    { path: '/cinemas', as: 'Cinemas', component: Cinema },
    { path: '/faq', as: 'FAQ', component: FAQ },
    { path: '/login', as: 'Login', component: Login },
    { path: '/signup', as: 'Signup', component: Signup },
    { path: '/details/:placeId', as: 'PlaceDetails', component: PlaceDetails },
    { path: '/recover', as: 'Recover', component: Recover }

])
@InjectUser()
class Hometown {
    headerText: string;
    constructor(private router: Router) {
        this.headerText = 'Головна';
        setTimeout(function(){
            //JQuery Materialize functions
            $('.tabs').tabs();
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
        }, 200)
    }

    changeHeader(name) {
        this.headerText = name;
    }

    login() {
        this.router.navigate(['/Login']);
    }

    logout() {
        Materialize.toast('Вихід здійснено', 3000, 'green');
        Meteor.logout();
        this.router.navigate(['/MainPage']);
    }
}

bootstrap(Hometown, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);