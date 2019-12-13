/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.css';
import getAMessage from './get_a_message';
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
