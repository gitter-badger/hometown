import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {RouterLink} from 'angular2/router';


@Component({
    selector: 'login',
    directives: [MATERIAL_DIRECTIVES, RouterLink],
    templateUrl: '/client/html/login.html'
})

export class Login extends MeteorComponent {
    loginForm:ControlGroup;
    error:string;
    user: Meteor.User;
    constructor(private router:Router) {
        super();
        let fb = new FormBuilder();
        this.loginForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.error = '';
    }
    login(credentials) {
        if (this.loginForm.valid) {
            Meteor.loginWithPassword(credentials.email, credentials.password, (err) => {
                if (err) {
                    this.error = err;
                    Materialize.toast('Вхід не виконано!', 3000, 'red');
                }
                else {
                    this.router.navigate(['/MainPage']);
                    Materialize.toast('Ласкаво просимо, ' +  Meteor.user().profile.name + "!", 30000, 'green');
                }
            });
        }
    }
}

