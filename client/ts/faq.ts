/**
 * Created by vitaliy on 03.05.16.
 */
//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'education',
    template: 'FAQ',
})
export class FAQ extends MeteorComponent {
    constructor(zone: NgZone) {
        super();
    }
}
