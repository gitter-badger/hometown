import {MainNews} from '../collections/main-news.ts';

Meteor.publish('news', function() {
    return MainNews.find();
});