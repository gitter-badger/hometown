import {loadNews} from './loadNews.ts';
import './places.ts';

Meteor.startup(loadNews);