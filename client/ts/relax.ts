//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

//Server imports
import {Places} from '../../collections/places';
//My components imports

@Component({
    selector: 'relax',
    templateUrl: 'client/html/relax.html',
    directives: [RouterLink]
})
export class Relax extends MeteorComponent {
    relax: Mongo.Cursor;
    constructor(zone: NgZone) {
        super();
        this.subscribe('places', () => {
            this.relax = Places.find({type: "Places"});
        }, true);
    }
}
