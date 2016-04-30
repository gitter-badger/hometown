//System imports
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';

//Server imports
import {MainNews} from '../../collections/main-news';
//My components imports

@Component({
    selector: 'main',
    templateUrl: 'client/html/main.html'
})
export class MainPage extends MeteorComponent {
    news: Mongo.Cursor;
    constructor(zone: NgZone) {
        super();
        this.subscribe('news', () => {
            this.news = MainNews.find();
        }, true);
    }
}
