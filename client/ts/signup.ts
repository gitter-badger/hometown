import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'signup',
    directives: [MATERIAL_DIRECTIVES, RouterLink],
    templateUrl: '/client/html/signup.html'
})
export class Signup extends MeteorComponent {
    signupForm: ControlGroup;
    error: string;
    constructor(private router: Router) {
        super();
        let fb = new FormBuilder();
        this.signupForm = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.error = '';
    }

    signup(credentials) {
        if (this.signupForm.valid) {
            Accounts.createUser({ email: credentials.email, password: credentials.password, profile:{name:credentials.name}}, (err) => {
                if (err) {
                    Materialize.toast('Реєстрація не виконана!', 3000, 'red');
                    this.error = err;
                }
                else {
                    Materialize.toast('Реєстрація успішна!', 3000, 'green');
                    this.router.navigate(['/MainPage']);
                }
            });
        }
    }
}

