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
    selector: 'education',
    templateUrl: 'client/html/cinema.html',
    directives: [RouterLink]
})
export class Cinema extends MeteorComponent {
    cinemas: Mongo.Cursor;
    constructor(zone: NgZone) {
        super();
        this.subscribe('places', () => {
            this.cinemas = Places.find({type: "Cinemas"});
        }, true);
    }
}
