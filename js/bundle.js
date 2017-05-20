(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _tinySlider = require('../node_modules/tiny-slider/src/tiny-slider');

var doc = document,
    sliders = {},
    speed = 100,
    edgepadding = 50,
    gutter = 10,
    options = {
  'base': {
    items: 3,
    slideBy: 'page'
  },
  'mouseDrag': {
    items: 3,
    mouseDrag: true,
    slideBy: 'page'
  },
  'gutter': {
    items: 3,
    gutter: gutter
  },
  'edgePadding': {
    items: 3,
    edgePadding: edgepadding
  },
  'edgePaddingGutter': {
    items: 3,
    gutter: gutter,
    edgePadding: edgepadding
  },
  'nonLoop': {
    items: 3,
    loop: false
  },
  'rewind': {
    items: 3,
    rewind: true
  },
  'slideByPage': {
    items: 3,
    slideBy: 'page'
  },
  'fixedWidth': {
    fixedWidth: 300
  },
  'fixedWidthGutter': {
    gutter: gutter,
    fixedWidth: 300
  },
  'fixedWidthEdgePadding': {
    edgePadding: edgepadding,
    fixedWidth: 300
  },
  'fixedWidthEdgePaddingGutter': {
    gutter: gutter,
    edgePadding: edgepadding,
    fixedWidth: 300
  },
  'responsive': {
    responsive: {
      600: 2,
      900: 3
    }
  },
  'arrowKeys': {
    items: 3,
    arrowKeys: true
  },
  'autoplay': {
    items: 3,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: speed * 9,
    autoplayText: ['▶', '❚❚']
  },
  'vertical': {
    items: 3,
    axis: 'vertical'
  },
  'verticalGutter': {
    items: 3,
    axis: 'vertical',
    gutter: gutter
  },
  'verticalEdgepadding': {
    items: 3,
    axis: 'vertical',
    edgePadding: edgepadding
  },
  'verticalEdgepaddingGutter': {
    items: 3,
    axis: 'vertical',
    gutter: gutter,
    edgePadding: edgepadding
  },
  'animation': {
    speed: speed * 10,
    items: 3,
    mode: 'gallery',
    arrowKeys: true,
    animateIn: 'jello',
    animateOut: 'rollOut',
    animateDelay: speed * 3
  },
  'lazyload': {
    items: 3,
    edgePadding: 40,
    lazyload: true,
    onInit: function onInit(info) {
      // console.log(info.items);
    }
  },
  'customize': {
    items: 3,
    controlsContainer: doc.querySelector('.customize-tools .controls'),
    navContainer: doc.querySelector('.customize-tools .thumbnails'),
    autoplay: true,
    autoplayButton: doc.querySelector('.playbutton-wrapper > button')
  },
  'autoHeight': {
    autoHeight: true,
    items: 1
  }
};

for (var i in options) {
  var item = options[i];
  item.container = doc.querySelector('#' + i);
  if (!item.speed) {
    item.speed = speed;
  }
  sliders[i] = (0, _tinySlider.tns)(options[i]);
}

// tns().events.on('initilized', function(info) {
//   console.log(info.container.id);
// });
// console.log(lazyloadS.events === customizeS.events);
// lazyloadS.events.on('transitionEnd', function(info) {
//   console.log(info.container.id);
// });

// tns().events.on('transitionEnd', function(info) {
//   if (info.container.id === 'base') {
//     console.log(e.type, info.container.id);
//   }
// });

// document.querySelector('.responsive_wrapper [data-controls="next"]').addEventListener('click', function () {
//   var info = responsiveSD.getInfo();
//   alert(info.indexCached + ' : ' + info.index);
// }, false);

},{"../node_modules/tiny-slider/src/tiny-slider":30}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;

var _isNodeList = require("./isNodeList");

function append(els, data) {
  var els_new = (0, _isNodeList.isNodeList)(els) ? els : [els],
      i;

  if (typeof data.nodeType !== "undefined" && data.nodeType === 1) {
    for (i = els_new.length; i--;) {
      els_new[i].appendChild(data);
    }
  } else if (typeof data === "string") {
    for (i = els_new.length; i--;) {
      els_new[i].insertAdjacentHTML("beforeend", data);
    }
  } else if ((0, _isNodeList.isNodeList)(data)) {
    var fragment = document.createDocumentFragment();
    for (i = data.length; i--;) {
      fragment.insertBefore(data[i], fragment.firstChild);
    }
    for (var j = els_new.length; j--;) {
      els_new[j].appendChild(fragment);
    }
  }
}

},{"./isNodeList":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
function extend() {
  var obj,
      name,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupportedProp = getSupportedProp;
function getSupportedProp(proparray) {
  var root = document.documentElement;
  for (var i = 0; i < proparray.length; i++) {
    if (proparray[i] in root.style) {
      return proparray[i];
    }
  }
}

// var getTD = gn.getSupportedProp(['transitionDuration', 'WebkitTransitionDuration', 'MozTransitionDuration', 'OTransitionDuration']),
// getTransform = gn.getSupportedProp(['transform', 'WebkitTransform', 'MozTransform', 'OTransform']);

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexOf = indexOf;
function indexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNodeList = isNodeList;
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined";
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrap = unwrap;

var _isNodeList = require("./isNodeList");

function unwrap(els) {
  var elsNew = (0, _isNodeList.isNodeList)(els) ? els : [els];
  for (var i = elsNew.length; i--;) {
    var el = elsNew[i];

    // get the element's parent node
    var parent = el.parentNode;

    // move all children out of the element
    while (el.firstChild) {
      parent.insertBefore(el.firstChild, el);
    }

    // remove the empty element
    parent.removeChild(el);
  }
}

},{"./isNodeList":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = wrap;

var _isNodeList = require("./isNodeList");

function wrap(els, obj) {
  var elsNew = (0, _isNodeList.isNodeList)(els) ? els : [els];
  // Loops backwards to prevent having to clone the wrapper on the
  // first element (see `wrapper` below).
  for (var i = elsNew.length; i--;) {
    var wrapper = i > 0 ? obj.cloneNode(true) : obj,
        el = elsNew[i];

    // Cache the current parent and sibling.
    var parent = el.parentNode,
        sibling = el.nextSibling;

    // Wrap the element (is automatically removed from its current parent).
    wrapper.appendChild(el);

    // If the element had a sibling, insert the wrapper before
    // the sibling to maintain the HTML structure; otherwise, just
    // append it to the parent.
    if (sibling) {
      parent.insertBefore(wrapper, sibling);
    } else {
      parent.appendChild(wrapper);
    }
  }
}

},{"./isNodeList":6}],9:[function(require,module,exports){
"use strict";

// ChildNode.remove
(function () {
  "use strict";

  if (!("remove" in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
})();

},{}],10:[function(require,module,exports){
'use strict';

// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now) Date.now = function () {
    return new Date().getTime();
};

(function () {
    'use strict';

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
})();

},{}],11:[function(require,module,exports){
"use strict";

/** DOMTokenList polyfill */
(function () {
	"use strict";

	/*<*/

	var UNDEF,
	    WIN = window,
	    DOC = document,
	    OBJ = Object,
	    NULL = null,
	    TRUE = true,
	    FALSE = false,

	/*>*/

	/** Munge the hell out of our string literals. Saves a tonne of space after compression. */
	SPACE = " ",
	    ELEMENT = "Element",
	    CREATE_ELEMENT = "create" + ELEMENT,
	    DOM_TOKEN_LIST = "DOMTokenList",
	    DEFINE_GETTER = "__defineGetter__",
	    DEFINE_PROPERTY = "defineProperty",
	    CLASS_ = "class",
	    LIST = "List",
	    CLASS_LIST = CLASS_ + LIST,
	    REL = "rel",
	    REL_LIST = REL + LIST,
	    DIV = "div",
	    LENGTH = "length",
	    CONTAINS = "contains",
	    APPLY = "apply",
	    HTML_ = "HTML",
	    METHODS = ("item " + CONTAINS + " add remove toggle toString toLocaleString").split(SPACE),
	    ADD = METHODS[2],
	    REMOVE = METHODS[3],
	    TOGGLE = METHODS[4],
	    PROTOTYPE = "prototype",


	/** Ascertain browser support for Object.defineProperty */
	dpSupport = DEFINE_PROPERTY in OBJ || DEFINE_GETTER in OBJ[PROTOTYPE] || NULL,


	/** Wrapper for Object.defineProperty that falls back to using the legacy __defineGetter__ method if available. */
	defineGetter = function defineGetter(object, name, fn, configurable) {
		if (OBJ[DEFINE_PROPERTY]) OBJ[DEFINE_PROPERTY](object, name, {
			configurable: FALSE === dpSupport ? TRUE : !!configurable,
			get: fn
		});else object[DEFINE_GETTER](name, fn);
	},


	/** DOMTokenList interface replacement */
	DOMTokenList = function DOMTokenList(el, prop) {
		var THIS = this,


		/** Private variables */
		tokens = [],
		    tokenMap = {},
		    length = 0,
		    maxLength = 0,
		    reindex = function reindex() {

			/** Define getter functions for array-like access to the tokenList's contents. */
			if (length >= maxLength) for (; maxLength < length; ++maxLength) {
				(function (i) {

					defineGetter(THIS, i, function () {
						preop();
						return tokens[i];
					}, FALSE);
				})(maxLength);
			}
		},


		/** Helper function called at the start of each class method. Internal use only. */
		preop = function preop() {
			var error,
			    i,
			    args = arguments,
			    rSpace = /\s+/;

			/** Validate the token/s passed to an instance method, if any. */
			if (args[LENGTH]) for (i = 0; i < args[LENGTH]; ++i) {
				if (rSpace.test(args[i])) {
					error = new SyntaxError('String "' + args[i] + '" ' + CONTAINS + ' an invalid character');
					error.code = 5;
					error.name = "InvalidCharacterError";
					throw error;
				}
			} /** Split the new value apart by whitespace*/
			tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);

			/** Avoid treating blank strings as single-item token lists */
			if ("" === tokens[0]) tokens = [];

			/** Repopulate the internal token lists */
			tokenMap = {};
			for (i = 0; i < tokens[LENGTH]; ++i) {
				tokenMap[tokens[i]] = TRUE;
			}length = tokens[LENGTH];
			reindex();
		};

		/** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
		preop();

		/** Return the number of tokens in the underlying string. Read-only. */
		defineGetter(THIS, LENGTH, function () {
			preop();
			return length;
		});

		/** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
		THIS[METHODS[6] /** toLocaleString */] = THIS[METHODS[5] /** toString       */] = function () {
			preop();
			return tokens.join(SPACE);
		};

		/** Return an item in the list by its index (or undefined if the number is greater than or equal to the length of the list) */
		THIS.item = function (idx) {
			preop();
			return tokens[idx];
		};

		/** Return TRUE if the underlying string contains `token`; otherwise, FALSE. */
		THIS[CONTAINS] = function (token) {
			preop();
			return !!tokenMap[token];
		};

		/** Add one or more tokens to the underlying string. */
		THIS[ADD] = function () {
			preop[APPLY](THIS, args = arguments);

			for (var args, token, i = 0, l = args[LENGTH]; i < l; ++i) {
				token = args[i];
				if (!tokenMap[token]) {
					tokens.push(token);
					tokenMap[token] = TRUE;
				}
			}

			/** Update the targeted attribute of the attached element if the token list's changed. */
			if (length !== tokens[LENGTH]) {
				length = tokens[LENGTH] >>> 0;
				el[prop] = tokens.join(SPACE);
				reindex();
			}
		};

		/** Remove one or more tokens from the underlying string. */
		THIS[REMOVE] = function () {
			preop[APPLY](THIS, args = arguments);

			/** Build a hash of token names to compare against when recollecting our token list. */
			for (var args, ignore = {}, i = 0, t = []; i < args[LENGTH]; ++i) {
				ignore[args[i]] = TRUE;
				delete tokenMap[args[i]];
			}

			/** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
			for (i = 0; i < tokens[LENGTH]; ++i) {
				if (!ignore[tokens[i]]) t.push(tokens[i]);
			}tokens = t;
			length = t[LENGTH] >>> 0;

			/** Update the targeted attribute of the attached element. */
			el[prop] = tokens.join(SPACE);
			reindex();
		};

		/** Add or remove a token depending on whether it's already contained within the token list. */
		THIS[TOGGLE] = function (token, force) {
			preop[APPLY](THIS, [token]);

			/** Token state's being forced. */
			if (UNDEF !== force) {
				if (force) {
					THIS[ADD](token);return TRUE;
				} else {
					THIS[REMOVE](token);return FALSE;
				}
			}

			/** Token already exists in tokenList. Remove it, and return FALSE. */
			if (tokenMap[token]) {
				THIS[REMOVE](token);
				return FALSE;
			}

			/** Otherwise, add the token and return TRUE. */
			THIS[ADD](token);
			return TRUE;
		};

		/** Mark our newly-assigned methods as non-enumerable. */
		(function (o, defineProperty) {
			if (defineProperty) for (var i = 0; i < 7; ++i) {
				defineProperty(o, METHODS[i], { enumerable: FALSE });
			}
		})(THIS, OBJ[DEFINE_PROPERTY]);

		return THIS;
	},


	/** Polyfills a property with a DOMTokenList */
	addProp = function addProp(o, name, attr) {

		defineGetter(o[PROTOTYPE], name, function () {
			var tokenList,
			    THIS = this,


			/** Prevent this from firing twice for some reason. What the hell, IE. */
			gibberishProperty = DEFINE_GETTER + DEFINE_PROPERTY + name;
			if (THIS[gibberishProperty]) return tokenList;
			THIS[gibberishProperty] = TRUE;

			/**
    * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
    *
    * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
    * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
    * element instead, this would conflict with element types which use indexed properties (such as forms and
    * select lists).
    */
			if (FALSE === dpSupport) {

				var visage,
				    mirror = addProp.mirror = addProp.mirror || DOC[CREATE_ELEMENT](DIV),
				    reflections = mirror.childNodes,


				/** Iterator variables */
				l = reflections[LENGTH],
				    i = 0;

				for (; i < l; ++i) {
					if (reflections[i]._R === THIS) {
						visage = reflections[i];
						break;
					}
				} /** Couldn't find an element's reflection inside the mirror. Materialise one. */
				visage || (visage = mirror.appendChild(DOC[CREATE_ELEMENT](DIV)));

				tokenList = DOMTokenList.call(visage, THIS, attr);
			} else tokenList = new DOMTokenList(THIS, attr);

			defineGetter(THIS, name, function () {
				return tokenList;
			});
			delete THIS[gibberishProperty];

			return tokenList;
		}, TRUE);
	},


	/** Variables used for patching native methods that're partially implemented (IE doesn't support adding/removing multiple tokens, for instance). */
	testList,
	    nativeAdd,
	    nativeRemove;

	/** No discernible DOMTokenList support whatsoever. Time to remedy that. */
	if (!WIN[DOM_TOKEN_LIST]) {

		/** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
		if (dpSupport) try {
			defineGetter({}, "support");
		} catch (e) {
			dpSupport = FALSE;
		}

		DOMTokenList.polyfill = TRUE;
		WIN[DOM_TOKEN_LIST] = DOMTokenList;

		addProp(WIN[ELEMENT], CLASS_LIST, CLASS_ + "Name"); /* Element.classList */
		addProp(WIN[HTML_ + "Link" + ELEMENT], REL_LIST, REL); /* HTMLLinkElement.relList */
		addProp(WIN[HTML_ + "Anchor" + ELEMENT], REL_LIST, REL); /* HTMLAnchorElement.relList */
		addProp(WIN[HTML_ + "Area" + ELEMENT], REL_LIST, REL); /* HTMLAreaElement.relList */
	}

	/**
  * Possible support, but let's check for bugs.
  *
  * Where arbitrary values are needed for performing a test, previous variables
  * are recycled to save space in the minified file.
  */
	else {
			testList = DOC[CREATE_ELEMENT](DIV)[CLASS_LIST];

			/** We'll replace a "string constant" to hold a reference to DOMTokenList.prototype (filesize optimisation, yaddah-yaddah...) */
			PROTOTYPE = WIN[DOM_TOKEN_LIST][PROTOTYPE];

			/** Check if we can pass multiple arguments to add/remove. To save space, we'll just recycle a previous array of strings. */
			testList[ADD][APPLY](testList, METHODS);
			if (2 > testList[LENGTH]) {
				nativeAdd = PROTOTYPE[ADD];
				nativeRemove = PROTOTYPE[REMOVE];

				PROTOTYPE[ADD] = function () {
					for (var i = 0, args = arguments; i < args[LENGTH]; ++i) {
						nativeAdd.call(this, args[i]);
					}
				};

				PROTOTYPE[REMOVE] = function () {
					for (var i = 0, args = arguments; i < args[LENGTH]; ++i) {
						nativeRemove.call(this, args[i]);
					}
				};
			}

			/** Check if the "force" option of .toggle is supported. */
			if (testList[TOGGLE](LIST, FALSE)) PROTOTYPE[TOGGLE] = function (token, force) {
				var THIS = this;
				THIS[(force = UNDEF === force ? !THIS[CONTAINS](token) : force) ? ADD : REMOVE](token);
				return !!force;
			};
		}
})();

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEvents = addEvents;

var _passiveOption = require('./passiveOption');

function addEvents(el, obj) {
  for (var prop in obj) {
    var option = prop === 'touchstart' || prop === 'touchmove' ? _passiveOption.passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

},{"./passiveOption":22}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = Events;
function Events() {
  return {
    topics: {},
    on: function on(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function off(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function emit(eventName, data) {
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function (fn) {
          fn(data);
        });
      }
    }
  };
};

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAttr = getAttr;
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSlideId = getSlideId;
function getSlideId() {
  if (window.tnsId === undefined) {
    window.tnsId = 1;
  } else {
    window.tnsId++;
  }
  return 'tns' + window.tnsId;
}

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTouchDirection = getTouchDirection;
function getTouchDirection(angle, range) {
  if (Math.abs(90 - Math.abs(angle)) >= 90 - range) {
    return 'horizontal';
  } else if (Math.abs(90 - Math.abs(angle)) <= range) {
    return 'vertical';
  } else {
    return false;
  }
}

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasAttr = hasAttr;
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideElement = hideElement;

var _hasAttr = require('./hasAttr');

var _setAttrs = require('./setAttrs');

function hideElement(el) {
  if (!(0, _hasAttr.hasAttr)(el, 'hidden')) {
    (0, _setAttrs.setAttrs)(el, { 'hidden': '' });
  }
}

},{"./hasAttr":17,"./setAttrs":26}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageLoaded = imageLoaded;
// check if an image is loaded
// 1. See if "naturalWidth" and "naturalHeight" properties are available.
// 2. See if "complete" property is available.

function imageLoaded(img) {
  if (typeof img.complete === 'boolean') {
    return img.complete;
  } else if (typeof img.naturalWidth === 'number') {
    return img.naturalWidth !== 0;
  }
}

},{}],20:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsTransform = jsTransform;
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      from = Number(element.style[attr].slice(prefix.length, -(postfix.length + 2))),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + 'px' + postfix;
    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback();
    }
  }
}

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = exports.passiveOption = supportsPassive ? { passive: true } : false;

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAttrs = removeAttrs;

var _isNodeList = require("./isNodeList");

function removeAttrs(els, attrs) {
  els = (0, _isNodeList.isNodeList)(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

},{"./isNodeList":20}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEvents = removeEvents;

var _passiveOption = require('./passiveOption');

function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = prop === 'touchstart' || prop === 'touchmove' ? _passiveOption.passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

},{"./passiveOption":22}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeEventsByClone = removeEventsByClone;
function removeEventsByClone(el) {
  var elClone = el.cloneNode(true),
      parent = el.parentNode;
  parent.insertBefore(elClone, el);
  el.remove();
  el = null;
}

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttrs = setAttrs;

var _isNodeList = require("./isNodeList");

function setAttrs(els, attrs) {
  els = (0, _isNodeList.isNodeList)(els) || els instanceof Array ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') {
    return;
  }

  for (var i = els.length; i--;) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

},{"./isNodeList":20}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showElement = showElement;

var _hasAttr = require('./hasAttr');

var _removeAttrs = require('./removeAttrs');

function showElement(el) {
  if ((0, _hasAttr.hasAttr)(el, 'hidden')) {
    (0, _removeAttrs.removeAttrs)(el, 'hidden');
  }
}

},{"./hasAttr":17,"./removeAttrs":23}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDegree = toDegree;
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whichProperty = whichProperty;
function whichProperty(obj) {
  var t,
      el = document.createElement('fakeelement');
  for (t in obj) {
    if (el.style[t] !== undefined) {
      return [t, obj[t][0], obj[t][1]];
    }
  }

  return false; // explicit for ie9-
}

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tns = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // PRODUCTION

// from go-native


// helper functions


require("../bower_components/go-native/src/utilities/childNode.remove");

require("../bower_components/go-native/src/vendors/requestAnimationFrame");

require("../bower_components/go-native/src/vendors/token-list");

var _extend = require("../bower_components/go-native/src/gn/extend");

var _indexOf = require("../bower_components/go-native/src/gn/indexOf");

var _getSupportedProp = require("../bower_components/go-native/src/gn/getSupportedProp");

var _append = require("../bower_components/go-native/src/gn/append");

var _wrap = require("../bower_components/go-native/src/gn/wrap");

var _unwrap = require("../bower_components/go-native/src/gn/unwrap");

var _getSlideId = require("./helpers/getSlideId");

var _toDegree = require("./helpers/toDegree");

var _getTouchDirection = require("./helpers/getTouchDirection");

var _hasAttr = require("./helpers/hasAttr");

var _getAttr = require("./helpers/getAttr");

var _setAttrs = require("./helpers/setAttrs");

var _removeAttrs = require("./helpers/removeAttrs");

var _removeEventsByClone = require("./helpers/removeEventsByClone");

var _hideElement = require("./helpers/hideElement");

var _showElement = require("./helpers/showElement");

var _imageLoaded = require("./helpers/imageLoaded");

var _whichProperty = require("./helpers/whichProperty");

var _addEvents = require("./helpers/addEvents");

var _removeEvents = require("./helpers/removeEvents");

var _events = require("./helpers/events");

var _jsTransform = require("./helpers/jsTransform");

var TRANSFORM = (0, _getSupportedProp.getSupportedProp)(['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']),
    transitions = {
  'transitionDuration': ['transitionDelay', 'transitionend'],
  'WebkitTransitionDuration': ['WebkitTransitionDelay', 'webkitTransitionEnd'],
  'MozTransitionDuration': ['MozTransitionDelay', 'transitionend'],
  'OTransitionDuration': ['OTransitionDelay', 'oTransitionEnd']
},
    animations = {
  'animationDuration': ['animationDelay', 'animationend'],
  'WebkitAnimationDuration': ['WebkitAnimationDelay', 'webkitAnimationEnd'],
  'MozAnimationDuration': ['MozAnimationDelay', 'animationend'],
  'OAnimationDuration': ['OAnimationDelay', 'oAnimationEnd']
},
    TRANSITIONDURATION = (0, _whichProperty.whichProperty)(transitions)[0],
    TRANSITIONDELAY = (0, _whichProperty.whichProperty)(transitions)[1],
    TRANSITIONEND = (0, _whichProperty.whichProperty)(transitions)[2],
    ANIMATIONDURATION = (0, _whichProperty.whichProperty)(animations)[0],
    ANIMATIONDELAY = (0, _whichProperty.whichProperty)(animations)[1],
    ANIMATIONEND = (0, _whichProperty.whichProperty)(animations)[2],
    KEY = {
  ENTER: 13,
  SPACE: 32,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var tns = exports.tns = function tns(options) {
  options = (0, _extend.extend)({
    container: document.querySelector('.slider'),
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    slideBy: 1,
    controls: true,
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    nav: true,
    navContainer: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    touch: true,
    mouseDrag: false,
    nested: false,
    onInit: false
  }, options || {});
  // make sure slide container exists
  if (_typeof(options.container) !== 'object' || options.container === null) {
    return;
  }

  // === define and set variables ===
  var mode = options.mode,
      axis = options.axis,
      wrapper = document.createElement('div'),
      contentWrapper = document.createElement('div'),
      container = options.container,
      slideItems = container.children,
      slideCount = slideItems.length,
      items = options.items,
      slideBy = getSlideBy(),
      nested = options.nested,
      gutter = options.gutter,
      edgePadding = mode === 'gallery' ? false : options.edgePadding,
      fixedWidth = options.fixedWidth,
      arrowKeys = options.arrowKeys,
      speed = options.speed,
      rewind = options.rewind,
      loop = mode === 'gallery' ? true : options.rewind ? false : options.loop,
      autoHeight = mode === 'gallery' ? true : options.autoHeight,
      responsive = fixedWidth ? false : options.responsive,
      lazyload = options.lazyload,
      slideId = container.id || (0, _getSlideId.getSlideId)(),
      slideWidth = fixedWidth ? fixedWidth + gutter : 0,
      slideEdges,
      // collection of slide edges
  slideItemsOut = [],
      cloneCount = loop ? slideCount * 2 : edgePadding ? 1 : 0,
      slideCountNew = mode === 'gallery' ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = fixedWidth && !loop && !edgePadding ? true : false,
      checkIndexBeforeTransform = mode === 'gallery' || !loop ? true : false,

  // transform
  transformDir = axis === 'horizontal' ? 'X' : 'Y',
      transformAttrLegacy = axis === 'horizontal' ? 'left' : 'top',
      transformAttr = transformAttrLegacy,
      transformType = 'translate',
      transformPrefix = '',
      transformPostfix = '',

  // controls
  controls = options.controls,
      controlsText = options.controlsText,
      controlsContainer = !options.controlsContainer ? false : options.controlsContainer,
      prevButton,
      nextButton,

  // nav
  nav = options.nav,
      navContainer = options.navContainer || false,
      navItems,
      navCountVisible,
      navCountVisibleCached = slideCount,
      navClicked = -1,
      navCurrent = 0,
      navCurrentCached = 0,

  // index
  index = mode === 'gallery' ? 0 : cloneCount,
      indexCached = index,
      indexAdjust = edgePadding ? 1 : 0,
      indexMin = indexAdjust,
      indexMax,
      vw,

  // autoplay
  autoplay = options.autoplay,
      autoplayTimeout = options.autoplayTimeout,
      autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
      autoplayText = options.autoplayText,
      autoplayHoverPause = options.autoplayHoverPause,
      autoplayTimer,
      autoplayButton = options.autoplayButton,
      animating = false,
      autoplayHoverStopped = false,
      autoplayHtmlString = '<span hidden>Stop Animation</span>',
      autoplayResetOnVisibility = options.autoplayResetOnVisibility,
      autoplayResetVisibilityState = false,

  // touch
  touch = options.touch,
      startX = null,
      startY = null,
      translateInit,
      disX,
      disY,
      touchedOrDraged,

  //mouse
  mouseDrag = options.mouseDrag,
      mousePressed = false,
      isDragEvent = false,

  // gallery
  animateIn = ANIMATIONDURATION ? options.animateIn : 'tns-fadeIn',
      animateOut = ANIMATIONDURATION ? options.animateOut : 'tns-fadeOut',
      animateNormal = ANIMATIONDURATION ? options.animateNormal : 'tns-normal',
      animateDelay = ANIMATIONDURATION ? options.animateDelay : false,

  // resize and scroll
  resizeTimer,
      ticking = false,
      onInit = options.onInit,
      events = new _events.Events();

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = transformType + transformDir + '(';
    transformPostfix = ')';
  }

  // === COMMON FUNCTIONS === //
  function getSlideBy() {
    return mode === 'gallery' || options.slideBy === 'page' ? items : options.slideBy;
  }

  var getItems = function () {
    if (!fixedWidth) {
      return function () {
        var itemsTem = options.items,

        // ww = document.documentElement.clientWidth,
        bpKeys = (typeof responsive === "undefined" ? "undefined" : _typeof(responsive)) === 'object' ? Object.keys(responsive) : false;

        if (bpKeys) {
          bpKeys.forEach(function (key) {
            if (vw >= key) {
              itemsTem = responsive[key];
            }
          });
        }
        return Math.max(1, Math.min(slideCount, itemsTem));
      };
    } else {
      return function () {
        return Math.max(1, Math.min(slideCount, Math.floor(vw / fixedWidth)));
      };
    }
  }();

  function getSlideWidth() {
    return (vw + gutter) / items;
  }

  var getVisibleNavCount = function () {
    if (options.navContainer) {
      return function () {
        return slideCount;
      };
    } else {
      return function () {
        return Math.ceil(slideCount / items);
      };
    }
  }();

  var getViewWidth = function () {
    // horizontal carousel: fluid width && edge padding
    //  => inner wrapper view width
    if (axis === 'horizontal' && !fixedWidth && edgePadding) {
      return function () {
        return wrapper.clientWidth - (edgePadding + gutter) * 2;
      };
      // horizontal carousel: fixed width || fluid width but no edge padding
      // vertical carousel
      //  => wrapper view width
    } else {
      return function () {
        return wrapper.clientWidth;
      };
    }
  }();

  // compare slide count & items
  // (items) => nav, controls, autoplay
  function checkSlideCount() {
    // a. slide count < items
    //  => disable nav, controls, autoplay
    if (slideCount <= items) {
      arrowKeys = false;

      var indexTem;
      index = mode === 'gallery' ? 0 : cloneCount;
      if (index !== indexTem) {
        events.emit('indexChanged', info());
      }

      if (navContainer) {
        (0, _hideElement.hideElement)(navContainer);
      }
      if (controlsContainer) {
        (0, _hideElement.hideElement)(controlsContainer);
      }
      if (autoplayButton) {
        (0, _hideElement.hideElement)(autoplayButton);
      }
      // b. slide count > items
      //  => enable nav, controls, autoplay
    } else {
      arrowKeys = options.arrowKeys;
      if (nav) {
        (0, _showElement.showElement)(navContainer);
      }
      if (controls) {
        (0, _showElement.showElement)(controlsContainer);
      }
      if (autoplay) {
        (0, _showElement.showElement)(autoplayButton);
      }
    }
  }

  // === INITIALIZATION FUNCTIONS === //
  function wrapperInit() {
    (0, _setAttrs.setAttrs)(wrapper, { 'data-tns-role': 'wrapper' });
    (0, _setAttrs.setAttrs)(contentWrapper, { 'data-tns-role': 'content-wrapper' });
    if (axis === 'vertical') {
      (0, _setAttrs.setAttrs)(contentWrapper, { 'data-tns-hidden': 'y' });
    } else {
      (0, _setAttrs.setAttrs)(wrapper, { 'data-tns-hidden': 'x' });
    }

    if (mode === 'carousel') {
      var gap = fixedWidth && edgePadding ? getFixedWidthEdgePadding() : edgePadding ? edgePadding + gutter : 0;
      contentWrapper.style.cssText = axis === 'horizontal' ? 'margin: 0 ' + gap + 'px;' : 'padding: ' + gap + 'px 0 ' + edgePadding + 'px; height: ' + getVerticalWrapperHeight() + 'px;';
    }
  }

  // vw => items => indexMax, slideWidth, navCountVisible, slideBy
  function getVariables() {
    vw = getViewWidth();
    items = getItems();
    indexMax = slideCountNew - items - indexAdjust;

    if (axis === 'horizontal' && !fixedWidth) {
      slideWidth = getSlideWidth();
    }
    navCountVisible = getVisibleNavCount();
    slideBy = getSlideBy();
  }

  function containerInit() {
    // add id
    if (container.id === '') {
      container.id = slideId;
    }
    // add attributes
    (0, _setAttrs.setAttrs)(container, {
      'data-tns-role': 'content',
      'data-tns-mode': mode,
      'data-tns-axis': axis
    });

    if (axis === 'horizontal') {
      container.style.width = (slideWidth + 1) * slideCountNew + 'px';
    }
  }

  function containerInitStyle() {
    // init width & transform
    if (mode === 'carousel') {
      if (autoHeight) {
        (0, _setAttrs.setAttrs)(container, { 'data-tns-hidden': 'y' });
      }
      container.style[transformAttr] = transformPrefix + Math.round(-slideEdges[index]) + 'px' + transformPostfix;
    }
  }

  // for IE10
  function msInit() {
    if (navigator.msMaxTouchPoints) {
      wrapper.classList.add('ms-touch');
      (0, _addEvents.addEvents)(wrapper, { 'scroll': ie10Scroll });
    }
  }

  function slideItemsInit() {
    for (var x = 0; x < slideCount; x++) {
      var item = slideItems[x];

      // add slide id
      item.id = slideId + '-item' + x;

      // add class
      if (mode === 'gallery' && animateNormal) {
        item.classList.add(animateNormal);
      }

      // add aria-hidden attribute
      (0, _setAttrs.setAttrs)(item, { 'aria-hidden': 'true' });

      // set slide width & gutter
      var gutterPosition = axis === 'horizontal' ? 'right' : 'bottom',
          styles = '';
      if (mode === 'carousel') {
        styles = 'margin-' + gutterPosition + ': ' + gutter + 'px;';
      }
      if (axis === 'horizontal') {
        styles = 'width: ' + (slideWidth - gutter) + 'px; ' + styles;
      }
      item.style.cssText += styles;
    }

    // clone slides
    if (loop || edgePadding) {
      var fragmentBefore = document.createDocumentFragment(),
          fragmentAfter = document.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j % slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        (0, _removeAttrs.removeAttrs)(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (mode === 'carousel') {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          (0, _removeAttrs.removeAttrs)(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }
  }

  function controlsInit() {
    if (controls) {
      if (options.controlsContainer) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
        (0, _setAttrs.setAttrs)(controlsContainer, { 'aria-label': 'Carousel Navigation' });
        (0, _setAttrs.setAttrs)(prevButton, { 'data-controls': 'prev' });
        (0, _setAttrs.setAttrs)(nextButton, { 'data-controls': 'next' });
        (0, _setAttrs.setAttrs)(controlsContainer.children, {
          'aria-controls': slideId,
          'tabindex': '-1'
        });
      } else {
        (0, _append.append)(wrapper, '<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId + '" type="button">' + controlsText[0] + '</button><button data-controls="next" tabindex="0" aria-controls="' + slideId + '" type="button">' + controlsText[1] + '</button></div>');

        [].forEach.call(wrapper.children, function (el) {
          if (el.getAttribute('data-tns-role') === 'controls') {
            controlsContainer = el;
          }
        });
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }
    }
  }

  function navInit() {
    if (nav) {
      if (options.navContainer) {
        (0, _setAttrs.setAttrs)(navContainer, { 'aria-label': 'Carousel Pagination' });
        navItems = navContainer.children;
        [].forEach.call(navItems, function (item, index) {
          (0, _setAttrs.setAttrs)(item, {
            'data-nav': index,
            'tabindex': '-1',
            'aria-selected': 'false',
            'aria-controls': slideId + '-item' + index
          });
        });
      } else {
        var navHtml = '';
        for (var i = 0; i < slideCount; i++) {
          navHtml += '<button data-nav="' + i + '" tabindex="-1" aria-selected="false" aria-controls="' + slideId + '-item' + i + '" type="button"></button>';
        }
        navHtml = '<div data-tns-role="nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        (0, _append.append)(wrapper, navHtml);

        [].forEach.call(wrapper.children, function (el) {
          if (el.getAttribute('data-tns-role') === 'nav') {
            navContainer = el;
          }
        });
        navItems = navContainer.children;

        // hide navs
        for (var j = navCountVisible; j < slideCount; j++) {
          (0, _setAttrs.setAttrs)(navItems[j], { 'hidden': '' });
        }

        // update navCountVisibleCached
        navCountVisibleCached = navCountVisible;
      }
    }
  }

  function autoplayInit() {
    if (autoplay) {
      if (autoplayButton) {
        (0, _setAttrs.setAttrs)(autoplayButton, { 'data-action': 'stop' });
      } else {
        if (!navContainer) {
          (0, _append.append)(wrapper, '<div data-tns-role="nav" aria-label="Carousel Pagination"></div>');
          navContainer = wrapper.querySelector('[data-tns-role="nav"]');
        }

        (0, _append.append)(navContainer, '<button data-action="stop" type="button">' + autoplayHtmlString + autoplayText[0] + '</button>');
        autoplayButton = navContainer.querySelector('[data-action]');
      }

      // start autoplay
      startAction();
    }
  }

  function activateSlider() {
    for (var i = index; i < index + items; i++) {
      var item = slideItems[i];
      (0, _setAttrs.setAttrs)(item, { 'aria-hidden': 'false' });
      if (mode === 'gallery') {
        item.style.left = slideWidth * (i - index) + 'px';
        item.classList.remove(animateNormal);
        item.classList.add(animateIn);
      }
    }
    if (controls) {
      (0, _setAttrs.setAttrs)(nextButton, { 'tabindex': '0' });
      if (index === indexMin && !loop || rewind) {
        prevButton.disabled = true;
      }
    }
    if (nav) {
      (0, _setAttrs.setAttrs)(navItems[0], { 'tabindex': '0', 'aria-selected': 'true' });
    }
  }

  function addSliderEvents() {
    if (mode === 'carousel') {
      if (TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        (0, _addEvents.addEvents)(container, eve);
      }
      if (touch) {
        (0, _addEvents.addEvents)(container, {
          'touchstart': onTouchOrMouseStart,
          'touchmove': onTouchOrMouseMove,
          'touchend': onTouchOrMouseEnd,
          'touchcancel': onTouchOrMouseEnd
        });
      }
      if (mouseDrag) {
        (0, _addEvents.addEvents)(container, {
          'mousedown': onTouchOrMouseStart,
          'mousemove': onTouchOrMouseMove,
          'mouseup': onTouchOrMouseEnd,
          'mouseleave': onTouchOrMouseEnd
        });
      }
    }

    if (nav) {
      for (var y = 0; y < slideCount; y++) {
        (0, _addEvents.addEvents)(navItems[y], {
          'click': onClickNav,
          'keydown': onKeydownNav
        });
      }
    }

    if (controls) {
      (0, _addEvents.addEvents)(prevButton, {
        'click': onClickPrev,
        'keydown': onKeydownControl
      });
      (0, _addEvents.addEvents)(nextButton, {
        'click': onClickNext,
        'keydown': onKeydownControl
      });
    }

    if (autoplay) {
      (0, _addEvents.addEvents)(autoplayButton, { 'click': toggleAnimation });
      if (autoplayHoverPause) {
        (0, _addEvents.addEvents)(container, { 'mouseover': function mouseover() {
            if (animating) {
              stopAction();
              autoplayHoverStopped = true;
            }
          } });
        (0, _addEvents.addEvents)(container, { 'mouseout': function mouseout() {
            if (!animating && autoplayHoverStopped) {
              startAction();
              autoplayHoverStopped = false;
            }
          } });
      }

      if (autoplayResetOnVisibility) {
        (0, _addEvents.addEvents)(document, { 'visibilitychange': onVisibilityChange });
      }
    }

    if (arrowKeys) {
      (0, _addEvents.addEvents)(document, { 'keydown': onKeydownDocument });
    }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else {
      (0, _addEvents.addEvents)(window, { 'resize': onResize });
      if (nested === 'outer') {
        events.on('innerLoaded', runAutoHeight);
      }
    }
  }

  // lazyload
  function lazyLoad() {
    // var arr = [], 
    var i = index,
        len = index + items;

    if (edgePadding) {
      i -= 1;
      len += 1;
    }

    for (; i < len; i++) {
      [].forEach.call(slideItems[i].querySelectorAll('[data-tns-role="lazy-img"]'), function (img) {
        // stop propagationl transitionend event to container
        var eve = {};
        eve[TRANSITIONEND] = function (e) {
          e.stopPropagation();
        };
        (0, _addEvents.addEvents)(img, eve);

        if (!img.classList.contains('loaded')) {
          img.src = (0, _getAttr.getAttr)(img, 'data-src');
          img.classList.add('loaded');
        }
      });
    }
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function runAutoHeight() {
    // get all images inside visible slide items
    var images = [];

    for (var i = index; i < index + items; i++) {
      [].forEach.call(slideItems[i].querySelectorAll('img'), function (img) {
        images.push(img);
      });
    }

    if (images.length === 0) {
      updateContainerHeight();
    } else {
      checkImagesLoaded(images);
    }
  }

  function checkImagesLoaded(images) {
    images.forEach(function (img, index) {
      if ((0, _imageLoaded.imageLoaded)(img)) {
        images.splice(index, 1);
      }
    });

    if (images.length === 0) {
      updateContainerHeight();
    } else {
      setTimeout(function () {
        checkImagesLoaded(images);
      }, 16);
    }
  }

  function sliderInit() {
    // First thing first, wrap container with "wrapper > contentWrapper",
    // to get the correct view width
    (0, _wrap.wrap)(container, contentWrapper);
    (0, _wrap.wrap)(contentWrapper, wrapper);

    getVariables();
    containerInit();
    slideItemsInit();
    getSlideEdges();

    wrapperInit();
    containerInitStyle();
    msInit();
    controlsInit();
    navInit();
    autoplayInit();

    activateSlider();
    addSliderEvents();
    checkSlideCount();

    if (lazyload) {
      lazyLoad();
    }
    if (autoHeight) {
      runAutoHeight();
    }

    if (typeof onInit === 'function') {
      onInit(info());
    }

    if (nested === 'inner') {
      events.emit('innerLoaded', info());
    }
  }
  sliderInit();

  // (vw) => edgePadding
  function getFixedWidthEdgePadding() {
    return (vw % slideWidth + gutter) / 2;
  }

  // update container height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update container height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateContainerHeight() {
    var heights = [],
        maxHeight;
    for (var i = index; i < index + items; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    maxHeight = Math.max.apply(null, heights);

    if (container.style.height !== maxHeight) {
      if (TRANSITIONDURATION) {
        setDurations(speed);
      }
      container.style.height = maxHeight + 'px';
    }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slideEdges
  function getSlideEdges() {
    slideEdges = [0];
    var topFirst = slideItems[0].getBoundingClientRect()[transformAttrLegacy],
        attr;
    for (var i = 1; i < slideCountNew; i++) {
      attr = slideItems[i].getBoundingClientRect()[transformAttrLegacy];
      slideEdges.push(attr - topFirst);
    }
  }

  // get wrapper height
  // (slideEdges, index, items) => vertical_conentWrapper.height
  function getVerticalWrapperHeight() {
    return slideEdges[index + items] - slideEdges[index];
  }

  // set snapInterval (for IE10)
  function setSnapInterval() {
    wrapper.style.msScrollSnapPointsX = 'snapInterval(0%, ' + slideWidth + ')';
  }

  // update slide
  function updateSlideStatus() {
    var h1, h2, v1, v2;
    if (index !== indexCached) {
      if (index > indexCached) {
        h1 = indexCached;
        h2 = Math.min(indexCached + items, index);
        v1 = Math.max(indexCached + items, index);
        v2 = index + items;
      } else {
        h1 = Math.max(index + items, indexCached);
        h2 = indexCached + items;
        v1 = index;
        v2 = Math.min(index + items, indexCached);
      }
    }

    if (slideBy % 1 !== 0) {
      h1 = Math.round(h1);
      h2 = Math.round(h2);
      v1 = Math.round(v1);
      v2 = Math.round(v2);
    }

    for (var i = h1; i < h2; i++) {
      (0, _setAttrs.setAttrs)(slideItems[i], { 'aria-hidden': 'true' });
    }
    for (var j = v1; j < v2; j++) {
      (0, _setAttrs.setAttrs)(slideItems[j], { 'aria-hidden': 'false' });
    }
  }

  // set tabindex & aria-selected on Nav
  function updateNavStatus() {
    // get current nav
    if (nav) {
      if (navClicked === -1) {
        if (options.navContainer) {
          navCurrent = index % slideCount;
        } else {
          navCurrent = Math.floor(index % slideCount / items);
          // non-loop & reach the edge
          if (!loop && slideCount % items !== 0 && index === indexMax) {
            navCurrent += 1;
          }
        }
      } else {
        navCurrent = navClicked;
        navClicked = -1;
      }

      if (navCurrent !== navCurrentCached) {
        (0, _setAttrs.setAttrs)(navItems[navCurrentCached], {
          'tabindex': '-1',
          'aria-selected': 'false'
        });

        (0, _setAttrs.setAttrs)(navItems[navCurrent], {
          'tabindex': '0',
          'aria-selected': 'true'
        });
        navCurrentCached = navCurrent;
      }
    }
  }

  // set 'disabled' to true on controls when reach the edge
  function updateControlsStatus() {
    if (controls && !loop) {
      var disable = [],
          active = [];
      if (index === indexMin) {
        disable.push(prevButton);
        active.push(nextButton);
        changeFocus(prevButton, nextButton);
      } else if (!rewind && index === indexMax) {
        disable.push(nextButton);
        active.push(prevButton);
        changeFocus(nextButton, prevButton);
      } else {
        active.push(prevButton, nextButton);
      }

      if (disable.length > 0) {
        disable.forEach(function (button) {
          if (!button.disabled) {
            button.disabled = true;
            (0, _setAttrs.setAttrs)(button, { 'tabindex': '-1' });
          }
        });
      }

      if (active.length > 0) {
        active.forEach(function (button) {
          if (button.disabled) {
            button.disabled = false;
            (0, _setAttrs.setAttrs)(button, { 'tabindex': '0' });
          }
        });
      }
    }
  }

  // set duration
  function setDurations(duration, target) {
    duration = !duration ? '' : duration / 1000 + 's';
    target = target || container;
    target.style[TRANSITIONDURATION] = duration;

    if (mode === 'gallery') {
      target.style[ANIMATIONDURATION] = duration;
    }
    if (axis === 'vertical') {
      contentWrapper.style[TRANSITIONDURATION] = duration;
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = function () {
    if (mode === 'carousel') {
      return function (duration, distance) {
        if (!distance) {
          distance = -slideEdges[index];
        }
        // constrain the distance when non-loop no-edgePadding fixedWidth reaches the right edge
        if (hasRightDeadZone && index === indexMax) {
          distance = Math.max(distance, -slideCountNew * slideWidth + vw + gutter);
        }

        if (TRANSITIONDURATION || !duration) {
          container.style[transformAttr] = transformPrefix + Math.round(distance) + 'px' + transformPostfix;
        } else {
          (0, _jsTransform.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, distance, speed, onTransitionEnd);
        }

        if (axis === 'vertical') {
          contentWrapper.style.height = getVerticalWrapperHeight() + 'px';
        }
      };
    } else {
      return function () {
        slideItemsOut = [];

        var eve1 = {};
        eve1[TRANSITIONEND] = onTransitionEnd;
        eve1[ANIMATIONEND] = onTransitionEnd;
        (0, _removeEvents.removeEvents)(slideItems[indexCached], eve1);

        var eve2 = {};
        eve2[TRANSITIONEND] = onTransitionEnd;
        eve2[ANIMATIONEND] = onTransitionEnd;
        (0, _addEvents.addEvents)(slideItems[index], eve2);

        (function () {
          for (var i = indexCached, l = indexCached + items; i < l; i++) {
            var item = slideItems[i];
            if (TRANSITIONDURATION) {
              setDurations(speed, item);
            }
            if (animateDelay && TRANSITIONDELAY) {
              var d = animateDelay * (i - indexCached) / 1000;
              item.style[TRANSITIONDELAY] = d + 's';
              item.style[ANIMATIONDELAY] = d + 's';
            }
            item.classList.remove(animateIn);
            item.classList.add(animateOut);
            slideItemsOut.push(item);
          }
        })();

        (function () {
          for (var i = index, l = index + items; i < l; i++) {
            var item = slideItems[i];
            if (TRANSITIONDURATION) {
              setDurations(speed, item);
            }
            if (animateDelay && TRANSITIONDELAY) {
              var d = animateDelay * (i - index) / 1000;
              item.style[TRANSITIONDELAY] = d + 's';
              item.style[ANIMATIONDELAY] = d + 's';
            }
            item.classList.remove(animateNormal);
            item.classList.add(animateIn);
            if (i > index) {
              item.style.left = (i - index) * slideWidth + 'px';
            }
          }
        })();
      };
    }
  }();

  function doTransform(duration, distance) {
    if (duration === undefined) {
      duration = speed;
    }
    if (TRANSITIONDURATION) {
      setDurations(duration);
    }
    transformCore(duration, distance);
  }

  // (slideBy, indexMin, indexMax) => index
  var checkIndex = function () {
    if (loop) {
      return function () {
        var leftEdge = mode === 'carousel' ? slideBy + indexMin : indexMin,
            rightEdge = mode === 'carousel' ? indexMax - slideBy : indexMax;

        if (fixedWidth && vw % slideWidth !== 0) {
          rightEdge -= 1;
        }

        if (index > rightEdge) {
          while (index >= leftEdge + slideCount) {
            index -= slideCount;
          }
        } else if (index < leftEdge) {
          while (index <= rightEdge - slideCount) {
            index += slideCount;
          }
        }
      };
    } else {
      return function () {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
    }
  }();

  function render() {
    (0, _setAttrs.setAttrs)(container, { 'aria-busy': 'true' });
    if (checkIndexBeforeTransform) {
      checkIndex();
    }

    // events
    if (index !== indexCached) {
      events.emit('indexChanged', info());
    }
    events.emit('transitionStart', info());

    doTransform();
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd(event) {
    events.emit('transitionEnd', info(event));

    if (mode === 'gallery' && slideItemsOut.length > 0) {
      for (var i = 0; i < items; i++) {
        var item = slideItemsOut[i];
        if (TRANSITIONDURATION) {
          setDurations(0, item);
        }
        if (animateDelay && TRANSITIONDELAY) {
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = '';
        }
        item.classList.remove(animateOut);
        item.classList.add(animateNormal);
        item.style.left = '';
      }
    }

    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */
    function strTrans(str) {
      return str.toLowerCase().replace(/-/g, '');
    }

    /*
     * update slides, nav, controls after checking ...
     *
     * => legacy browsers who don't support 'event' 
     *    have to check event first, otherwise event.target will cause an error 
     * 
     * => or 'gallery' mode: 
     *   + event target is slide item
     *
     * => or 'carousel' mode: 
     *   + event target is container, 
     *   + event.property is the same with transform attribute
     *
     */
    if (!event || mode === 'gallery' && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

      if (!checkIndexBeforeTransform) {
        var indexTem = index;
        checkIndex();
        if (index !== indexTem) {
          doTransform(0);
          events.emit('indexChanged', info());
        }
      }

      updateSlideStatus();
      updateNavStatus();
      updateControlsStatus();
      if (lazyload) {
        lazyLoad();
      }
      if (autoHeight) {
        runAutoHeight();
      }

      if (nested === 'inner') {
        events.emit('innerLoaded', info());
      }
      (0, _removeAttrs.removeAttrs)(container, 'aria-busy');
      updateIndexCache();
    }
  }

  function updateIndexCache() {
    indexCached = index;
  }

  // # ACTIONS
  // on controls click
  function onClickControl(dir) {
    if ((0, _getAttr.getAttr)(container, 'aria-busy') !== 'true') {
      index = index + dir * slideBy;

      render();
    }
  }

  function onClickPrev() {
    onClickControl(-1);
  }

  function onClickNext() {
    if (rewind && index === indexMax) {
      onClickControl(-(indexMax - indexMin) / slideBy);
    } else {
      onClickControl(1);
    }
  }

  // on doc click
  function onClickNav(e) {
    if ((0, _getAttr.getAttr)(container, 'aria-busy') !== 'true') {
      var clickTarget = e.target || e.srcElement,
          navIndex,
          indexGap;

      while ((0, _indexOf.indexOf)(navItems, clickTarget) === -1) {
        clickTarget = clickTarget.parentNode;
      }

      navIndex = navClicked = Number((0, _getAttr.getAttr)(clickTarget, 'data-nav'));
      var adjust = mode === 'gallery' ? 0 : cloneCount;
      index = options.navContainer ? navIndex + adjust : navIndex * items + adjust;

      if (index !== indexCached) {
        render();
      }
    }
  }

  function startAction() {
    resetActionTimer();
    (0, _setAttrs.setAttrs)(autoplayButton, { 'data-action': 'stop' });
    autoplayButton.innerHTML = autoplayHtmlString + autoplayText[1];

    animating = true;
  }

  function stopAction() {
    pauseActionTimer();
    (0, _setAttrs.setAttrs)(autoplayButton, { 'data-action': 'start' });
    autoplayButton.innerHTML = autoplayHtmlString.replace('Stop', 'Start') + autoplayText[0];

    animating = false;
  }

  function pauseActionTimer() {
    animating = 'paused';
    clearInterval(autoplayTimer);
  }

  function resetActionTimer() {
    if (animating === true) {
      return;
    }
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(function () {
      onClickControl(autoplayDirection);
    }, autoplayTimeout);
  }

  function toggleAnimation() {
    if (animating) {
      stopAction();
    } else {
      startAction();
    }
  }

  function onVisibilityChange() {
    if (autoplayResetVisibilityState != document.hidden && animating !== false) {
      document.hidden ? pauseActionTimer() : resetActionTimer();
    }
    autoplayResetVisibilityState = document.hidden;
  }

  // 
  function onKeydownDocument(e) {
    e = e || window.event;
    switch (e.keyCode) {
      case KEY.LEFT:
        onClickPrev();
        break;
      case KEY.RIGHT:
        onClickNext();
    }
  }

  // change focus
  function changeFocus(blur, focus) {
    if ((typeof blur === "undefined" ? "undefined" : _typeof(blur)) === 'object' && (typeof focus === "undefined" ? "undefined" : _typeof(focus)) === 'object' && blur === document.activeElement) {
      blur.blur();
      focus.focus();
    }
  }

  // on key control
  function onKeydownControl(e) {
    e = e || window.event;
    var code = e.keyCode,
        curElement = document.activeElement;

    switch (code) {
      case KEY.LEFT:
      case KEY.UP:
      case KEY.HOME:
      case KEY.PAGEUP:
        if (curElement !== prevButton && prevButton.disabled !== true) {
          changeFocus(curElement, prevButton);
        }
        break;
      case KEY.RIGHT:
      case KEY.DOWN:
      case KEY.END:
      case KEY.PAGEDOWN:
        if (curElement !== nextButton && nextButton.disabled !== true) {
          changeFocus(curElement, nextButton);
        }
        break;
      case KEY.ENTER:
      case KEY.SPACE:
        if (curElement === nextButton) {
          onClickNext();
        } else {
          onClickPrev();
        }
        break;
    }
  }

  // on key nav
  function onKeydownNav(e) {
    e = e || window.event;
    var code = e.keyCode,
        curElement = document.activeElement,
        dataSlide = (0, _getAttr.getAttr)(curElement, 'data-nav');

    switch (code) {
      case KEY.LEFT:
      case KEY.PAGEUP:
        if (dataSlide > 0) {
          changeFocus(curElement, curElement.previousElementSibling);
        }
        break;
      case KEY.UP:
      case KEY.HOME:
        if (dataSlide !== 0) {
          changeFocus(curElement, navItems[0]);
        }
        break;
      case KEY.RIGHT:
      case KEY.PAGEDOWN:
        if (dataSlide < navCountVisible - 1) {
          changeFocus(curElement, curElement.nextElementSibling);
        }
        break;
      case KEY.DOWN:
      case KEY.END:
        if (dataSlide < navCountVisible - 1) {
          changeFocus(curElement, navItems[navCountVisible - 1]);
        }
        break;
      case KEY.ENTER:
      case KEY.SPACE:
        onClickNav(e);
        break;
    }
  }

  // IE10 scroll function
  function ie10Scroll() {
    doTransform(0, container.scrollLeft());
    updateIndexCache();
  }

  function getTarget(e) {
    return e.target || e.srcElement;
  }

  function isLinkElement(el) {
    return el.tagName.toLowerCase() === 'a';
  }

  function preventDefaultBehavior(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  }

  function onTouchOrMouseStart(e) {
    e = e || window.event;
    if (isLinkElement(getTarget(e))) {
      preventDefaultBehavior(e);
    }

    var ev = e.type === 'touchstart' ? e.changedTouches[0] : e;
    startX = parseInt(ev.clientX);
    startY = parseInt(ev.clientY);
    var slices = TRANSFORM ? [11, -3] : [0, -2];
    translateInit = Number(container.style[transformAttr].slice(slices[0], slices[1]));

    if (e.type === 'touchstart') {
      events.emit('touchStart', info(e));
    } else {
      events.emit('dragStart', info(e));
      mousePressed = true;
    }
  }

  function onTouchOrMouseMove(e) {
    e = e || window.event;

    // "mousemove" event after "mousedown" indecate it's "drag", not "click"
    // set isDragEvent to true
    if (mousePressed && e.type === 'mousemove' && !isDragEvent) {
      isDragEvent = true;
    }

    // console.log(e.type, mousePressed, isDragEvent, e.clientX);
    // make sure touch started or mouse draged
    if (startX !== null) {
      if (isLinkElement(getTarget(e))) {
        preventDefaultBehavior(e);
      }

      var ev = e.type === 'touchmove' ? e.changedTouches[0] : e;
      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;

      if ((0, _getTouchDirection.getTouchDirection)((0, _toDegree.toDegree)(disY, disX), 15) === axis) {
        touchedOrDraged = true;

        if (e.type === 'touchmove') {
          events.emit('touchMove', info(e));
        } else {
          events.emit('dragMove', info(e));
        }

        var x = axis === 'horizontal' ? translateInit + disX : translateInit + disY;
        x += 'px';

        if (TRANSFORM) {
          x = 'translate' + transformDir + '(' + x + ')';
          setDurations(0);
        }
        container.style[transformAttr] = x;
      }
    }
  }

  function onTouchOrMouseEnd(e) {
    e = e || window.event;

    // reset mousePressed
    if (mousePressed) {
      mousePressed = false;
    }

    if (touchedOrDraged) {
      touchedOrDraged = false;

      var ev = e.type.indexOf('touch') === 0 ? e.changedTouches[0] : e;
      disX = parseInt(ev.clientX) - startX;
      disY = parseInt(ev.clientY) - startY;

      // reset startX, startY
      startX = startY = null;

      if (axis === 'horizontal') {
        index = -(translateInit + disX) / slideWidth;
        index = disX > 0 ? Math.floor(index) : Math.ceil(index);
      } else {
        var moved = -(translateInit + disY);
        if (moved <= 0) {
          index = indexMin;
        } else if (moved >= slideEdges[slideEdges.length - 1]) {
          index = indexMax;
        } else {
          var i = 0;
          do {
            i++;
            index = disY < 0 ? i + 1 : i;
          } while (i < slideCountNew && moved >= Math.round(slideEdges[i + 1]));
        }
      }

      if (e.type.indexOf('touch') === 0) {
        events.emit('touchEnd', info(e));
      } else {
        events.emit('dragEnd', info(e));
      }

      render();
    }

    // drag vs click?
    if (isDragEvent) {
      // reset isDragEvent
      isDragEvent = false;

      // prevent "click"
      var target = getTarget(e);
      if (isLinkElement(target)) {
        (0, _addEvents.addEvents)(target, { 'click': function preventClick(e) {
            preventDefaultBehavior(e);
            (0, _removeEvents.removeEvents)(target, { 'click': preventClick });
          } });
      }
    }
  }

  // === RESIZE FUNCTIONS === //
  // (slideWidth) => container.width, slide.width
  function updateSlideWidth() {
    container.style.width = (slideWidth + 1) * slideCountNew + 'px'; // + 1 => fix half-pixel issue
    for (var i = slideCountNew; i--;) {
      slideItems[i].style.width = slideWidth - gutter + 'px';
    }
  }

  // (slideWidth, index, items) => gallery_visible_slide.left
  function updateSlidePosition() {
    for (var i = index + 1, len = index + items; i < len; i++) {
      slideItems[i].style.left = slideWidth * (i - index) + 'px';
    }
  }

  // (vw) => fixedWidth_contentWrapper.edgePadding
  function updateFixedWidthEdgePadding() {
    contentWrapper.style.cssText = 'margin: 0px ' + getFixedWidthEdgePadding() + 'px';
  }

  // (slideEdges, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight() {
    contentWrapper.style.height = getVerticalWrapperHeight() + 'px';
  }

  // show or hide nav
  // (navCountVisible) => nav.[hidden]
  function updateNavDisplay() {
    if (navCountVisible !== navCountVisibleCached) {
      if (navCountVisible > navCountVisibleCached) {
        for (var i = navCountVisibleCached; i < navCountVisible; i++) {
          (0, _removeAttrs.removeAttrs)(navItems[i], 'hidden');
        }
      } else {
        for (var j = navCountVisible; j < navCountVisibleCached; j++) {
          (0, _setAttrs.setAttrs)(navItems[j], { 'hidden': '' });
        }
      }
    }
    navCountVisibleCached = navCountVisible;
  }

  function info(e) {
    return {
      container: container,
      slideItems: slideItems,
      navItems: navItems,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      index: index,
      indexCached: indexCached,
      navCurrent: navCurrent,
      navCurrentCached: navCurrentCached,
      slideCount: slideCount,
      cloneCount: cloneCount,
      slideCountNew: slideCountNew,
      event: e || {}
    };
  }

  function resizeTasks() {
    var indexTem = index,
        itemsTem = items;
    getVariables();
    checkSlideCount();
    checkIndex();

    if (axis === 'horizontal') {
      if (fixedWidth && edgePadding) {
        updateFixedWidthEdgePadding();
      } else {
        updateSlideWidth();

        if (mode === 'gallery') {
          updateSlidePosition();
        }
      }
      getSlideEdges();
    } else {
      getSlideEdges();
      updateContentWrapperHeight();
    }

    if (index !== indexTem) {
      events.emit('indexChanged', info());
      updateSlideStatus();
      if (controls && !loop) {
        updateControlsStatus();
      }
    }

    if (nav && items !== itemsTem && !options.navContainer) {
      updateNavDisplay();
      updateNavStatus();
    }

    if (index !== indexTem || mode === 'carousel' && !fixedWidth) {
      doTransform(0);
    }
    if (autoHeight) {
      runAutoHeight();
    }
    if (lazyload && index !== indexTem || items !== itemsTem) {
      lazyLoad();
    }

    if (navigator.msMaxTouchPoints) {
      setSnapInterval();
    }
  }

  function onResize(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (vw !== getViewWidth()) {
        resizeTasks();
        if (nested === 'outer') {
          events.emit('outerResized', info(e));
        }
      }
    }, 100); // update after stop resizing for 100 ms
  }

  return {
    getInfo: info,
    events: events,
    goTo: function goTo(targetIndex) {
      // ** goal: renew index and render smoothly **

      // if target is prev or next, 
      // get the index right away
      if (targetIndex === 'next') {
        index += 1;
      } else if (targetIndex === 'prev' || targetIndex === 'previous') {
        index -= 1;
      } else {
        // if target is not prev or next, 
        // get index by comparing absolute target index and absolute index

        // get: absolute index
        var absIndex = index % slideCount,
            absTargetIndex;
        if (absIndex < 0) {
          absIndex += slideCount;
        }

        // get: absolute target index
        if (targetIndex === 'first') {
          absTargetIndex = 0;
        } else if (targetIndex === 'last') {
          absTargetIndex = slideCount - 1;
        } else if (typeof targetIndex === 'number') {
          absTargetIndex = targetIndex % slideCount;
        }
        if (absTargetIndex < 0) {
          absTargetIndex += slideCount;
        }

        // get index
        index += absTargetIndex - absIndex;
      }

      // if index is changed, check it and render
      if (index !== indexCached) {
        checkIndex();
        render();
      }
    },

    destroy: function destroy() {
      // wrapper
      (0, _unwrap.unwrap)(wrapper);
      (0, _unwrap.unwrap)(contentWrapper);
      wrapper = contentWrapper = null;

      // container
      (0, _removeAttrs.removeAttrs)(container, ['id', 'style', 'data-tns-role', 'data-tns-features']);

      // cloned items
      if (loop) {
        for (var j = cloneCount; j--;) {
          slideItems[0].remove();
          slideItems[slideItems.length - 1].remove();
        }
      }

      // Slide Items
      (0, _removeAttrs.removeAttrs)(slideItems, ['id', 'style', 'aria-hidden']);
      slideId = slideCount = null;

      // controls
      if (controls) {
        if (!options.controlsContainer) {
          controlsContainer.remove();
          controlsContainer = prevButton = nextButton = null;
        } else {
          (0, _removeAttrs.removeAttrs)(controlsContainer, ['aria-label']);
          (0, _removeAttrs.removeAttrs)(controlsContainer.children, ['aria-controls', 'tabindex']);
          (0, _removeEventsByClone.removeEventsByClone)(controlsContainer);
        }
      }

      // nav
      if (nav) {
        if (!options.navContainer) {
          navContainer.remove();
          navContainer = null;
        } else {
          (0, _removeAttrs.removeAttrs)(navContainer, ['aria-label']);
          (0, _removeAttrs.removeAttrs)(navItems, ['aria-selected', 'aria-controls', 'tabindex']);
          (0, _removeEventsByClone.removeEventsByClone)(navContainer);
        }
        navItems = null;
      }

      // auto
      if (autoplay) {
        if (!options.navContainer && navContainer !== null) {
          navContainer.remove();
          navContainer = null;
        } else {
          (0, _removeEventsByClone.removeEventsByClone)(autoplayButton);
        }
        (0, _removeEvents.removeEvents)(document, { 'visibilitychange': onVisibilityChange });
      }

      // remove slider container events at the end
      // because this will make container = null
      (0, _removeEventsByClone.removeEventsByClone)(container);

      // remove arrowKeys eventlistener
      if (arrowKeys) {
        (0, _removeEvents.removeEvents)(document, { 'keydown': onKeydownDocument });
      }

      // remove window event listeners
      (0, _removeEvents.removeEvents)(window, { 'resize': onResize });
    }

  };
};

},{"../bower_components/go-native/src/gn/append":2,"../bower_components/go-native/src/gn/extend":3,"../bower_components/go-native/src/gn/getSupportedProp":4,"../bower_components/go-native/src/gn/indexOf":5,"../bower_components/go-native/src/gn/unwrap":7,"../bower_components/go-native/src/gn/wrap":8,"../bower_components/go-native/src/utilities/childNode.remove":9,"../bower_components/go-native/src/vendors/requestAnimationFrame":10,"../bower_components/go-native/src/vendors/token-list":11,"./helpers/addEvents":12,"./helpers/events":13,"./helpers/getAttr":14,"./helpers/getSlideId":15,"./helpers/getTouchDirection":16,"./helpers/hasAttr":17,"./helpers/hideElement":18,"./helpers/imageLoaded":19,"./helpers/jsTransform":21,"./helpers/removeAttrs":23,"./helpers/removeEvents":24,"./helpers/removeEventsByClone":25,"./helpers/setAttrs":26,"./helpers/showElement":27,"./helpers/toDegree":28,"./helpers/whichProperty":29}]},{},[1]);
