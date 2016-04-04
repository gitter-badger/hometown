import {MainNews} from '../collections/main-news';

export function loadNews() {
    if (MainNews.find().count() === 0) {

        var news = [{
            title: 'Features',
            text: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
            cover: 'public/img/play.png'
        }, {
                title: 'Features',
                text: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
                cover: 'public/img/play.png'
            }
        ];

        for (var i = 0; i < news.length; i++) {
            MainNews.insert(news[i]);
        }
    }
};