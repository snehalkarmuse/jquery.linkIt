/**
 * Created by Nitin on 10/06/2015.
 */
(function($) {
    $.fn.linkIt = function (option) {
        var settings = $.extend({
            href: null,
            text: null,
            target: '_self'
        }, option);

        if (settings.href == null) {
            console.log("you need href option ");
            return this;
        }
        return this.each(function () {
            var object = $(this);
            if (settings.text == null) {
                settings.text = object.text();
                object.wrap('<a target="' + settings.target + '"href="' + settings.href + '"></a>').text(settings.text);
            }
        })
    }
}(jQuery))




