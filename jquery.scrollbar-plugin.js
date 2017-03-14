      // needs jqyery.js and jquery-ui.js with draggable widget
      (function($) {
      
      $.fn.customScrollbar = function (options) {

                var settings = $.extend({
                    width: '300px',
                    height: '200px',
                    scrollbarColor: '#84a9d1',
                    scrolltrackColor: '#ededed'
                }, options);

                return this.each(function () {

                    $(this).css({ 'width': settings.width, 'height': settings.height });

                    var $thisId = $(this).attr('id'),
                          $scrollable = $('#' + $thisId + ' .scrollable'),
                          $scrollbar = $('#' + $thisId + ' .scrollbar'),
                          $scrollTrack = $('#' + $thisId + ' .scroll-track'),

                          H = $scrollable.outerHeight(true),
                          sH = $scrollable[0].scrollHeight,
                          sbH = H * H / sH;

                    $($scrollbar).css('background-color', settings.scrollbarColor);
                    $($scrollTrack).css('background-color', settings.scrolltrackColor);

                    $($scrollTrack).height(sbH).draggable({
                        axis: 'y',
                        containment: 'parent',
                        drag: function (e, ui) {
                            $scrollable.scrollTop(sH / H * ui.position.top);
                        }
                    });

                    $scrollable.on("scroll", function () {
                        $scrollTrack.css({ top: $scrollable.scrollTop() / H * sbH });
                    });
                });
            };
            
            }(jQuery));
