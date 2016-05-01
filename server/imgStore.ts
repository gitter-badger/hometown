//import { UploadFS } from './meteor/jalik:ufs';
//import { Images, Thumbs } from '../collections/images';
//
//export const ThumbsStore = new UploadFS.store.GridFS({
//    collection: Thumbs,
//    name: 'thumbs'
//});
//
//export const ImagesStore = new UploadFS.store.GridFS({
//    collection: Images,
//    name: 'images',
//    filter: new UploadFS.Filter({
//        contentTypes: ['image/*']
//    }),
//    copyTo: [
//        ThumbsStore
//    ]
//});