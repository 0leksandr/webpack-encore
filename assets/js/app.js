'use strict';

import '../css/app.scss';
import getAMessage from './components/get_a_message';
import $ from 'jquery';
// global.$ = $; // uncomment to support legacy code
import 'bootstrap';

console.log(getAMessage(6));

$('.dropdown-toggle').dropdown();
$('.custom-file-input').on('change', function (event) {
    const inputFile = event.currentTarget;
    $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
});
