/**
 * Created by vitaliy on 01.05.16.
 */
import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';


@Component({
    selector: 'item-add-form',
    directives: [MATERIAL_DIRECTIVES, FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: '/client/html/add-forms-components/add-item-form.html'
})

export class ItemAdd extends MeteorComponent {
    private uploader:FileUploader = new FileUploader({url: URL});

    constructor() {
        super();
        let files = new FileUploader({url: URL});
        
        console.log(files);
    }
}

