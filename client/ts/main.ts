//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';
import {ItemAdd} from '../ts/main-add-form';

//Server imports
import {MainNews} from '../../collections/main-news';
//My components imports

@Component({
    selector: 'main',
    templateUrl: 'client/html/main.html',
    directives: [ItemAdd]
})
export class MainPage extends MeteorComponent {
    news: Mongo.Cursor;
    constructor(zone: NgZone) {
        console.log(Meteor.user());
        super();
        this.subscribe('news', () => {
            this.news = MainNews.find();
        }, true);
    }
}
