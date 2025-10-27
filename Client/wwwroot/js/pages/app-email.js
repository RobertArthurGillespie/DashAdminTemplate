/*
Template Name: Reback - Responsive 5 Admin Dashboard
Author: Techzaa
File: email js
*/

class EmailApp {

    constructor() {

    }

    initEditors() {

        if (document.getElementById('bubble-editor')) {
            new Quill('#bubble-editor', {
                theme: 'bubble'
            });
        }
        if (document.getElementById('snow-editor')) {
            new Quill('#snow-editor', {
                theme: 'snow',
                modules: {
                    'toolbar': [[{ 'font': [] }], ['bold', 'italic', 'underline'], [{ 'color': [] }], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['direction', { 'align': [] }], ['link', 'image', 'video']]
                },
            });
        }
        if (document.getElementById('snow-editor2')) {
            console.log('here')
            new Quill('#snow-editor2', {
                theme: 'snow',
                modules: {
                    'toolbar': [[{ 'font': [] }], ['bold', 'italic', 'underline'], [{ 'color': [] }], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['direction', { 'align': [] }], ['link', 'image', 'video']]
                },
            });
        }
    }

    init() {
        this.initEditors();
    }

}

window.loadEmail = function () {
    new EmailApp().init();
}