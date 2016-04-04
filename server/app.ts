import {loadNews} from './loadNews.ts';
import './main-news.ts';

Meteor.startup(loadNews);