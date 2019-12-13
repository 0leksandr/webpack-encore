'use strict';

import '../css/article_show.scss';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
    let $like_article = $('.js-like-article');
    $like_article.tooltip();

    $like_article.on('click', function(e) {
        e.preventDefault();

        let $link = $(e.currentTarget);
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $.ajax({
            method: 'POST',
            url: $link.attr('href')
        }).done(function(data) {
            $('.js-like-article-count').html(data.hearts);
        })
    });
});
