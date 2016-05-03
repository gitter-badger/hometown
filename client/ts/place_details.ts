import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {NgZone, Component} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';

//Server imports
import {Places} from '../../collections/places';
//My components imports

@Component({
    selector: 'place-details',
    templateUrl: '/client/html/place_details.html',
    directives: [RouterLink]
})
export class PlaceDetails extends MeteorComponent {
    place:Object;

    constructor(params:RouteParams) {
        super();
        var placeId = params.get('placeId');
        this.subscribe('place', placeId, () => {
            this.place = Places.findOne(placeId);
            }, true);
    }
}
