//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';
import {ItemAdd} from '../ts/main-add-form';
import {RouterLink} from 'angular2/router';

//Server imports
import {Places} from '../../collections/places';
//My components imports

@Component({
    selector: 'main',
    templateUrl: 'client/html/main.html',
    directives: [ItemAdd, RouterLink]
})
export class MainPage extends MeteorComponent {
    news: Mongo.Cursor;
    constructor(zone: NgZone) {
        super();
        this.subscribe('places', () => {
            this.news = Places.find({type: "News"});
        }, true);
    }
}
