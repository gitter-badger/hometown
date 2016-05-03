import {Places} from '../collections/places';

export function loadNews() {
    if (Places.find().count() === 0) {

        var places = [{
            title: 'Features',
            text: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            cover: '/img/play.png'
        }, {
                title: 'Features',
                text: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                cover: '/img/play.png'
            }
        ];

        for (var i = 0; i < places.length; i++) {
            Places.insert(places[i]);
        }
    }
};