//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import 'ng2-material/all.webpack';

import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all'

//Server imports

//My components imports
import {MainPage} from './ts/main';


@Component({
    selector: 'app',
    templateUrl: 'client/html/app.html',
    directives: [MainPage, MATERIAL_DIRECTIVES]
})
class Hometown {
    headerText: string;
    constructor() {
        this.headerText = 'Главная';
        setTimeout(function(){
            //JQuery Materialize functuions
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
}

bootstrap(Hometown, [MATERIAL_PROVIDERS]);