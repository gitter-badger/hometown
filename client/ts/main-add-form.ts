/**
 * Created by vitaliy on 01.05.16.
 */
import 'zone.js';
import 'reflect-metadata';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {FormBuilder, ControlGroup, Validators, Control} from 'angular2/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {Places} from '../../collections/places';

import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';


@Component({
    selector: 'item-add-form',
    directives: [MATERIAL_DIRECTIVES, FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
    templateUrl: '/client/html/add-forms-components/add-item-form.html'
})

export class ItemAdd extends MeteorComponent {
    private uploader:FileUploader = new FileUploader({url: URL});
    placesForm: ControlGroup;
    constructor() {
        super();
        let files = new FileUploader({url: URL});
        let fb = new FormBuilder();

        this.placesForm = fb.group({
            title: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            links: ['', Validators.required],
            type: [''],
            text: ['']
        });
    }
    addPlace(place) {
        console.log("ADD PLACE");
        if (this.placesForm.valid) {
            console.log("IS VALID");
            Places.insert({
                title: place.title,
                address: place.address,
                phone: place.phone,
                links: place.links,
                type: place.type,
                text: place.text,
                created: new Date()
            });

            (this.placesForm.controls['title']).updateValue('');
            (this.placesForm.controls['address']).updateValue('');
            (this.placesForm.controls['phone']).updateValue('');
            (this.placesForm.controls['links']).updateValue('');
            (this.placesForm.controls['type']).updateValue('');
            (this.placesForm.controls['text']).updateValue('');
        }
    }
    clearForm() {
        (this.placesForm.controls['title']).updateValue('');
        (this.placesForm.controls['address']).updateValue('');
        (this.placesForm.controls['phone']).updateValue('');
        (this.placesForm.controls['links']).updateValue('');
        (this.placesForm.controls['type']).updateValue('');
        (this.placesForm.controls['text']).updateValue('');
    }
}

