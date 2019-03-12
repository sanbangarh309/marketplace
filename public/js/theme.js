//CUSTOM-JS

! function(e) {
    "use strict";
    e(window).on("load", function() {
        e("div").is(".page-loader") && e(".page-loader").delay(500).fadeOut(800)
    })
}(jQuery);

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$("#drop-tog").click(function(){
	$(this).toggleClass('active-tog');
	$("#drop-log").slideToggle();
	
 });
 
$("#drop-tog2").click(function(){
	$(this).toggleClass('active-tog');
	$("#drop-log2").slideToggle();
	
 });
/* FILTER-TOGGLE */
$('.right-filter > .drop-filter').on('click', (event) => {
  $('#filter-tog').slideToggle();
    
});

$(document).click(function(e) {
	$('.right-filter')
    .not($('.right-filter').has($(e.target)))
    .children('#filter-tog').hide();
    
}); 
/* FILTER-TOGGLE-ENDS */
 
 

 
 

$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1, 
			slideMargin: 40,
			infiniteLoop: true,
			auto: true,
			slideWidth: 660,
			minSlides: 5,
			maxSlides: 5,
			speed: 800,
		});
	});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
			
        } else {
            $('.back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
        return false;
    });
});
/* $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").addClass("fixed-theme");
    } else {
        $("header").removeClass("fixed-theme");
    }
}); */

/* STEP-FORM */
$(document).ready(function () {

    $('.next').click(function () {
        $('.current').removeClass('current').hide().next().show().addClass('current');
        $('#progressbar li.active').next().addClass('active');

        if ($('#progress')) {};

    });

    $('.previous').click(function () {
        $('.current').removeClass('current').hide().prev().show().addClass('current');
        $('#progressbar li.active').removeClass('active').prev().addClass('active');
    });
	
});



$("#post-category").change(function() {
   var val = $(this).text();
   if (val != "Admin") {
      $("#subcate").show();
   }
});

$('#project-date').datepicker({
	format: 'mm/dd/yyyy',
	uiLibrary: 'bootstrap4'
	
});
$('#edit-birth').datepicker({
	format: 'mm/dd/yyyy',
	uiLibrary: 'bootstrap4'
	
});


//INPUT-NUMBER-JS
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
	
//SCROLL-FUNCTION---/
(function($){
	$(window).on("load",function(){
		
		$("#content-1").mCustomScrollbar({
			setTop:"540px"
		});
		$("#content-2").mCustomScrollbar({
			setTop:"540px"
		});
		$("#contacts").mCustomScrollbar({
			setTop:"540px"
		});
		// $("#chats-messages").mCustomScrollbar({
		// 	setTop:$("#chats-messages").height() + "px"
		// });
		$("#newtask-list").mCustomScrollbar({
			setTop:"540px"
		});
		$("#oldtask-list").mCustomScrollbar({
			setTop:"540px"
		});
	});
})(jQuery);

//-----*CHAT-FUNCTION*----//
$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

// $(".expand-button").click(function() {
//   $("#profile").toggleClass("expanded");
// 	$("#contacts").toggleClass("expanded");
// });

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

function newMessage() {
	message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	
};

$('.submit').click(function() {
  // $("#chats-messages").mCustomScrollbar("update");
  // $("#chats-messages").mCustomScrollbar("scrollTo", "bottom");
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    // $("#chats-messages").mCustomScrollbar("update");
    // $("#chats-messages").mCustomScrollbar("scrollTo", "bottom");
    return false;
  }
});

$('.list-applied').on('click', 'li', function() {
    $('.list-applied li.show-bx').removeClass('show-bx');
    $(this).addClass('show-bx');
});

/* TAG-INPUT-JS */
$.fn.tagInput = function(options) {

	return this.each(function() {
	
		var settings = $.extend( {}, { labelClass: "label label-success" }, options );
	
		var tagInput = $(this);
		var hiddenInput = $(this).children('input[type=hidden]');
		var textInput = $(this).children('input[type=text]');
		
		cleanUpHiddenField();
		
		var defaultValues = hiddenInput.val().split(',');
		if (hiddenInput.val()!="") {
			for(i=0; i<defaultValues.length; i++) {
				addLabel(defaultValues[i]);
			}
		}
		textInput.keydown(function(event) {
			var str = $(this).val();
			if(event.keyCode == 8) { //Backspace
				if(str.length == 0) {
					closeLabel(-1);
				}
			} else if( event.keyCode == 13 ) { //Enter
				makeBadge();
				event.preventDefault();
				return false;
			}
		});
		
		textInput.keyup(function(event) {
			var str = $(this).val();
			if( event.keyCode == 27 ) { //Escape
				textInput.val("");
				textInput.blur();
			} else if( event.keyCode == 13 ) { //Enter
				makeBadge();
				event.preventDefault();
				return false;
			}
			if (str.indexOf(",") >= 0) {
				makeBadge();
			}
		});
		
		textInput.change(function() {
			makeBadge();
		});
		
		function makeBadge() {
			str = textInput.val();
			if(/\S/.test(str)) {
				str = str.replace(',','');
				str = str.trim();
				textInput.val("");
				addLabel(str);
				var result = textInput.next();
				result.val(result.val()+','+str);
				cleanUpHiddenField();
			}
		}
		
		function closeLabel(id) {
			if(id>0) {
				label = tagInput.children('span.tagLabel[data-badge='+id+']');
			} else {
				label = tagInput.children('span.tagLabel').last();
			}
			hiddenInput.val(hiddenInput.val().replace((label.text().slice(0,-2)),''));
			cleanUpHiddenField();
			label.remove();
		}
		
		function addLabel(str) {
			if(tagInput.children('span.tagLabel').length > 0) {
				badge = textInput.prev();
				var id = badge.data('badge') + 1;
				label = $( '<span class="'+settings.labelClass+' tagLabel" data-badge="'+id+'">'+str+' <a href="#" data-badge="'+id+'" aria-label="close" class="closelabel">&times;</a></span> ' ).insertAfter(badge);
			} else {
				label = $( '<span class="'+settings.labelClass+' tagLabel" data-badge="1">'+str+' <a href="#" data-badge="1" aria-label="close" class="closelabel">&times;</a></span> ' ).insertBefore(textInput);
			}
			label.children('.closelabel').click(function() {				
				closeLabel($(this).data('badge'));
			});
		}
		
		function cleanUpHiddenField() {
			s = hiddenInput.val();
			s = s.replace(/^( *, *)+|(, *(?=,|$))+/g, '');
			hiddenInput.val(s);
		}
		
	});

};

$(document).ready(function(){
	// $('#tags2').tagInput({labelClass:"badge badge-warning"});
  });
  
  
  
  
  
  // on preview show iframe
    $('#VideoModal').on('show.bs.modal', function (e) {
      var idVideo = $(e.relatedTarget).data('id');
      $('#VideoModal .modal-body').html('<iframe width="100%" height="400px" src="https://www.youtube.com/embed/' + idVideo + '?autoplay=true" frameborder="0" allowfullscreen></iframe>');
    });
    //on close remove
    $('#VideoModal').on('hidden.bs.modal', function () {
       $('#VideoModal .modal-body').empty();
    });
  
  
  
  //Add-tags-input
  // bootstrap-tagsinput.js file - add in local

(function ($) {
  "use strict";

  var defaultOptions = {
    tagClass: function(item) {
      return 'label label-info';
    },
    itemValue: function(item) {
      return item ? item.toString() : item;
    },
    itemText: function(item) {
      return this.itemValue(item);
    },
    itemTitle: function(item) {
      return null;
    },
    freeInput: true,
    addOnBlur: true,
    maxTags: undefined,
    maxChars: undefined,
    confirmKeys: [13, 44],
    delimiter: ',',
    delimiterRegex: null,
    cancelConfirmKeysOnEmpty: true,
    onTagExists: function(item, $tag) {
      $tag.hide().fadeIn();
    },
    trimValue: false,
    allowDuplicates: false
  };

  /**
   * Constructor function
   */
  function TagsInput(element, options) {
    this.itemsArray = [];

    this.$element = $(element);
    this.$element.hide();

    this.isSelect = (element.tagName === 'SELECT');
    this.multiple = (this.isSelect && element.hasAttribute('multiple'));
    this.objectItems = options && options.itemValue;
    this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
    this.inputSize = Math.max(1, this.placeholderText.length);

    this.$container = $('<div class="bootstrap-tagsinput"></div>');
    this.$input = $('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);

    this.$element.before(this.$container);

    this.build(options);
  }

  TagsInput.prototype = {
    constructor: TagsInput,

    /**
     * Adds the given item as a new tag. Pass true to dontPushVal to prevent
     * updating the elements val()
     */
    add: function(item, dontPushVal, options) {
      var self = this;

      if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
        return;

      // Ignore falsey values, except false
      if (item !== false && !item)
        return;

      // Trim value
      if (typeof item === "string" && self.options.trimValue) {
        item = $.trim(item);
      }

      // Throw an error when trying to add an object while the itemValue option was not set
      if (typeof item === "object" && !self.objectItems)
        throw("Can't add objects when itemValue option is not set");

      // Ignore strings only containg whitespace
      if (item.toString().match(/^\s*$/))
        return;

      // If SELECT but not multiple, remove current tag
      if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
        self.remove(self.itemsArray[0]);

      if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
        var delimiter = (self.options.delimiterRegex) ? self.options.delimiterRegex : self.options.delimiter;
        var items = item.split(delimiter);
        if (items.length > 1) {
          for (var i = 0; i < items.length; i++) {
            this.add(items[i], true);
          }

          if (!dontPushVal)
            self.pushVal();
          return;
        }
      }

      var itemValue = self.options.itemValue(item),
          itemText = self.options.itemText(item),
          tagClass = self.options.tagClass(item),
          itemTitle = self.options.itemTitle(item);

      // Ignore items allready added
      var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
      if (existing && !self.options.allowDuplicates) {
        // Invoke onTagExists
        if (self.options.onTagExists) {
          var $existingTag = $(".tag", self.$container).filter(function() { return $(this).data("item") === existing; });
          self.options.onTagExists(item, $existingTag);
        }
        return;
      }

      // if length greater than limit
      if (self.items().toString().length + item.length + 1 > self.options.maxInputLength)
        return;

      // raise beforeItemAdd arg
      var beforeItemAddEvent = $.Event('beforeItemAdd', { item: item, cancel: false, options: options});
      self.$element.trigger(beforeItemAddEvent);
      if (beforeItemAddEvent.cancel)
        return;

      // register item in internal array and map
      self.itemsArray.push(item);

      // add a tag element

      var $tag = $('<span class="tag ' + htmlEncode(tagClass) + (itemTitle !== null ? ('" title="' + itemTitle) : '') + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
      $tag.data('item', item);
      self.findInputWrapper().before($tag);
      $tag.after(' ');

      // add <option /> if item represents a value not present in one of the <select />'s options
      if (self.isSelect && !$('option[value="' + encodeURIComponent(itemValue) + '"]',self.$element)[0]) {
        var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
        $option.data('item', item);
        $option.attr('value', itemValue);
        self.$element.append($option);
      }

      if (!dontPushVal)
        self.pushVal();

      // Add class when reached maxTags
      if (self.options.maxTags === self.itemsArray.length || self.items().toString().length === self.options.maxInputLength)
        self.$container.addClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemAdded', { item: item, options: options }));
    },

    /**
     * Removes the given item. Pass true to dontPushVal to prevent updating the
     * elements val()
     */
    remove: function(item, dontPushVal, options) {
      var self = this;

      if (self.objectItems) {
        if (typeof item === "object")
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } );
        else
          item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } );

        item = item[item.length-1];
      }

      if (item) {
        var beforeItemRemoveEvent = $.Event('beforeItemRemove', { item: item, cancel: false, options: options });
        self.$element.trigger(beforeItemRemoveEvent);
        if (beforeItemRemoveEvent.cancel)
          return;

        $('.tag', self.$container).filter(function() { return $(this).data('item') === item; }).remove();
        $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();
        if($.inArray(item, self.itemsArray) !== -1)
          self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
      }

      if (!dontPushVal)
        self.pushVal();

      // Remove class when reached maxTags
      if (self.options.maxTags > self.itemsArray.length)
        self.$container.removeClass('bootstrap-tagsinput-max');

      self.$element.trigger($.Event('itemRemoved',  { item: item, options: options }));
    },

    /**
     * Removes all items
     */
    removeAll: function() {
      var self = this;

      $('.tag', self.$container).remove();
      $('option', self.$element).remove();

      while(self.itemsArray.length > 0)
        self.itemsArray.pop();

      self.pushVal();
    },

    /**
     * Refreshes the tags so they match the text/value of their corresponding
     * item.
     */
    refresh: function() {
      var self = this;
      $('.tag', self.$container).each(function() {
        var $tag = $(this),
            item = $tag.data('item'),
            itemValue = self.options.itemValue(item),
            itemText = self.options.itemText(item),
            tagClass = self.options.tagClass(item);

          // Update tag's class and inner text
          $tag.attr('class', null);
          $tag.addClass('tag ' + htmlEncode(tagClass));
          $tag.contents().filter(function() {
            return this.nodeType == 3;
          })[0].nodeValue = htmlEncode(itemText);

          if (self.isSelect) {
            var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });
            option.attr('value', itemValue);
          }
      });
    },

    /**
     * Returns the items added as tags
     */
    items: function() {
      return this.itemsArray;
    },

    /**
     * Assembly value by retrieving the value of each item, and set it on the
     * element.
     */
    pushVal: function() {
      var self = this,
          val = $.map(self.items(), function(item) {
            return self.options.itemValue(item).toString();
          });

      self.$element.val(val, true).trigger('change');
    },

    /**
     * Initializes the tags input behaviour on the element
     */
    build: function(options) {
      var self = this;

      self.options = $.extend({}, defaultOptions, options);
      // When itemValue is set, freeInput should always be false
      if (self.objectItems)
        self.options.freeInput = false;

      makeOptionItemFunction(self.options, 'itemValue');
      makeOptionItemFunction(self.options, 'itemText');
      makeOptionFunction(self.options, 'tagClass');

      // Typeahead Bootstrap version 2.3.2
      if (self.options.typeahead) {
        var typeahead = self.options.typeahead || {};

        makeOptionFunction(typeahead, 'source');

        self.$input.typeahead($.extend({}, typeahead, {
          source: function (query, process) {
            function processItems(items) {
              var texts = [];

              for (var i = 0; i < items.length; i++) {
                var text = self.options.itemText(items[i]);
                map[text] = items[i];
                texts.push(text);
              }
              process(texts);
            }

            this.map = {};
            var map = this.map,
                data = typeahead.source(query);

            if ($.isFunction(data.success)) {
              // support for Angular callbacks
              data.success(processItems);
            } else if ($.isFunction(data.then)) {
              // support for Angular promises
              data.then(processItems);
            } else {
              // support for functions and jquery promises
              $.when(data)
               .then(processItems);
            }
          },
          updater: function (text) {
            self.add(this.map[text]);
            return this.map[text];
          },
          matcher: function (text) {
            return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
          },
          sorter: function (texts) {
            return texts.sort();
          },
          highlighter: function (text) {
            var regex = new RegExp( '(' + this.query + ')', 'gi' );
            return text.replace( regex, "<strong>$1</strong>" );
          }
        }));
      }

      // typeahead.js
      if (self.options.typeaheadjs) {
          var typeaheadConfig = null;
          var typeaheadDatasets = {};

          // Determine if main configurations were passed or simply a dataset
          var typeaheadjs = self.options.typeaheadjs;
          if ($.isArray(typeaheadjs)) {
            typeaheadConfig = typeaheadjs[0];
            typeaheadDatasets = typeaheadjs[1];
          } else {
            typeaheadDatasets = typeaheadjs;
          }

          self.$input.typeahead(typeaheadConfig, typeaheadDatasets).on('typeahead:selected', $.proxy(function (obj, datum) {
            if (typeaheadDatasets.valueKey)
              self.add(datum[typeaheadDatasets.valueKey]);
            else
              self.add(datum);
            self.$input.typeahead('val', '');
          }, self));
      }

      self.$container.on('click', $.proxy(function(event) {
        if (! self.$element.attr('disabled')) {
          self.$input.removeAttr('disabled');
        }
        self.$input.focus();
      }, self));

        if (self.options.addOnBlur && self.options.freeInput) {
          self.$input.on('focusout', $.proxy(function(event) {
              // HACK: only process on focusout when no typeahead opened, to
              //       avoid adding the typeahead text as tag
              if ($('.typeahead, .twitter-typeahead', self.$container).length === 0) {
                self.add(self.$input.val());
                self.$input.val('');
              }
          }, self));
        }


      self.$container.on('keydown', 'input', $.proxy(function(event) {
        var $input = $(event.target),
            $inputWrapper = self.findInputWrapper();

        if (self.$element.attr('disabled')) {
          self.$input.attr('disabled', 'disabled');
          return;
        }

        switch (event.which) {
          // BACKSPACE
          case 8:
            if (doGetCaretPosition($input[0]) === 0) {
              var prev = $inputWrapper.prev();
              if (prev.length) {
                self.remove(prev.data('item'));
              }
            }
            break;

          // DELETE
          case 46:
            if (doGetCaretPosition($input[0]) === 0) {
              var next = $inputWrapper.next();
              if (next.length) {
                self.remove(next.data('item'));
              }
            }
            break;

          // LEFT ARROW
          case 37:
            // Try to move the input before the previous tag
            var $prevTag = $inputWrapper.prev();
            if ($input.val().length === 0 && $prevTag[0]) {
              $prevTag.before($inputWrapper);
              $input.focus();
            }
            break;
          // RIGHT ARROW
          case 39:
            // Try to move the input after the next tag
            var $nextTag = $inputWrapper.next();
            if ($input.val().length === 0 && $nextTag[0]) {
              $nextTag.after($inputWrapper);
              $input.focus();
            }
            break;
         default:
             // ignore
         }

        // Reset internal input's size
        var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
        $input.attr('size', Math.max(this.inputSize, $input.val().length));
      }, self));

      self.$container.on('keypress', 'input', $.proxy(function(event) {
         var $input = $(event.target);

         if (self.$element.attr('disabled')) {
            self.$input.attr('disabled', 'disabled');
            return;
         }

         var text = $input.val(),
         maxLengthReached = self.options.maxChars && text.length >= self.options.maxChars;
         if (self.options.freeInput && (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {
            // Only attempt to add a tag if there is data in the field
            if (text.length !== 0) {
               self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);
               $input.val('');
            }

            // If the field is empty, let the event triggered fire as usual
            if (self.options.cancelConfirmKeysOnEmpty === false) {
               event.preventDefault();
            }
         }

         // Reset internal input's size
         var textLength = $input.val().length,
            wordSpace = Math.ceil(textLength / 5),
            size = textLength + wordSpace + 1;
         $input.attr('size', Math.max(this.inputSize, $input.val().length));
      }, self));

      // Remove icon clicked
      self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
        if (self.$element.attr('disabled')) {
          return;
        }
        self.remove($(event.target).closest('.tag').data('item'));
      }, self));

      // Only add existing value as tags when using strings as tags
      if (self.options.itemValue === defaultOptions.itemValue) {
        if (self.$element[0].tagName === 'INPUT') {
            self.add(self.$element.val());
        } else {
          $('option', self.$element).each(function() {
            self.add($(this).attr('value'), true);
          });
        }
      }
    },

    /**
     * Removes all tagsinput behaviour and unregsiter all event handlers
     */
    destroy: function() {
      var self = this;

      // Unbind events
      self.$container.off('keypress', 'input');
      self.$container.off('click', '[role=remove]');

      self.$container.remove();
      self.$element.removeData('tagsinput');
      self.$element.show();
    },

    /**
     * Sets focus on the tagsinput
     */
    focus: function() {
      this.$input.focus();
    },

    /**
     * Returns the internal input element
     */
    input: function() {
      return this.$input;
    },

    /**
     * Returns the element which is wrapped around the internal input. This
     * is normally the $container, but typeahead.js moves the $input element.
     */
    findInputWrapper: function() {
      var elt = this.$input[0],
          container = this.$container[0];
      while(elt && elt.parentNode !== container)
        elt = elt.parentNode;

      return $(elt);
    }
  };

  /**
   * Register JQuery plugin
   */
  $.fn.tagsinput = function(arg1, arg2, arg3) {
    var results = [];

    this.each(function() {
      var tagsinput = $(this).data('tagsinput');
      // Initialize a new tags input
      if (!tagsinput) {
          tagsinput = new TagsInput(this, arg1);
          $(this).data('tagsinput', tagsinput);
          results.push(tagsinput);

          if (this.tagName === 'SELECT') {
              $('option', $(this)).attr('selected', 'selected');
          }

          // Init tags from $(this).val()
          $(this).val($(this).val());
      } else if (!arg1 && !arg2) {
          // tagsinput already exists
          // no function, trying to init
          results.push(tagsinput);
      } else if(tagsinput[arg1] !== undefined) {
          // Invoke function on existing tags input
            if(tagsinput[arg1].length === 3 && arg3 !== undefined){
               var retVal = tagsinput[arg1](arg2, null, arg3);
            }else{
               var retVal = tagsinput[arg1](arg2);
            }
          if (retVal !== undefined)
              results.push(retVal);
      }
    });

    if ( typeof arg1 == 'string') {
      // Return the results from the invoked function calls
      return results.length > 1 ? results : results[0];
    } else {
      return results;
    }
  };

  $.fn.tagsinput.Constructor = TagsInput;

  /**
   * 
   */
  function makeOptionItemFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var propertyName = options[key];
      options[key] = function(item) { return item[propertyName]; };
    }
  }
  function makeOptionFunction(options, key) {
    if (typeof options[key] !== 'function') {
      var value = options[key];
      options[key] = function() { return value; };
    }
  }
  /**
   * 
   */
  var htmlEncodeContainer = $('<div />');
  function htmlEncode(value) {
    if (value) {
      return htmlEncodeContainer.text(value).html();
    } else {
      return '';
    }
  }

  /**
   
   */
  function doGetCaretPosition(oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus ();
      var oSel = document.selection.createRange();
      oSel.moveStart ('character', -oField.value.length);
      iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == '0') {
      iCaretPos = oField.selectionStart;
    }
    return (iCaretPos);
  }

  
  function keyCombinationInList(keyPressEvent, lookupList) {
      var found = false;
      $.each(lookupList, function (index, keyCombination) {
          if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {
              found = true;
              return false;
          }

          if (keyPressEvent.which === keyCombination.which) {
              var alt = !keyCombination.hasOwnProperty('altKey') || keyPressEvent.altKey === keyCombination.altKey,
                  shift = !keyCombination.hasOwnProperty('shiftKey') || keyPressEvent.shiftKey === keyCombination.shiftKey,
                  ctrl = !keyCombination.hasOwnProperty('ctrlKey') || keyPressEvent.ctrlKey === keyCombination.ctrlKey;
              if (alt && shift && ctrl) {
                  found = true;
                  return false;
              }
          }
      });

      return found;
  }

  /**
   * 
   * 
   */
  $(function() {
    $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
  });
})(window.jQuery);
$(document).ready(function(){
  $(".bootstrap-tagsinput > input").focus(function(){
    $(".dropdown-skills").toggle();
  });
});


/////APPEND-NEW-DIV
$(document).ready(function(){
		//group add limit
		var maxGroup = 10;
		
		//add more fields group
		$(".addMore").click(function(){
				if($('body').find('.fieldGroup').length <= maxGroup){
						var fieldHTML = '<div class="form-group fieldGroup">'+$(".fieldGroupCopy").html()+'</div>';
						$('body').find('.fieldGroup:last').after(fieldHTML);
				}else{
						alert('Maximum '+maxGroup+' groups are allowed.');
				}
		});
		
		//remove fields group
		$("body").on("click",".remove",function(){ 
				$(this).parents(".fieldGroup").remove();
		});
});



//VALIDATION-STEP-FORM
 
 /* $(document).ready( function () {
	/*  jQuery.validator.setDefaults({
		debug: true,
		success: "valid"
	}); 

	 $.validator.addMethod("valueNotEquals", function(value, element, arg){
	  return arg !== value;
	 }, "Value must not equal arg.");
	 $.validator.addMethod("valueNotEquals2", function(value, element, arg){
	  return arg !== value;
	 }, "Please select an item.");
	 
	$(".action-button").click(function(){
		alert('asddsac');
			var form = $("#helpdeskform");
			form.validate({
				rules: {
					categorytype: { 
						valueNotEquals: "default" 
					},
					subcategorytype: { 
						valueNotEquals2: "default" 
					}
				},
				messages: {
					categorytype: "Please select an item!",
					categorytype2: "Please select an item!"
					
				}
			});
			
		});
 }); */
 
 
 
 //INCREASE_DECREASE-INPUT
 $input = $('#est-budget');

$('.btn').on('click',function(){
     $val = $input.val();
    if ($(this).hasClass('btn-minuse')) {
     $input.val(parseInt($val)-100);
    } else {
    $input.val(parseInt($val)+100);
    }
});


//BUTTON_ENABLED-DISABLED


 $('#comment-textarea').on('keyup',function() {
		
        var textarea_value = $("#comment-textarea").val();
       
        if(textarea_value != '') {
			$('#submitbtn').attr('disabled',false);
        } else {
            $('#submitbtn').attr('disabled', true);
        }
    });

