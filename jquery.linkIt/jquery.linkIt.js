/**
 * Created by Snehal on 10/06/2015.
 */
//to avoid conflicts to different libraries (2 different languages) we pass Jquery function and pass $ variable.
(function($) {
    //we need option to make plugin customizable.
    //$.fn is object and all methods are part of $.fn If we create a plugin nothing but method ia also a part of $.fn
    $.fn.linkIt = function(option) {

        //variable declared and initialised. override the default value of the var.
        var settings = $.extend({
            href: null,
            text: null,
            target: '_self'
        }, option);

        //validation
        if (settings.href == null) {
            return this;//this is a part of function($.fn) so we use this instead of $(this).
        }

        // each returns this. and it is chainable so each return this and we return it.
        return this.each(function () {
            var object = $(this);
            if (settings.text == null) {
                settings.text = object.text();

            }
            //The wrap() method wraps specified HTML element(s) around each selected element.
            object.wrap('<a href="'+settings.href+'" target="'+settings.target+'"></a>').text(settings.text);


        })
    }
}(jQuery))




