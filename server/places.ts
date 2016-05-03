import {Places} from '../collections/places';

Meteor.publish('places', function() {
    return Places.find();
});

Meteor.publish('place', function(placeId: string) {
    return Places.find(placeId);
});