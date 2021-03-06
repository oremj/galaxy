define('featured-games',
       ['jquery', 'l10n', 'utils', 'urls', 'z'],
       function($, l10n, utils, urls, z) {

    var gettext = l10n.gettext;

    function attachScrollEvents(el) {
        //  Can only attach after DOM is loaded because
        //  event bubbling does not work on scroll events. 
        $(el).on('scroll', function() {
            var $this = $(this);
            var $arrow = $this.parent().find('.arrow');
            $arrow.toggle(this.scrollTop + $this.height() + 30 < this.scrollHeight);
        });
    }

    return {
        attachScrollEvents: attachScrollEvents
    };
});
