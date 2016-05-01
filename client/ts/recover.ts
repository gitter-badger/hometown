import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'recover',
    directives: [MATERIAL_DIRECTIVES, RouterLink],
    templateUrl: '/client/html/recover.html'
})

export class Recover extends MeteorComponent {
    recoverForm: ControlGroup;
    error: string;
    constructor(private router: Router) {
        super();
        let fb = new FormBuilder();
        this.recoverForm = fb.group({
            email: ['', Validators.required]
        });
        this.error = '';
    }
    recover(credentials) {
        if (this.recoverForm.valid) {
            Accounts.forgotPassword({ email: credentials.email}, (err) => {
                if (err) {
                    this.error = err;
                    Materialize.toast('Відновлення не виконано!', 3000, 'red');
                }
                else {
                    Materialize.toast('Відновлення успішне!', 3000, 'green');
                    this.router.navigate(['/MainPage']);
                }
            });
        }
    }
}

