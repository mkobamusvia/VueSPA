/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () {
  // Baseline setup
  // --------------
  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self.self === self && self || (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global.global === global && global || this || {}; // Save the previous value of the `_` variable.

  var previousUnderscore = root._; // Save bytes in the minified (but not gzipped) version:

  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null; // Create quick reference variables for speed access to core prototypes.

  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.

  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create; // Naked function reference for surrogate-prototype-swapping.

  var Ctor = function Ctor() {}; // Create a safe reference to the Underscore object for use below.


  var _ = function _(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  }; // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)


  if ( true && !exports.nodeType) {
    if ( true && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }

    exports._ = _;
  } else {
    root._ = _;
  } // Current version.


  _.VERSION = '1.9.1'; // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.

  var optimizeCb = function optimizeCb(func, context, argCount) {
    if (context === void 0) return func;

    switch (argCount == null ? 3 : argCount) {
      case 1:
        return function (value) {
          return func.call(context, value);
        };
      // The 2-argument case is omitted because we’re not using it.

      case 3:
        return function (value, index, collection) {
          return func.call(context, value, index, collection);
        };

      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }

    return function () {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee; // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.

  var cb = function cb(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  }; // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.


  _.iteratee = builtinIteratee = function builtinIteratee(value, context) {
    return cb(value, context, Infinity);
  }; // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".


  var restArguments = function restArguments(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function () {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;

      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }

      switch (startIndex) {
        case 0:
          return func.call(this, rest);

        case 1:
          return func.call(this, arguments[0], rest);

        case 2:
          return func.call(this, arguments[0], arguments[1], rest);
      }

      var args = Array(startIndex + 1);

      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }

      args[startIndex] = rest;
      return func.apply(this, args);
    };
  }; // An internal function for creating a new object that inherits from another.


  var baseCreate = function baseCreate(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor();
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function shallowProperty(key) {
    return function (obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function has(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  };

  var deepGet = function deepGet(obj, path) {
    var length = path.length;

    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }

    return length ? obj : void 0;
  }; // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094


  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');

  var isArrayLike = function isArrayLike(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  }; // Collection Functions
  // --------------------
  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.


  _.each = _.forEach = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;

    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);

      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }

    return obj;
  }; // Return the results of applying the iteratee to each element.


  _.map = _.collect = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);

    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);

    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }

    return results;
  }; // Create a reducing function iterating left or right.


  var createReduce = function createReduce(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function reducer(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;

      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }

      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }

      return memo;
    };

    return function (obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  }; // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.


  _.reduce = _.foldl = _.inject = createReduce(1); // The right-associative version of reduce, also known as `foldr`.

  _.reduceRight = _.foldr = createReduce(-1); // Return the first value which passes a truth test. Aliased as `detect`.

  _.find = _.detect = function (obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  }; // Return all the elements that pass a truth test.
  // Aliased as `select`.


  _.filter = _.select = function (obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);

    _.each(obj, function (value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });

    return results;
  }; // Return all the elements for which a truth test fails.


  _.reject = function (obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  }; // Determine whether all of the elements match a truth test.
  // Aliased as `all`.


  _.every = _.all = function (obj, predicate, context) {
    predicate = cb(predicate, context);

    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;

    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }

    return true;
  }; // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.


  _.some = _.any = function (obj, predicate, context) {
    predicate = cb(predicate, context);

    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;

    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }

    return false;
  }; // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.


  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  }; // Invoke a method (with arguments) on every item in a collection.


  _.invoke = restArguments(function (obj, path, args) {
    var contextPath, func;

    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }

    return _.map(obj, function (context) {
      var method = func;

      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }

        if (context == null) return void 0;
        method = context[path];
      }

      return method == null ? method : method.apply(context, args);
    });
  }); // Convenience version of a common use case of `map`: fetching a property.

  _.pluck = function (obj, key) {
    return _.map(obj, _.property(key));
  }; // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.


  _.where = function (obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  }; // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.


  _.findWhere = function (obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  }; // Return the maximum element (or element-based computation).


  _.max = function (obj, iteratee, context) {
    var result = -Infinity,
        lastComputed = -Infinity,
        value,
        computed;

    if (iteratee == null || typeof iteratee == 'number' && _typeof(obj[0]) != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);

      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];

        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);

      _.each(obj, function (v, index, list) {
        computed = iteratee(v, index, list);

        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }

    return result;
  }; // Return the minimum element (or element-based computation).


  _.min = function (obj, iteratee, context) {
    var result = Infinity,
        lastComputed = Infinity,
        value,
        computed;

    if (iteratee == null || typeof iteratee == 'number' && _typeof(obj[0]) != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);

      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];

        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);

      _.each(obj, function (v, index, list) {
        computed = iteratee(v, index, list);

        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }

    return result;
  }; // Shuffle a collection.


  _.shuffle = function (obj) {
    return _.sample(obj, Infinity);
  }; // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.


  _.sample = function (obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }

    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;

    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);

      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }

    return sample.slice(0, n);
  }; // Sort the object's values by a criterion produced by an iteratee.


  _.sortBy = function (obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function (value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function (left, right) {
      var a = left.criteria;
      var b = right.criteria;

      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }

      return left.index - right.index;
    }), 'value');
  }; // An internal function used for aggregate "group by" operations.


  var group = function group(behavior, partition) {
    return function (obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);

      _.each(obj, function (value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });

      return result;
    };
  }; // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.


  _.groupBy = group(function (result, value, key) {
    if (has(result, key)) result[key].push(value);else result[key] = [value];
  }); // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.

  _.indexBy = group(function (result, value, key) {
    result[key] = value;
  }); // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.

  _.countBy = group(function (result, value, key) {
    if (has(result, key)) result[key]++;else result[key] = 1;
  });
  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g; // Safely create a real, live array from anything iterable.

  _.toArray = function (obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);

    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }

    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  }; // Return the number of elements in an object.


  _.size = function (obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  }; // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.


  _.partition = group(function (result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true); // Array Functions
  // ---------------
  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.

  _.first = _.head = _.take = function (array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  }; // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.


  _.initial = function (array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  }; // Get the last element of an array. Passing **n** will return the last N
  // values in the array.


  _.last = function (array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  }; // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.


  _.rest = _.tail = _.drop = function (array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  }; // Trim out all falsy values from an array.


  _.compact = function (array) {
    return _.filter(array, Boolean);
  }; // Internal implementation of a recursive `flatten` function.


  var flatten = function flatten(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;

    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];

      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0,
              len = value.length;

          while (j < len) {
            output[idx++] = value[j++];
          }
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }

    return output;
  }; // Flatten out an array, either recursively (by default), or just one level.


  _.flatten = function (array, shallow) {
    return flatten(array, shallow, false);
  }; // Return a version of the array that does not contain the specified value(s).


  _.without = restArguments(function (array, otherArrays) {
    return _.difference(array, otherArrays);
  }); // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.

  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }

    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];

    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;

      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }

    return result;
  }; // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.


  _.union = restArguments(function (arrays) {
    return _.uniq(flatten(arrays, true, true));
  }); // Produce an array that contains every item shared between all the
  // passed-in arrays.

  _.intersection = function (array) {
    var result = [];
    var argsLength = arguments.length;

    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;

      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }

      if (j === argsLength) result.push(item);
    }

    return result;
  }; // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.


  _.difference = restArguments(function (array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function (value) {
      return !_.contains(rest, value);
    });
  }); // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.

  _.unzip = function (array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }

    return result;
  }; // Zip together multiple lists into a single array -- elements that share
  // an index go together.


  _.zip = restArguments(_.unzip); // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.

  _.object = function (list, values) {
    var result = {};

    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }

    return result;
  }; // Generator function to create the findIndex and findLastIndex functions.


  var createPredicateIndexFinder = function createPredicateIndexFinder(dir) {
    return function (array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;

      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }

      return -1;
    };
  }; // Returns the first index on an array-like that passes a predicate test.


  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1); // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.

  _.sortedIndex = function (array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0,
        high = getLength(array);

    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
    }

    return low;
  }; // Generator function to create the indexOf and lastIndexOf functions.


  var createIndexFinder = function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function (array, item, idx) {
      var i = 0,
          length = getLength(array);

      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }

      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }

      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }

      return -1;
    };
  }; // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.


  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex); // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).

  _.range = function (start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }

    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  }; // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.


  _.chunk = function (array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0,
        length = array.length;

    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }

    return result;
  }; // Function (ahem) Functions
  // ------------------
  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.


  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  }; // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.


  _.bind = restArguments(function (func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function (callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  }); // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.

  _.partial = restArguments(function (func, boundArgs) {
    var placeholder = _.partial.placeholder;

    var bound = function bound() {
      var position = 0,
          length = boundArgs.length;
      var args = Array(length);

      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }

      while (position < arguments.length) {
        args.push(arguments[position++]);
      }

      return executeBound(func, bound, this, this, args);
    };

    return bound;
  });
  _.partial.placeholder = _; // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.

  _.bindAll = restArguments(function (obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');

    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  }); // Memoize an expensive function by storing its results.

  _.memoize = function (func, hasher) {
    var memoize = function memoize(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };

    memoize.cache = {};
    return memoize;
  }; // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.


  _.delay = restArguments(function (func, wait, args) {
    return setTimeout(function () {
      return func.apply(null, args);
    }, wait);
  }); // Defers a function, scheduling it to run after the current call stack has
  // cleared.

  _.defer = _.partial(_.delay, _, 1); // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.

  _.throttle = function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function later() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function throttled() {
      var now = _.now();

      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };

    throttled.cancel = function () {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  }; // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.


  _.debounce = function (func, wait, immediate) {
    var timeout, result;

    var later = function later(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function (args) {
      if (timeout) clearTimeout(timeout);

      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function () {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  }; // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.


  _.wrap = function (func, wrapper) {
    return _.partial(wrapper, func);
  }; // Returns a negated version of the passed-in predicate.


  _.negate = function (predicate) {
    return function () {
      return !predicate.apply(this, arguments);
    };
  }; // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.


  _.compose = function () {
    var args = arguments;
    var start = args.length - 1;
    return function () {
      var i = start;
      var result = args[start].apply(this, arguments);

      while (i--) {
        result = args[i].call(this, result);
      }

      return result;
    };
  }; // Returns a function that will only be executed on and after the Nth call.


  _.after = function (times, func) {
    return function () {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  }; // Returns a function that will only be executed up to (but not including) the Nth call.


  _.before = function (times, func) {
    var memo;
    return function () {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }

      if (times <= 1) func = null;
      return memo;
    };
  }; // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.


  _.once = _.partial(_.before, 2);
  _.restArguments = restArguments; // Object Functions
  // ----------------
  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.

  var hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto; // Constructor is a special case.

    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];

      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }; // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.


  _.keys = function (obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];

    for (var key in obj) {
      if (has(obj, key)) keys.push(key);
    } // Ahem, IE < 9.


    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }; // Retrieve all the property names of an object.


  _.allKeys = function (obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];

    for (var key in obj) {
      keys.push(key);
    } // Ahem, IE < 9.


    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  }; // Retrieve the values of an object's properties.


  _.values = function (obj) {
    var keys = _.keys(obj);

    var length = keys.length;
    var values = Array(length);

    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }

    return values;
  }; // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.


  _.mapObject = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);

    var keys = _.keys(obj),
        length = keys.length,
        results = {};

    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }

    return results;
  }; // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.


  _.pairs = function (obj) {
    var keys = _.keys(obj);

    var length = keys.length;
    var pairs = Array(length);

    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }

    return pairs;
  }; // Invert the keys and values of an object. The values must be serializable.


  _.invert = function (obj) {
    var result = {};

    var keys = _.keys(obj);

    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }

    return result;
  }; // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.


  _.functions = _.methods = function (obj) {
    var names = [];

    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }

    return names.sort();
  }; // An internal function for creating assigner functions.


  var createAssigner = function createAssigner(keysFunc, defaults) {
    return function (obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;

      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;

        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }

      return obj;
    };
  }; // Extend a given object with all the properties in passed-in object(s).


  _.extend = createAssigner(_.allKeys); // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

  _.extendOwn = _.assign = createAssigner(_.keys); // Returns the first key on an object that passes a predicate test.

  _.findKey = function (obj, predicate, context) {
    predicate = cb(predicate, context);

    var keys = _.keys(obj),
        key;

    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  }; // Internal pick helper function to determine if `obj` has key `key`.


  var keyInObj = function keyInObj(value, key, obj) {
    return key in obj;
  }; // Return a copy of the object only containing the whitelisted properties.


  _.pick = restArguments(function (obj, keys) {
    var result = {},
        iteratee = keys[0];
    if (obj == null) return result;

    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }

    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }

    return result;
  }); // Return a copy of the object without the blacklisted properties.

  _.omit = restArguments(function (obj, keys) {
    var iteratee = keys[0],
        context;

    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);

      iteratee = function iteratee(value, key) {
        return !_.contains(keys, key);
      };
    }

    return _.pick(obj, iteratee, context);
  }); // Fill in a given object with default properties.

  _.defaults = createAssigner(_.allKeys, true); // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.

  _.create = function (prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  }; // Create a (shallow-cloned) duplicate of an object.


  _.clone = function (obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  }; // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.


  _.tap = function (obj, interceptor) {
    interceptor(obj);
    return obj;
  }; // Returns whether an object has a given set of `key:value` pairs.


  _.isMatch = function (object, attrs) {
    var keys = _.keys(attrs),
        length = keys.length;

    if (object == null) return !length;
    var obj = Object(object);

    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
  }; // Internal recursive comparison function for `isEqual`.


  var eq, deepEq;

  eq = function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

    if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

    if (a !== a) return b !== b; // Exhaust primitive checks

    var type = _typeof(a);

    if (type !== 'function' && type !== 'object' && _typeof(b) != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  }; // Internal recursive comparison function for `isEqual`.


  deepEq = function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped; // Compare `[[Class]]` names.

    var className = toString.call(a);
    if (className !== toString.call(b)) return false;

    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]': // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;

      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

        return +a === 0 ? 1 / +a === 1 / b : +a === +b;

      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;

      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';

    if (!areArrays) {
      if (_typeof(a) != 'object' || _typeof(b) != 'object') return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.

      var aCtor = a.constructor,
          bCtor = b.constructor;

      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
        return false;
      }
    } // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.


    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;

    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    } // Add the first object to the stack of traversed objects.


    aStack.push(a);
    bStack.push(b); // Recursively compare objects and arrays.

    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a),
          key;

      length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

      if (_.keys(b).length !== length) return false;

      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    } // Remove the first object from the stack of traversed objects.


    aStack.pop();
    bStack.pop();
    return true;
  }; // Perform a deep comparison to check if two objects are equal.


  _.isEqual = function (a, b) {
    return eq(a, b);
  }; // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.


  _.isEmpty = function (obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  }; // Is a given value a DOM element?


  _.isElement = function (obj) {
    return !!(obj && obj.nodeType === 1);
  }; // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray


  _.isArray = nativeIsArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  }; // Is a given variable an object?


  _.isObject = function (obj) {
    var type = _typeof(obj);

    return type === 'function' || type === 'object' && !!obj;
  }; // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.


  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function (name) {
    _['is' + name] = function (obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  }); // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.


  if (!_.isArguments(arguments)) {
    _.isArguments = function (obj) {
      return has(obj, 'callee');
    };
  } // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).


  var nodelist = root.document && root.document.childNodes;

  if ( true && (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) != 'object' && typeof nodelist != 'function') {
    _.isFunction = function (obj) {
      return typeof obj == 'function' || false;
    };
  } // Is a given object a finite number?


  _.isFinite = function (obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  }; // Is the given value `NaN`?


  _.isNaN = function (obj) {
    return _.isNumber(obj) && isNaN(obj);
  }; // Is a given value a boolean?


  _.isBoolean = function (obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  }; // Is a given value equal to null?


  _.isNull = function (obj) {
    return obj === null;
  }; // Is a given variable undefined?


  _.isUndefined = function (obj) {
    return obj === void 0;
  }; // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).


  _.has = function (obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }

    var length = path.length;

    for (var i = 0; i < length; i++) {
      var key = path[i];

      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }

      obj = obj[key];
    }

    return !!length;
  }; // Utility Functions
  // -----------------
  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.


  _.noConflict = function () {
    root._ = previousUnderscore;
    return this;
  }; // Keep the identity function around for default iteratees.


  _.identity = function (value) {
    return value;
  }; // Predicate-generating functions. Often useful outside of Underscore.


  _.constant = function (value) {
    return function () {
      return value;
    };
  };

  _.noop = function () {}; // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.


  _.property = function (path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }

    return function (obj) {
      return deepGet(obj, path);
    };
  }; // Generates a function for a given object that returns a given property.


  _.propertyOf = function (obj) {
    if (obj == null) {
      return function () {};
    }

    return function (path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  }; // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.


  _.matcher = _.matches = function (attrs) {
    attrs = _.extendOwn({}, attrs);
    return function (obj) {
      return _.isMatch(obj, attrs);
    };
  }; // Run a function **n** times.


  _.times = function (n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);

    for (var i = 0; i < n; i++) {
      accum[i] = iteratee(i);
    }

    return accum;
  }; // Return a random integer between min and max (inclusive).


  _.random = function (min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }

    return min + Math.floor(Math.random() * (max - min + 1));
  }; // A (possibly faster) way to get the current timestamp as an integer.


  _.now = Date.now || function () {
    return new Date().getTime();
  }; // List of HTML entities for escaping.


  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  var unescapeMap = _.invert(escapeMap); // Functions for escaping and unescaping strings to/from HTML interpolation.


  var createEscaper = function createEscaper(map) {
    var escaper = function escaper(match) {
      return map[match];
    }; // Regexes for identifying a key that needs to be escaped.


    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };

  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap); // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.

  _.result = function (obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;

    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }

    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];

      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }

      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }

    return obj;
  }; // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.


  var idCounter = 0;

  _.uniqueId = function (prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }; // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.


  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  }; // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.

  var noMatch = /(.)^/; // Certain characters need to be escaped so that they can be put into a
  // string literal.

  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    "\u2028": 'u2028',
    "\u2029": 'u2029'
  };
  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function escapeChar(match) {
    return '\\' + escapes[match];
  }; // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.


  _.template = function (text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings); // Combine delimiters into one regular expression via alternation.

    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g'); // Compile the template source, escaping string literals appropriately.

    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      } // Adobe VMs need the match returned to produce the correct offset.


      return match;
    });
    source += "';\n"; // If a variable is not specified, place data values in local scope.

    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
    var render;

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function template(data) {
      return render.call(this, data, _);
    }; // Provide the compiled source as a convenience for precompilation.


    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';
    return template;
  }; // Add a "chain" function. Start chaining a wrapped Underscore object.


  _.chain = function (obj) {
    var instance = _(obj);

    instance._chain = true;
    return instance;
  }; // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  // Helper function to continue chaining intermediate results.


  var chainResult = function chainResult(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  }; // Add your own custom functions to the Underscore object.


  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name] = obj[name];

      _.prototype[name] = function () {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });

    return _;
  }; // Add all of the Underscore functions to the wrapper object.


  _.mixin(_); // Add all mutator Array functions to the wrapper.


  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
    var method = ArrayProto[name];

    _.prototype[name] = function () {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  }); // Add all accessor Array functions to the wrapper.


  _.each(['concat', 'join', 'slice'], function (name) {
    var method = ArrayProto[name];

    _.prototype[name] = function () {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  }); // Extracts the result from a wrapped and chained object.


  _.prototype.value = function () {
    return this._wrapped;
  }; // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.


  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function () {
    return String(this._wrapped);
  }; // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(5)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//     Backbone.js 1.4.0
//     (c) 2010-2019 Jeremy Ashkenas and DocumentCloud
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
(function (factory) {
  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self.self === self && self || (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global.global === global && global; // Set up Backbone appropriately for the environment. Start with AMD.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(6), exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else { var _, $; }
})(function (root, Backbone, _, $) {
  // Initial Setup
  // -------------
  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone; // Create a local reference to a common array method we'll want to use later.

  var _slice = Array.prototype.slice; // Current version of the library. Keep in sync with `package.json`.

  Backbone.VERSION = '1.4.0'; // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.

  Backbone.$ = $; // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.

  Backbone.noConflict = function () {
    root.Backbone = previousBackbone;
    return this;
  }; // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.


  Backbone.emulateHTTP = false; // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.

  Backbone.emulateJSON = false; // Backbone.Events
  // ---------------
  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //

  var Events = Backbone.Events = {}; // Regular expression used to split event strings.

  var eventSplitter = /\s+/; // A private global variable to share between listeners and listenees.

  var _listening; // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).


  var eventsApi = function eventsApi(iteratee, events, name, callback, opts) {
    var i = 0,
        names;

    if (name && _typeof(name) === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;

      for (names = _.keys(name); i < names.length; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space-separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }

    return events;
  }; // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.


  Events.on = function (name, callback, context) {
    this._events = eventsApi(onApi, this._events || {}, name, callback, {
      context: context,
      ctx: this,
      listening: _listening
    });

    if (_listening) {
      var listeners = this._listeners || (this._listeners = {});
      listeners[_listening.id] = _listening; // Allow the listening to use a counter, instead of tracking
      // callbacks for library interop

      _listening.interop = false;
    }

    return this;
  }; // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.


  Events.listenTo = function (obj, name, callback) {
    if (!obj) return this;

    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));

    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = _listening = listeningTo[id]; // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.

    if (!listening) {
      this._listenId || (this._listenId = _.uniqueId('l'));
      listening = _listening = listeningTo[id] = new Listening(this, obj);
    } // Bind callbacks on obj.


    var error = tryCatchOn(obj, name, callback, this);
    _listening = void 0;
    if (error) throw error; // If the target obj is not Backbone.Events, track events manually.

    if (listening.interop) listening.on(name, callback);
    return this;
  }; // The reducing API that adds a callback to the `events` object.


  var onApi = function onApi(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context,
          ctx = options.ctx,
          listening = options.listening;
      if (listening) listening.count++;
      handlers.push({
        callback: callback,
        context: context,
        ctx: context || ctx,
        listening: listening
      });
    }

    return events;
  }; // An try-catch guarded #on function, to prevent poisoning the global
  // `_listening` variable.


  var tryCatchOn = function tryCatchOn(obj, name, callback, context) {
    try {
      obj.on(name, callback, context);
    } catch (e) {
      return e;
    }
  }; // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.


  Events.off = function (name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });
    return this;
  }; // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.


  Events.stopListening = function (obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;
    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]]; // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.

      if (!listening) break;
      listening.obj.off(name, callback, this);
      if (listening.interop) listening.off(name, callback);
    }

    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;
    return this;
  }; // The reducing API that removes a callback from the `events` object.


  var offApi = function offApi(events, name, callback, options) {
    if (!events) return;
    var context = options.context,
        listeners = options.listeners;
    var i = 0,
        names; // Delete all event listeners and "drop" events.

    if (!name && !context && !callback) {
      for (names = _.keys(listeners); i < names.length; i++) {
        listeners[names[i]].cleanup();
      }

      return;
    }

    names = name ? [name] : _.keys(events);

    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name]; // Bail out if there are no events stored.

      if (!handlers) break; // Find any remaining events.

      var remaining = [];

      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];

        if (callback && callback !== handler.callback && callback !== handler.callback._callback || context && context !== handler.context) {
          remaining.push(handler);
        } else {
          var listening = handler.listening;
          if (listening) listening.off(name, callback);
        }
      } // Replace events if there are any remaining.  Otherwise, clean up.


      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }

    return events;
  }; // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.


  Events.once = function (name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
    if (typeof name === 'string' && context == null) callback = void 0;
    return this.on(events, callback, context);
  }; // Inversion-of-control versions of `once`.


  Events.listenToOnce = function (obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
    return this.listenTo(obj, events);
  }; // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.


  var onceMap = function onceMap(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function () {
        offer(name, once);
        callback.apply(this, arguments);
      });

      once._callback = callback;
    }

    return map;
  }; // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).


  Events.trigger = function (name) {
    if (!this._events) return this;
    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);

    for (var i = 0; i < length; i++) {
      args[i] = arguments[i + 1];
    }

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  }; // Handles triggering the appropriate event callbacks.


  var triggerApi = function triggerApi(objEvents, name, callback, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }

    return objEvents;
  }; // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).


  var triggerEvents = function triggerEvents(events, args) {
    var ev,
        i = -1,
        l = events.length,
        a1 = args[0],
        a2 = args[1],
        a3 = args[2];

    switch (args.length) {
      case 0:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx);
        }

        return;

      case 1:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1);
        }

        return;

      case 2:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1, a2);
        }

        return;

      case 3:
        while (++i < l) {
          (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
        }

        return;

      default:
        while (++i < l) {
          (ev = events[i]).callback.apply(ev.ctx, args);
        }

        return;
    }
  }; // A listening class that tracks and cleans up memory bindings
  // when all callbacks have been offed.


  var Listening = function Listening(listener, obj) {
    this.id = listener._listenId;
    this.listener = listener;
    this.obj = obj;
    this.interop = true;
    this.count = 0;
    this._events = void 0;
  };

  Listening.prototype.on = Events.on; // Offs a callback (or several).
  // Uses an optimized counter if the listenee uses Backbone.Events.
  // Otherwise, falls back to manual tracking to support events
  // library interop.

  Listening.prototype.off = function (name, callback) {
    var cleanup;

    if (this.interop) {
      this._events = eventsApi(offApi, this._events, name, callback, {
        context: void 0,
        listeners: void 0
      });
      cleanup = !this._events;
    } else {
      this.count--;
      cleanup = this.count === 0;
    }

    if (cleanup) this.cleanup();
  }; // Cleans up memory bindings between the listener and the listenee.


  Listening.prototype.cleanup = function () {
    delete this.listener._listeningTo[this.obj._listenId];
    if (!this.interop) delete this.obj._listeners[this.id];
  }; // Aliases for backwards compatibility.


  Events.bind = Events.on;
  Events.unbind = Events.off; // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.

  _.extend(Backbone, Events); // Backbone.Model
  // --------------
  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.
  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.


  var Model = Backbone.Model = function (attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};

    var defaults = _.result(this, 'defaults');

    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  }; // Attach all inheritable methods to the Model prototype.


  _.extend(Model.prototype, Events, {
    // A hash of attributes whose current and previous value differ.
    changed: null,
    // The value returned during the last failed validation.
    validationError: null,
    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',
    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',
    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Model.
    preinitialize: function preinitialize() {},
    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function initialize() {},
    // Return a copy of the model's `attributes` object.
    toJSON: function toJSON(options) {
      return _.clone(this.attributes);
    },
    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function sync() {
      return Backbone.sync.apply(this, arguments);
    },
    // Get the value of an attribute.
    get: function get(attr) {
      return this.attributes[attr];
    },
    // Get the HTML-escaped value of an attribute.
    escape: function escape(attr) {
      return _.escape(this.get(attr));
    },
    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function has(attr) {
      return this.get(attr) != null;
    },
    // Special-cased proxy to underscore's `_.matches` method.
    matches: function matches(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },
    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function set(key, val, options) {
      if (key == null) return this; // Handle both `"key", value` and `{key: value}` -style arguments.

      var attrs;

      if (_typeof(key) === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {}); // Run validation.

      if (!this._validate(attrs, options)) return false; // Extract attributes and options.

      var unset = options.unset;
      var silent = options.silent;
      var changes = [];
      var changing = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev = this._previousAttributes; // For each `set` attribute, update or delete the current value.

      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);

        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }

        unset ? delete current[attr] : current[attr] = val;
      } // Update the `id`.


      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute); // Trigger all relevant attribute changes.

      if (!silent) {
        if (changes.length) this._pending = options;

        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      } // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.


      if (changing) return this;

      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }

      this._pending = false;
      this._changing = false;
      return this;
    },
    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function unset(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {
        unset: true
      }));
    },
    // Clear all attributes on the model, firing `"change"`.
    clear: function clear(options) {
      var attrs = {};

      for (var key in this.attributes) {
        attrs[key] = void 0;
      }

      return this.set(attrs, _.extend({}, options, {
        unset: true
      }));
    },
    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function hasChanged(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },
    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function changedAttributes(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      var hasChanged;

      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
        hasChanged = true;
      }

      return hasChanged ? changed : false;
    },
    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function previous(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },
    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function previousAttributes() {
      return _.clone(this._previousAttributes);
    },
    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function fetch(options) {
      options = _.extend({
        parse: true
      }, options);
      var model = this;
      var success = options.success;

      options.success = function (resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };

      wrapError(this, options);
      return this.sync('read', this, options);
    },
    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function save(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;

      if (key == null || _typeof(key) === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({
        validate: true,
        parse: true
      }, options);
      var wait = options.wait; // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.

      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      } // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.


      var model = this;
      var success = options.success;
      var attributes = this.attributes;

      options.success = function (resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };

      wrapError(this, options); // Set temporary attributes if `{wait: true}` to properly find new ids.

      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);
      var method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options); // Restore attributes.

      this.attributes = attributes;
      return xhr;
    },
    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function destroy(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function destroy() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function (resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;

      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }

      if (!wait) destroy();
      return xhr;
    },
    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function url() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },
    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function parse(resp, options) {
      return resp;
    },
    // Create a new model with identical attributes to this one.
    clone: function clone() {
      return new this.constructor(this.attributes);
    },
    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function isNew() {
      return !this.has(this.idAttribute);
    },
    // Check if the model is currently in a valid state.
    isValid: function isValid(options) {
      return this._validate({}, _.extend({}, options, {
        validate: true
      }));
    },
    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function _validate(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {
        validationError: error
      }));
      return false;
    }
  }); // Backbone.Collection
  // -------------------
  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.
  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.


  var Collection = Backbone.Collection = function (models, options) {
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;

    this._reset();

    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({
      silent: true
    }, options));
  }; // Default options for `Collection#set`.


  var setOptions = {
    add: true,
    remove: true,
    merge: true
  };
  var addOptions = {
    add: true,
    remove: false
  }; // Splices `insert` into `array` at index `at`.

  var splice = function splice(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    var i;

    for (i = 0; i < tail.length; i++) {
      tail[i] = array[i + at];
    }

    for (i = 0; i < length; i++) {
      array[i + at] = insert[i];
    }

    for (i = 0; i < tail.length; i++) {
      array[i + length + at] = tail[i];
    }
  }; // Define the Collection's inheritable methods.


  _.extend(Collection.prototype, Events, {
    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,
    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Collection.
    preinitialize: function preinitialize() {},
    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function initialize() {},
    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function toJSON(options) {
      return this.map(function (model) {
        return model.toJSON(options);
      });
    },
    // Proxy `Backbone.sync` by default.
    sync: function sync() {
      return Backbone.sync.apply(this, arguments);
    },
    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function add(models, options) {
      return this.set(models, _.extend({
        merge: false
      }, options, addOptions));
    },
    // Remove a model, or a list of models from the set.
    remove: function remove(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var removed = this._removeModels(models, options);

      if (!options.silent && removed.length) {
        options.changes = {
          added: [],
          merged: [],
          removed: removed
        };
        this.trigger('update', this, options);
      }

      return singular ? removed[0] : removed;
    },
    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function set(models, options) {
      if (models == null) return;
      options = _.extend({}, setOptions, options);

      if (options.parse && !this._isModel(models)) {
        models = this.parse(models, options) || [];
      }

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();
      var at = options.at;
      if (at != null) at = +at;
      if (at > this.length) at = this.length;
      if (at < 0) at += this.length + 1;
      var set = [];
      var toAdd = [];
      var toMerge = [];
      var toRemove = [];
      var modelMap = {};
      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;
      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null; // Turn bare objects into model references, and prevent invalid models
      // from being added.

      var model, i;

      for (i = 0; i < models.length; i++) {
        model = models[i]; // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.

        var existing = this.get(model);

        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            toMerge.push(existing);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }

          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }

          models[i] = existing; // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);

          if (model) {
            toAdd.push(model);

            this._addReference(model, options);

            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      } // Remove stale models.


      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }

        if (toRemove.length) this._removeModels(toRemove, options);
      } // See if sorting is needed, update `length` and splice in new models.


      var orderChanged = false;
      var replace = !sortable && add && remove;

      if (set.length && replace) {
        orderChanged = this.length !== set.length || _.some(this.models, function (m, index) {
          return m !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      } // Silently sort the collection if appropriate.


      if (sort) this.sort({
        silent: true
      }); // Unless silenced, it's time to fire all appropriate add/sort/update events.

      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }

        if (sort || orderChanged) this.trigger('sort', this, options);

        if (toAdd.length || toRemove.length || toMerge.length) {
          options.changes = {
            added: toAdd,
            removed: toRemove,
            merged: toMerge
          };
          this.trigger('update', this, options);
        }
      } // Return the added (or merged) model (or models).


      return singular ? models[0] : models;
    },
    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function reset(models, options) {
      options = options ? _.clone(options) : {};

      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }

      options.previousModels = this.models;

      this._reset();

      models = this.add(models, _.extend({
        silent: true
      }, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },
    // Add a model to the end of the collection.
    push: function push(model, options) {
      return this.add(model, _.extend({
        at: this.length
      }, options));
    },
    // Remove a model from the end of the collection.
    pop: function pop(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },
    // Add a model to the beginning of the collection.
    unshift: function unshift(model, options) {
      return this.add(model, _.extend({
        at: 0
      }, options));
    },
    // Remove a model from the beginning of the collection.
    shift: function shift(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },
    // Slice out a sub-array of models from the collection.
    slice: function slice() {
      return _slice.apply(this.models, arguments);
    },
    // Get a model from the set by id, cid, model object with id or cid
    // properties, or an attributes object that is transformed through modelId.
    get: function get(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[this.modelId(this._isModel(obj) ? obj.attributes : obj)] || obj.cid && this._byId[obj.cid];
    },
    // Returns `true` if the model is in the collection.
    has: function has(obj) {
      return this.get(obj) != null;
    },
    // Get the model at the given index.
    at: function at(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },
    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function where(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },
    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function findWhere(attrs) {
      return this.where(attrs, true);
    },
    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function sort(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});
      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = comparator.bind(this); // Run sort based on type of `comparator`.

      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },
    // Pluck an attribute from each model in the collection.
    pluck: function pluck(attr) {
      return this.map(attr + '');
    },
    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function fetch(options) {
      options = _.extend({
        parse: true
      }, options);
      var success = options.success;
      var collection = this;

      options.success = function (resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };

      wrapError(this, options);
      return this.sync('read', this, options);
    },
    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function create(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;

      options.success = function (m, resp, callbackOpts) {
        if (wait) collection.add(m, callbackOpts);
        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
      };

      model.save(null, options);
      return model;
    },
    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function parse(resp, options) {
      return resp;
    },
    // Create a new collection with an identical list of models as this one.
    clone: function clone() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },
    // Define how to uniquely identify models in the collection.
    modelId: function modelId(attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },
    // Get an iterator of all models in this collection.
    values: function values() {
      return new CollectionIterator(this, ITERATOR_VALUES);
    },
    // Get an iterator of all model IDs in this collection.
    keys: function keys() {
      return new CollectionIterator(this, ITERATOR_KEYS);
    },
    // Get an iterator of all [ID, model] tuples in this collection.
    entries: function entries() {
      return new CollectionIterator(this, ITERATOR_KEYSVALUES);
    },
    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function _reset() {
      this.length = 0;
      this.models = [];
      this._byId = {};
    },
    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function _prepareModel(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }

      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },
    // Internal method called by both remove and set.
    _removeModels: function _removeModels(models, options) {
      var removed = [];

      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;
        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--; // Remove references before triggering 'remove' event to prevent an
        // infinite loop. #3693

        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);

        this._removeReference(model, options);
      }

      return removed;
    },
    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function _isModel(model) {
      return model instanceof Model;
    },
    // Internal method to create a model's ties to a collection.
    _addReference: function _addReference(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },
    // Internal method to sever a model's ties to a collection.
    _removeReference: function _removeReference(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },
    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function _onModelEvent(event, model, collection, options) {
      if (model) {
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);

        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);

          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = model;
          }
        }
      }

      this.trigger.apply(this, arguments);
    }
  }); // Defining an @@iterator method implements JavaScript's Iterable protocol.
  // In modern ES2015 browsers, this value is found at Symbol.iterator.

  /* global Symbol */


  var $$iterator = typeof Symbol === 'function' && Symbol.iterator;

  if ($$iterator) {
    Collection.prototype[$$iterator] = Collection.prototype.values;
  } // CollectionIterator
  // ------------------
  // A CollectionIterator implements JavaScript's Iterator protocol, allowing the
  // use of `for of` loops in modern browsers and interoperation between
  // Backbone.Collection and other JavaScript functions and third-party libraries
  // which can operate on Iterables.


  var CollectionIterator = function CollectionIterator(collection, kind) {
    this._collection = collection;
    this._kind = kind;
    this._index = 0;
  }; // This "enum" defines the three possible kinds of values which can be emitted
  // by a CollectionIterator that correspond to the values(), keys() and entries()
  // methods on Collection, respectively.


  var ITERATOR_VALUES = 1;
  var ITERATOR_KEYS = 2;
  var ITERATOR_KEYSVALUES = 3; // All Iterators should themselves be Iterable.

  if ($$iterator) {
    CollectionIterator.prototype[$$iterator] = function () {
      return this;
    };
  }

  CollectionIterator.prototype.next = function () {
    if (this._collection) {
      // Only continue iterating if the iterated collection is long enough.
      if (this._index < this._collection.length) {
        var model = this._collection.at(this._index);

        this._index++; // Construct a value depending on what kind of values should be iterated.

        var value;

        if (this._kind === ITERATOR_VALUES) {
          value = model;
        } else {
          var id = this._collection.modelId(model.attributes);

          if (this._kind === ITERATOR_KEYS) {
            value = id;
          } else {
            // ITERATOR_KEYSVALUES
            value = [id, model];
          }
        }

        return {
          value: value,
          done: false
        };
      } // Once exhausted, remove the reference to the collection so future
      // calls to the next method always return done.


      this._collection = void 0;
    }

    return {
      value: void 0,
      done: true
    };
  }; // Backbone.View
  // -------------
  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.
  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...


  var View = Backbone.View = function (options) {
    this.cid = _.uniqueId('view');
    this.preinitialize.apply(this, arguments);

    _.extend(this, _.pick(options, viewOptions));

    this._ensureElement();

    this.initialize.apply(this, arguments);
  }; // Cached regex to split keys for `delegate`.


  var delegateEventSplitter = /^(\S+)\s*(.*)$/; // List of view options to be set as properties.

  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events']; // Set up all inheritable **Backbone.View** properties and methods.

  _.extend(View.prototype, Events, {
    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',
    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function $(selector) {
      return this.$el.find(selector);
    },
    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the View
    preinitialize: function preinitialize() {},
    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function initialize() {},
    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function render() {
      return this;
    },
    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function remove() {
      this._removeElement();

      this.stopListening();
      return this;
    },
    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function _removeElement() {
      this.$el.remove();
    },
    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function setElement(element) {
      this.undelegateEvents();

      this._setElement(element);

      this.delegateEvents();
      return this;
    },
    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function _setElement(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },
    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function delegateEvents(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();

      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], method.bind(this));
      }

      return this;
    },
    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function delegate(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },
    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function undelegateEvents() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },
    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function undelegate(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },
    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function _createElement(tagName) {
      return document.createElement(tagName);
    },
    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function _ensureElement() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));

        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));

        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },
    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function _setAttributes(attributes) {
      this.$el.attr(attributes);
    }
  }); // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.


  var addMethod = function addMethod(base, length, method, attribute) {
    switch (length) {
      case 1:
        return function () {
          return base[method](this[attribute]);
        };

      case 2:
        return function (value) {
          return base[method](this[attribute], value);
        };

      case 3:
        return function (iteratee, context) {
          return base[method](this[attribute], cb(iteratee, this), context);
        };

      case 4:
        return function (iteratee, defaultVal, context) {
          return base[method](this[attribute], cb(iteratee, this), defaultVal, context);
        };

      default:
        return function () {
          var args = _slice.call(arguments);

          args.unshift(this[attribute]);
          return base[method].apply(base, args);
        };
    }
  };

  var addUnderscoreMethods = function addUnderscoreMethods(Class, base, methods, attribute) {
    _.each(methods, function (length, method) {
      if (base[method]) Class.prototype[method] = addMethod(base, length, method, attribute);
    });
  }; // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.


  var cb = function cb(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function (model) {
      return model.get(iteratee);
    };
    return iteratee;
  };

  var modelMatcher = function modelMatcher(attrs) {
    var matcher = _.matches(attrs);

    return function (model) {
      return matcher(model.attributes);
    };
  }; // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:


  var collectionMethods = {
    forEach: 3,
    each: 3,
    map: 3,
    collect: 3,
    reduce: 0,
    foldl: 0,
    inject: 0,
    reduceRight: 0,
    foldr: 0,
    find: 3,
    detect: 3,
    filter: 3,
    select: 3,
    reject: 3,
    every: 3,
    all: 3,
    some: 3,
    any: 3,
    include: 3,
    includes: 3,
    contains: 3,
    invoke: 0,
    max: 3,
    min: 3,
    toArray: 1,
    size: 1,
    first: 3,
    head: 3,
    take: 3,
    initial: 3,
    rest: 3,
    tail: 3,
    drop: 3,
    last: 3,
    without: 0,
    difference: 0,
    indexOf: 3,
    shuffle: 1,
    lastIndexOf: 3,
    isEmpty: 1,
    chain: 1,
    sample: 3,
    partition: 3,
    groupBy: 3,
    countBy: 3,
    sortBy: 3,
    indexBy: 3,
    findIndex: 3,
    findLastIndex: 3
  }; // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.

  var modelMethods = {
    keys: 1,
    values: 1,
    pairs: 1,
    invert: 1,
    pick: 0,
    omit: 0,
    chain: 1,
    isEmpty: 1
  }; // Mix in each Underscore method as a proxy to `Collection#models`.

  _.each([[Collection, collectionMethods, 'models'], [Model, modelMethods, 'attributes']], function (config) {
    var Base = config[0],
        methods = config[1],
        attribute = config[2];

    Base.mixin = function (obj) {
      var mappings = _.reduce(_.functions(obj), function (memo, name) {
        memo[name] = 0;
        return memo;
      }, {});

      addUnderscoreMethods(Base, obj, mappings, attribute);
    };

    addUnderscoreMethods(Base, _, methods, attribute);
  }); // Backbone.sync
  // -------------
  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.


  Backbone.sync = function (method, model, options) {
    var type = methodMap[method]; // Default options, unless specified.

    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    }); // Default JSON-request options.


    var params = {
      type: type,
      dataType: 'json'
    }; // Ensure that we have a URL.

    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    } // Ensure that we have the appropriate request data.


    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    } // For older servers, emulate JSON by encoding the request into an HTML-form.


    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {
        model: params.data
      } : {};
    } // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.


    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;

      options.beforeSend = function (xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    } // Don't process data on a non-GET request.


    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    } // Pass along `textStatus` and `errorThrown` from jQuery.


    var error = options.error;

    options.error = function (xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    }; // Make the request, allowing the user to override any Ajax options.


    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  }; // Map from CRUD to HTTP for our default `Backbone.sync` implementation.


  var methodMap = {
    create: 'POST',
    update: 'PUT',
    patch: 'PATCH',
    "delete": 'DELETE',
    read: 'GET'
  }; // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.

  Backbone.ajax = function () {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  }; // Backbone.Router
  // ---------------
  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.


  var Router = Backbone.Router = function (options) {
    options || (options = {});
    this.preinitialize.apply(this, arguments);
    if (options.routes) this.routes = options.routes;

    this._bindRoutes();

    this.initialize.apply(this, arguments);
  }; // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.


  var optionalParam = /\((.*?)\)/g;
  var namedParam = /(\(\?)?:\w+/g;
  var splatParam = /\*\w+/g;
  var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g; // Set up all inheritable **Backbone.Router** properties and methods.

  _.extend(Router.prototype, Events, {
    // preinitialize is an empty function by default. You can override it with a function
    // or object.  preinitialize will run before any instantiation logic is run in the Router.
    preinitialize: function preinitialize() {},
    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function initialize() {},
    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function route(_route, name, callback) {
      if (!_.isRegExp(_route)) _route = this._routeToRegExp(_route);

      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }

      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(_route, function (fragment) {
        var args = router._extractParameters(_route, fragment);

        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },
    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function execute(callback, args, name) {
      if (callback) callback.apply(this, args);
    },
    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function navigate(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },
    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function _bindRoutes() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');

      var route,
          routes = _.keys(this.routes);

      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },
    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function _routeToRegExp(route) {
      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
        return optional ? match : '([^/?]+)';
      }).replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },
    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function _extractParameters(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function (param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }
  }); // Backbone.History
  // ----------------
  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.


  var History = Backbone.History = function () {
    this.handlers = [];
    this.checkUrl = this.checkUrl.bind(this); // Ensure that `History` can be used outside of the browser.

    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  }; // Cached regex for stripping a leading hash/slash and trailing space.


  var routeStripper = /^[#\/]|\s+$/g; // Cached regex for stripping leading and trailing slashes.

  var rootStripper = /^\/+|\/+$/g; // Cached regex for stripping urls of hash.

  var pathStripper = /#.*$/; // Has the history handling already been started?

  History.started = false; // Set up all inheritable **Backbone.History** properties and methods.

  _.extend(History.prototype, Events, {
    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,
    // Are we at the app root?
    atRoot: function atRoot() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },
    // Does the pathname match the root?
    matchRoot: function matchRoot() {
      var path = this.decodeFragment(this.location.pathname);
      var rootPath = path.slice(0, this.root.length - 1) + '/';
      return rootPath === this.root;
    },
    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function decodeFragment(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },
    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function getSearch() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },
    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function getHash(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },
    // Get the pathname and search params, without the root.
    getPath: function getPath() {
      var path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },
    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function getFragment(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }

      return fragment.replace(routeStripper, '');
    },
    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function start(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true; // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?

      this.options = _.extend({
        root: '/'
      }, this.options, options);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.history && this.history.pushState);
      this._usePushState = this._wantsPushState && this._hasPushState;
      this.fragment = this.getFragment(); // Normalize root to always include a leading and trailing slash.

      this.root = ('/' + this.root + '/').replace(rootStripper, '/'); // Transition from hashChange to pushState or vice versa if both are
      // requested.

      if (this._wantsHashChange && this._wantsPushState) {
        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = this.root.slice(0, -1) || '/';
          this.location.replace(rootPath + '#' + this.getPath()); // Return immediately as browser will do redirect to new url

          return true; // Or if we've started out with a hash-based route, but we're currently
          // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {
            replace: true
          });
        }
      } // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.


      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body; // Using `appendChild` will throw on IE < 9 if the document is not ready.

        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      } // Add a cross-platform `addEventListener` shim for older browsers.


      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      }; // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.


      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },
    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function stop() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      }; // Remove window listeners.


      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      } // Clean up the iframe if necessary.


      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      } // Some environments will throw when clearing an undefined interval.


      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },
    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function route(_route2, callback) {
      this.handlers.unshift({
        route: _route2,
        callback: callback
      });
    },
    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function checkUrl(e) {
      var current = this.getFragment(); // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.

      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },
    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function loadUrl(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function (handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },
    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function navigate(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {
        trigger: !!options
      }; // Normalize the fragment.

      fragment = this.getFragment(fragment || ''); // Don't include a trailing slash on the root.

      var rootPath = this.root;

      if (fragment === '' || fragment.charAt(0) === '?') {
        rootPath = rootPath.slice(0, -1) || '/';
      }

      var url = rootPath + fragment; // Strip the fragment of the query and hash for matching.

      fragment = fragment.replace(pathStripper, ''); // Decode for matching.

      var decodedFragment = this.decodeFragment(fragment);
      if (this.fragment === decodedFragment) return;
      this.fragment = decodedFragment; // If pushState is available, we use it to set the fragment as a real URL.

      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url); // If hash changes haven't been explicitly disabled, update the hash
        // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);

        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow; // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.

          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        } // If you've told us that you explicitly don't want fallback hashchange-
        // based history, then `navigate` becomes a page refresh.

      } else {
        return this.location.assign(url);
      }

      if (options.trigger) return this.loadUrl(fragment);
    },
    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function _updateHash(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }
  }); // Create the default Backbone.history.


  Backbone.history = new History(); // Helpers
  // -------
  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.

  var extend = function extend(protoProps, staticProps) {
    var parent = this;
    var child; // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.

    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function child() {
        return parent.apply(this, arguments);
      };
    } // Add static properties to the constructor function, if supplied.


    _.extend(child, parent, staticProps); // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.


    child.prototype = _.create(parent.prototype, protoProps);
    child.prototype.constructor = child; // Set a convenience property in case the parent's prototype is needed
    // later.

    child.__super__ = parent.prototype;
    return child;
  }; // Set up inheritance for the model, collection, router, view and history.


  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend; // Throw an error when a URL is needed, and none is supplied.

  var urlError = function urlError() {
    throw new Error('A "url" property or function must be specified');
  }; // Wrap an optional error callback with a fallback error event.


  var wrapError = function wrapError(model, options) {
    var error = options.error;

    options.error = function (resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
* @license PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2013 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
window.createjs = window.createjs || {}, function () {
  "use strict";

  var a = createjs.PreloadJS = createjs.PreloadJS || {};
  a.version = "0.4.1", a.buildDate = "Thu, 12 Dec 2013 23:33:38 GMT";
}(), function () {
  "use strict";

  var a = function a(_a, b, c) {
    this.initialize(_a, b, c);
  },
      b = a.prototype;

  b.type = null, b.target = null, b.currentTarget = null, b.eventPhase = 0, b.bubbles = !1, b.cancelable = !1, b.timeStamp = 0, b.defaultPrevented = !1, b.propagationStopped = !1, b.immediatePropagationStopped = !1, b.removed = !1, b.initialize = function (a, b, c) {
    this.type = a, this.bubbles = b, this.cancelable = c, this.timeStamp = new Date().getTime();
  }, b.preventDefault = function () {
    this.defaultPrevented = !0;
  }, b.stopPropagation = function () {
    this.propagationStopped = !0;
  }, b.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, b.remove = function () {
    this.removed = !0;
  }, b.clone = function () {
    return new a(this.type, this.bubbles, this.cancelable);
  }, b.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = a;
}(), function () {
  "use strict";

  var a = function a() {},
      b = a.prototype;

  a.initialize = function (a) {
    a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger;
  }, b._listeners = null, b._captureListeners = null, b.initialize = function () {}, b.addEventListener = function (a, b, c) {
    var d;
    d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
    var e = d[a];
    return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, b.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, b.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;

    if (d) {
      var e = d[a];
      if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);
          break;
        }
      }
    }
  }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, b.dispatchEvent = function (a, b) {
    if ("string" == typeof a) {
      var c = this._listeners;
      if (!c || !c[a]) return !1;
      a = new createjs.Event(a);
    }

    if (a.target = b || this, a.bubbles && this.parent) {
      for (var d = this, e = [d]; d.parent;) {
        e.push(d = d.parent);
      }

      var f,
          g = e.length;

      for (f = g - 1; f >= 0 && !a.propagationStopped; f--) {
        e[f]._dispatchEvent(a, 1 + (0 == f));
      }

      for (f = 1; g > f && !a.propagationStopped; f++) {
        e[f]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);

    return a.defaultPrevented;
  }, b.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;
    return !!(b && b[a] || c && c[a]);
  }, b.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;
      b = b.parent;
    }

    return !1;
  }, b.toString = function () {
    return "[EventDispatcher]";
  }, b._dispatchEvent = function (a, b) {
    var c,
        d = 1 == b ? this._captureListeners : this._listeners;

    if (a && d) {
      var e = d[a.type];
      if (!e || !(c = e.length)) return;
      a.currentTarget = this, a.eventPhase = b, a.removed = !1, e = e.slice();

      for (var f = 0; c > f && !a.immediatePropagationStopped; f++) {
        var g = e[f];
        g.handleEvent ? g.handleEvent(a) : g(a), a.removed && (this.off(a.type, g, 1 == b), a.removed = !1);
      }
    }
  }, createjs.EventDispatcher = a;
}(), function () {
  "use strict";

  createjs.indexOf = function (a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      if (b === a[c]) return c;
    }

    return -1;
  };
}(), function () {
  "use strict";

  createjs.proxy = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return function () {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), function () {
  "use strict";

  var a = function a() {
    this.init();
  };

  a.prototype = new createjs.EventDispatcher();
  var b = a.prototype,
      c = a;
  c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?)|(.{0,2}\/{1}))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.PATH_PATTERN = /^(?:(\w+:)\/{2})|(.{0,2}\/{1})?([/.]*?(?:[^?]+)?\/?)?$/, b.loaded = !1, b.canceled = !1, b.progress = 0, b._item = null, b.getItem = function () {
    return this._item;
  }, b.init = function () {}, b.load = function () {}, b.close = function () {}, b._sendLoadStart = function () {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, b._sendProgress = function (a) {
    if (!this._isCanceled()) {
      var b = null;
      "number" == typeof a ? (this.progress = a, b = new createjs.Event("progress"), b.loaded = this.progress, b.total = 1) : (b = a, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), b.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, b._sendComplete = function () {
    this._isCanceled() || this.dispatchEvent("complete");
  }, b._sendError = function (a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.Event("error")), this.dispatchEvent(a));
  }, b._isCanceled = function () {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, b._parseURI = function (a) {
    return a ? a.match(c.FILE_PATTERN) : null;
  }, b._parsePath = function (a) {
    return a ? a.match(c.PATH_PATTERN) : null;
  }, b._formatQueryString = function (a, b) {
    if (null == a) throw new Error("You must specify data.");
    var c = [];

    for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }

    return b && (c = c.concat(b)), c.join("&");
  }, b.buildPath = function (a, b) {
    if (null == b) return a;
    var c = [],
        d = a.indexOf("?");

    if (-1 != d) {
      var e = a.slice(d + 1);
      c = c.concat(e.split("&"));
    }

    return -1 != d ? a.slice(0, d) + "?" + this._formatQueryString(b, c) : a + "?" + this._formatQueryString(b, c);
  }, b._isCrossDomain = function (a) {
    var b = document.createElement("a");
    b.href = a.src;
    var c = document.createElement("a");
    c.href = location.href;
    var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
    return d;
  }, b._isLocal = function (a) {
    var b = document.createElement("a");
    return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, b.toString = function () {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = a;
}(), function () {
  "use strict";

  var a = function a(_a2, b, c) {
    this.init(_a2, b, c);
  },
      b = a.prototype = new createjs.AbstractLoader(),
      c = a;

  c.loadTimeout = 8e3, c.LOAD_TIMEOUT = 0, c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", c.POST = "POST", c.GET = "GET", b._basePath = null, b._crossOrigin = "", b.useXHR = !0, b.stopOnError = !1, b.maintainScriptOrder = !0, b.next = null, b._typeCallbacks = null, b._extensionCallbacks = null, b._loadStartWasDispatched = !1, b._maxConnections = 1, b._currentlyLoadingScript = null, b._currentLoads = null, b._loadQueue = null, b._loadQueueBackup = null, b._loadItemsById = null, b._loadItemsBySrc = null, b._loadedResults = null, b._loadedRawResults = null, b._numItems = 0, b._numItemsLoaded = 0, b._scriptOrder = null, b._loadedScripts = null, b.init = function (a, b, c) {
    this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = b, this.setUseXHR(a), this._crossOrigin = c === !0 ? "Anonymous" : c === !1 || null == c ? "" : c;
  }, b.setUseXHR = function (a) {
    return this.useXHR = 0 != a && null != window.XMLHttpRequest, this.useXHR;
  }, b.removeAll = function () {
    this.remove();
  }, b.remove = function (a) {
    var b = null;

    if (!a || a instanceof Array) {
      if (a) b = a;else if (arguments.length > 0) return;
    } else b = [a];

    var c = !1;

    if (b) {
      for (; b.length;) {
        var d = b.pop(),
            e = this.getResult(d);

        for (f = this._loadQueue.length - 1; f >= 0; f--) {
          if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
            this._loadQueue.splice(f, 1)[0].cancel();

            break;
          }
        }

        for (f = this._loadQueueBackup.length - 1; f >= 0; f--) {
          if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
            this._loadQueueBackup.splice(f, 1)[0].cancel();

            break;
          }
        }

        if (e) delete this._loadItemsById[e.id], delete this._loadItemsBySrc[e.src], this._disposeItem(e);else for (var f = this._currentLoads.length - 1; f >= 0; f--) {
          var g = this._currentLoads[f].getItem();

          if (g.id == d || g.src == d) {
            this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
            break;
          }
        }
      }

      c && this._loadNext();
    } else {
      this.close();

      for (var h in this._loadItemsById) {
        this._disposeItem(this._loadItemsById[h]);
      }

      this.init(this.useXHR);
    }
  }, b.reset = function () {
    this.close();

    for (var a in this._loadItemsById) {
      this._disposeItem(this._loadItemsById[a]);
    }

    for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) {
      b.push(this._loadQueueBackup[c].getItem());
    }

    this.loadManifest(b, !1);
  }, c.isBinary = function (a) {
    switch (a) {
      case createjs.LoadQueue.IMAGE:
      case createjs.LoadQueue.BINARY:
        return !0;

      default:
        return !1;
    }
  }, c.isText = function (a) {
    switch (a) {
      case createjs.LoadQueue.TEXT:
      case createjs.LoadQueue.JSON:
      case createjs.LoadQueue.MANIFEST:
      case createjs.LoadQueue.XML:
      case createjs.LoadQueue.HTML:
      case createjs.LoadQueue.CSS:
      case createjs.LoadQueue.SVG:
      case createjs.LoadQueue.JAVASCRIPT:
        return !0;

      default:
        return !1;
    }
  }, b.installPlugin = function (a) {
    if (null != a && null != a.getPreloadHandlers) {
      var b = a.getPreloadHandlers();
      if (b.scope = a, null != b.types) for (var c = 0, d = b.types.length; d > c; c++) {
        this._typeCallbacks[b.types[c]] = b;
      }
      if (null != b.extensions) for (c = 0, d = b.extensions.length; d > c; c++) {
        this._extensionCallbacks[b.extensions[c]] = b;
      }
    }
  }, b.setMaxConnections = function (a) {
    this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext();
  }, b.loadFile = function (a, b, c) {
    if (null == a) {
      var d = new createjs.Event("error");
      return d.text = "PRELOAD_NO_FILE", this._sendError(d), void 0;
    }

    this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
  }, b.loadManifest = function (a, b, d) {
    var e = null,
        f = null;

    if (a instanceof Array) {
      if (0 == a.length) {
        var g = new createjs.Event("error");
        return g.text = "PRELOAD_MANIFEST_EMPTY", this._sendError(g), void 0;
      }

      e = a;
    } else if ("string" == typeof a) e = [{
      src: a,
      type: c.MANIFEST
    }];else {
      if ("object" != _typeof(a)) {
        var g = new createjs.Event("error");
        return g.text = "PRELOAD_MANIFEST_NULL", this._sendError(g), void 0;
      }

      if (void 0 !== a.src) {
        if (null == a.type) a.type = c.MANIFEST;else if (a.type != c.MANIFEST) {
          var g = new createjs.Event("error");
          g.text = "PRELOAD_MANIFEST_ERROR", this._sendError(g);
        }
        e = [a];
      } else void 0 !== a.manifest && (e = a.manifest, f = a.path);
    }

    for (var h = 0, i = e.length; i > h; h++) {
      this._addItem(e[h], f, d);
    }

    b !== !1 ? this.setPaused(!1) : this.setPaused(!0);
  }, b.load = function () {
    this.setPaused(!1);
  }, b.getItem = function (a) {
    return this._loadItemsById[a] || this._loadItemsBySrc[a];
  }, b.getResult = function (a, b) {
    var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
    if (null == c) return null;
    var d = c.id;
    return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d];
  }, b.setPaused = function (a) {
    this._paused = a, this._paused || this._loadNext();
  }, b.close = function () {
    for (; this._currentLoads.length;) {
      this._currentLoads.pop().cancel();
    }

    this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1;
  }, b._addItem = function (a, b, c) {
    var d = this._createLoadItem(a, b, c);

    if (null != d) {
      var e = this._createLoader(d);

      null != e && (this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT && e instanceof createjs.XHRLoader && (this._scriptOrder.push(d), this._loadedScripts.push(null)));
    }
  }, b._createLoadItem = function (a, b, c) {
    var d = null;

    switch (_typeof(a)) {
      case "string":
        d = {
          src: a
        };
        break;

      case "object":
        d = window.HTMLAudioElement && a instanceof window.HTMLAudioElement ? {
          tag: a,
          src: d.tag.src,
          type: createjs.LoadQueue.SOUND
        } : a;
        break;

      default:
        return null;
    }

    var e = this._parseURI(d.src);

    null != e && (d.ext = e[6]), null == d.type && (d.type = this._getTypeByExtension(d.ext));
    var f = "",
        g = c || this._basePath,
        h = d.src;
    if (e && null == e[1] && null == e[3]) if (b) {
      f = b;

      var i = this._parsePath(b);

      h = b + h, null != g && i && null == i[1] && null == i[2] && (f = g + f);
    } else null != g && (f = g);
    if (d.src = f + d.src, d.path = f, (d.type == createjs.LoadQueue.JSON || d.type == createjs.LoadQueue.MANIFEST) && (d._loadAsJSONP = null != d.callback), d.type == createjs.LoadQueue.JSONP && null == d.callback) throw new Error("callback is required for loading JSONP requests.");
    (void 0 === d.tag || null === d.tag) && (d.tag = this._createTag(d)), (void 0 === d.id || null === d.id || "" === d.id) && (d.id = h);
    var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];

    if (j) {
      var k = j.callback.call(j.scope, d.src, d.type, d.id, d.data, f, this);
      if (k === !1) return null;
      k === !0 || (null != k.src && (d.src = k.src), null != k.id && (d.id = k.id), null != k.tag && (d.tag = k.tag), null != k.completeHandler && (d.completeHandler = k.completeHandler), k.type && (d.type = k.type), e = this._parseURI(d.src), null != e && null != e[6] && (d.ext = e[6].toLowerCase()));
    }

    return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, d;
  }, b._createLoader = function (a) {
    var b = this.useXHR;

    switch (a.type) {
      case createjs.LoadQueue.JSON:
      case createjs.LoadQueue.MANIFEST:
        b = !a._loadAsJSONP;
        break;

      case createjs.LoadQueue.XML:
      case createjs.LoadQueue.TEXT:
        b = !0;
        break;

      case createjs.LoadQueue.SOUND:
      case createjs.LoadQueue.JSONP:
        b = !1;
        break;

      case null:
        return null;
    }

    return b ? new createjs.XHRLoader(a, this._crossOrigin) : new createjs.TagLoader(a);
  }, b._loadNext = function () {
    if (!this._paused) {
      this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;

      for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
        var b = this._loadQueue[a];

        if (this.maintainScriptOrder && b instanceof createjs.TagLoader && b.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
          if (this._currentlyLoadingScript) continue;
          this._currentlyLoadingScript = !0;
        }

        this._loadQueue.splice(a, 1), a--, this._loadItem(b);
      }
    }
  }, b._loadItem = function (a) {
    a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load();
  }, b._handleFileError = function (a) {
    var b = a.target;
    this._numItemsLoaded++, this._updateProgress();
    var c = new createjs.Event("error");
    c.text = "FILE_LOAD_ERROR", c.item = b.getItem(), this._sendError(c), this.stopOnError || (this._removeLoadItem(b), this._loadNext());
  }, b._handleFileComplete = function (a) {
    var b = a.target,
        c = b.getItem();

    if (this._loadedResults[c.id] = b.getResult(), b instanceof createjs.XHRLoader && (this._loadedRawResults[c.id] = b.getResult(!0)), this._removeLoadItem(b), this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT) {
      if (!(b instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, c)] = c, this._checkScriptLoadOrder(b), void 0;
      this._currentlyLoadingScript = !1;
    }

    if (delete c._loadAsJSONP, c.type == createjs.LoadQueue.MANIFEST) {
      var d = b.getResult();
      null != d && void 0 !== d.manifest && this.loadManifest(d, !0);
    }

    this._processFinishedLoad(c, b);
  }, b._processFinishedLoad = function (a, b) {
    this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(a, b), this._loadNext();
  }, b._checkScriptLoadOrder = function () {
    for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
      var c = this._loadedScripts[b];
      if (null === c) break;

      if (c !== !0) {
        var d = this._loadedResults[c.id];
        (document.body || document.getElementsByTagName("body")[0]).appendChild(d), this._processFinishedLoad(c), this._loadedScripts[b] = !0;
      }
    }
  }, b._removeLoadItem = function (a) {
    for (var b = this._currentLoads.length, c = 0; b > c; c++) {
      if (this._currentLoads[c] == a) {
        this._currentLoads.splice(c, 1);

        break;
      }
    }
  }, b._handleProgress = function (a) {
    var b = a.target;
    this._sendFileProgress(b.getItem(), b.progress), this._updateProgress();
  }, b._updateProgress = function () {
    var a = this._numItemsLoaded / this._numItems,
        b = this._numItems - this._numItemsLoaded;

    if (b > 0) {
      for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) {
        c += this._currentLoads[d].progress;
      }

      a += c / b * (b / this._numItems);
    }

    this._sendProgress(a);
  }, b._disposeItem = function (a) {
    delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src];
  }, b._createTag = function (a) {
    var b = null;

    switch (a.type) {
      case createjs.LoadQueue.IMAGE:
        return b = document.createElement("img"), "" == this._crossOrigin || this._isLocal(a) || (b.crossOrigin = this._crossOrigin), b;

      case createjs.LoadQueue.SOUND:
        return b = document.createElement("audio"), b.autoplay = !1, b;

      case createjs.LoadQueue.JSON:
      case createjs.LoadQueue.JSONP:
      case createjs.LoadQueue.JAVASCRIPT:
      case createjs.LoadQueue.MANIFEST:
        return b = document.createElement("script"), b.type = "text/javascript", b;

      case createjs.LoadQueue.CSS:
        return b = this.useXHR ? document.createElement("style") : document.createElement("link"), b.rel = "stylesheet", b.type = "text/css", b;

      case createjs.LoadQueue.SVG:
        return this.useXHR ? b = document.createElement("svg") : (b = document.createElement("object"), b.type = "image/svg+xml"), b;
    }

    return null;
  }, b._getTypeByExtension = function (a) {
    if (null == a) return createjs.LoadQueue.TEXT;

    switch (a.toLowerCase()) {
      case "jpeg":
      case "jpg":
      case "gif":
      case "png":
      case "webp":
      case "bmp":
        return createjs.LoadQueue.IMAGE;

      case "ogg":
      case "mp3":
      case "wav":
        return createjs.LoadQueue.SOUND;

      case "json":
        return createjs.LoadQueue.JSON;

      case "xml":
        return createjs.LoadQueue.XML;

      case "css":
        return createjs.LoadQueue.CSS;

      case "js":
        return createjs.LoadQueue.JAVASCRIPT;

      case "svg":
        return createjs.LoadQueue.SVG;

      default:
        return createjs.LoadQueue.TEXT;
    }
  }, b._sendFileProgress = function (a, b) {
    if (this._isCanceled()) return this._cleanUp(), void 0;

    if (this.hasEventListener("fileprogress")) {
      var c = new createjs.Event("fileprogress");
      c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c);
    }
  }, b._sendFileComplete = function (a, b) {
    if (!this._isCanceled()) {
      var c = new createjs.Event("fileload");
      c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c);
    }
  }, b._sendFileStart = function (a) {
    var b = new createjs.Event("filestart");
    b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b);
  }, b.toString = function () {
    return "[PreloadJS LoadQueue]";
  }, createjs.LoadQueue = a;

  var d = function d() {};

  d.init = function () {
    var a = navigator.userAgent;
    d.isFirefox = a.indexOf("Firefox") > -1, d.isOpera = null != window.opera, d.isChrome = a.indexOf("Chrome") > -1, d.isIOS = a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1;
  }, d.init(), createjs.LoadQueue.BrowserDetect = d;
}(), function () {
  "use strict";

  var a = function a(_a3) {
    this.init(_a3);
  },
      b = a.prototype = new createjs.AbstractLoader();

  b._loadTimeout = null, b._tagCompleteProxy = null, b._isAudio = !1, b._tag = null, b._jsonResult = null, b.init = function (a) {
    this._item = a, this._tag = a.tag, this._isAudio = window.HTMLAudioElement && a.tag instanceof window.HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this);
  }, b.getResult = function () {
    return this._item.type == createjs.LoadQueue.JSONP || this._item.type == createjs.LoadQueue.MANIFEST ? this._jsonResult : this._tag;
  }, b.cancel = function () {
    this.canceled = !0, this._clean();
  }, b.load = function () {
    var a = this._item,
        b = this._tag;
    clearTimeout(this._loadTimeout);
    var c = createjs.LoadQueue.LOAD_TIMEOUT;
    0 == c && (c = createjs.LoadQueue.loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), c), this._isAudio && (b.src = null, b.preload = "auto"), b.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (b.onstalled = createjs.proxy(this._handleStalled, this), b.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (b.onload = createjs.proxy(this._handleLoad, this), b.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
    var d = this.buildPath(a.src, a.values);

    switch (a.type) {
      case createjs.LoadQueue.CSS:
        b.href = d;
        break;

      case createjs.LoadQueue.SVG:
        b.data = d;
        break;

      default:
        b.src = d;
    }

    if (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST) {
      if (null == a.callback) throw new Error("callback is required for loading JSONP requests.");
      if (null != window[a.callback]) throw new Error('JSONP callback "' + a.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
      window[a.callback] = createjs.proxy(this._handleJSONPLoad, this);
    }

    (a.type == createjs.LoadQueue.SVG || a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.JSON || a.type == createjs.LoadQueue.MANIFEST || a.type == createjs.LoadQueue.JAVASCRIPT || a.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = b.style.visibility, b.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(b)), null != b.load && b.load();
  }, b._handleJSONPLoad = function (a) {
    this._jsonResult = a;
  }, b._handleTimeout = function () {
    this._clean();

    var a = new createjs.Event("error");
    a.text = "PRELOAD_TIMEOUT", this._sendError(a);
  }, b._handleStalled = function () {}, b._handleError = function () {
    this._clean();

    var a = new createjs.Event("error");

    this._sendError(a);
  }, b._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);
    var a = this.getItem().tag;
    ("loaded" == a.readyState || "complete" == a.readyState) && this._handleLoad();
  }, b._handleLoad = function () {
    if (!this._isCanceled()) {
      var a = this.getItem(),
          b = a.tag;

      if (!(this.loaded || this._isAudio && 4 !== b.readyState)) {
        switch (this.loaded = !0, a.type) {
          case createjs.LoadQueue.SVG:
          case createjs.LoadQueue.JSON:
          case createjs.LoadQueue.JSONP:
          case createjs.LoadQueue.MANIFEST:
          case createjs.LoadQueue.CSS:
            b.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(b);
        }

        this._clean(), this._sendComplete();
      }
    }
  }, b._clean = function () {
    clearTimeout(this._loadTimeout);
    var a = this.getItem(),
        b = a.tag;
    null != b && (b.onload = null, b.removeEventListener && b.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), b.onstalled = null, b.onprogress = null, b.onerror = null, null != b.parentNode && a.type == createjs.LoadQueue.SVG && a.type == createjs.LoadQueue.JSON && a.type == createjs.LoadQueue.MANIFEST && a.type == createjs.LoadQueue.CSS && a.type == createjs.LoadQueue.JSONP && b.parentNode.removeChild(b));
    var a = this.getItem();
    (a.type == createjs.LoadQueue.JSONP || a.type == createjs.LoadQueue.MANIFEST) && (window[a.callback] = null);
  }, b.toString = function () {
    return "[PreloadJS TagLoader]";
  }, createjs.TagLoader = a;
}(), function () {
  "use strict";

  var a = function a(_a4, b) {
    this.init(_a4, b);
  },
      b = a.prototype = new createjs.AbstractLoader();

  b._request = null, b._loadTimeout = null, b._xhrLevel = 1, b._response = null, b._rawResponse = null, b._crossOrigin = "", b.init = function (a, b) {
    this._item = a, this._crossOrigin = b, !this._createXHR(a);
  }, b.getResult = function (a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, b.cancel = function () {
    this.canceled = !0, this._clean(), this._request.abort();
  }, b.load = function () {
    if (null == this._request) return this._handleError(), void 0;

    if (this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel) {
      var a = createjs.LoadQueue.LOAD_TIMEOUT;
      if (0 == a) a = createjs.LoadQueue.loadTimeout;else try {
        console.warn("LoadQueue.LOAD_TIMEOUT has been deprecated in favor of LoadQueue.loadTimeout");
      } catch (b) {}
      this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), a);
    }

    this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);

    try {
      this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send();
    } catch (c) {
      var d = new createjs.Event("error");
      d.error = c, this._sendError(d);
    }
  }, b.getAllResponseHeaders = function () {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, b.getResponseHeader = function (a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, b._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.Event("progress");
      b.loaded = a.loaded, b.total = a.total, this._sendProgress(b);
    }
  }, b._handleLoadStart = function () {
    clearTimeout(this._loadTimeout), this._sendLoadStart();
  }, b._handleAbort = function () {
    this._clean();

    var a = new createjs.Event("error");
    a.text = "XHR_ABORTED", this._sendError(a);
  }, b._handleError = function () {
    this._clean();

    var a = new createjs.Event("error");

    this._sendError(a);
  }, b._handleReadyStateChange = function () {
    4 == this._request.readyState && this._handleLoad();
  }, b._handleLoad = function () {
    if (!this.loaded) {
      if (this.loaded = !0, !this._checkError()) return this._handleError(), void 0;
      this._response = this._getResponse(), this._clean();

      var a = this._generateTag();

      a && this._sendComplete();
    }
  }, b._handleTimeout = function (a) {
    this._clean();

    var b = new createjs.Event("error");
    b.text = "PRELOAD_TIMEOUT", this._sendError(a);
  }, b._checkError = function () {
    var a = parseInt(this._request.status);

    switch (a) {
      case 404:
      case 0:
        return !1;
    }

    return !0;
  }, b._getResponse = function () {
    if (null != this._response) return this._response;
    if (null != this._request.response) return this._request.response;

    try {
      if (null != this._request.responseText) return this._request.responseText;
    } catch (a) {}

    try {
      if (null != this._request.responseXML) return this._request.responseXML;
    } catch (a) {}

    return null;
  }, b._createXHR = function (a) {
    var b = this._isCrossDomain(a),
        c = null;

    if (b && window.XDomainRequest) c = new XDomainRequest();else if (window.XMLHttpRequest) c = new XMLHttpRequest();else try {
      c = new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (d) {
      try {
        c = new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (d) {
        try {
          c = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (d) {
          return !1;
        }
      }
    }
    createjs.LoadQueue.isText(a.type) && c.overrideMimeType && c.overrideMimeType("text/plain; charset=utf-8"), this._xhrLevel = "string" == typeof c.responseType ? 2 : 1;
    var e = null;
    return e = a.method == createjs.LoadQueue.GET ? this.buildPath(a.src, a.values) : a.src, c.open(a.method || createjs.LoadQueue.GET, e, !0), b && c instanceof XMLHttpRequest && 1 == this._xhrLevel && c.setRequestHeader("Origin", location.origin), a.values && a.method == createjs.LoadQueue.POST && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(a.type) && (c.responseType = "arraybuffer"), this._request = c, !0;
  }, b._clean = function () {
    clearTimeout(this._loadTimeout);
    var a = this._request;
    a.onloadstart = null, a.onprogress = null, a.onabort = null, a.onerror = null, a.onload = null, a.ontimeout = null, a.onloadend = null, a.onreadystatechange = null;
  }, b._generateTag = function () {
    var a = this._item.type,
        b = this._item.tag;

    switch (a) {
      case createjs.LoadQueue.IMAGE:
        return b.onload = createjs.proxy(this._handleTagReady, this), "" != this._crossOrigin && (b.crossOrigin = "Anonymous"), b.src = this.buildPath(this._item.src, this._item.values), this._rawResponse = this._response, this._response = b, !1;

      case createjs.LoadQueue.JAVASCRIPT:
        return b = document.createElement("script"), b.text = this._response, this._rawResponse = this._response, this._response = b, !0;

      case createjs.LoadQueue.CSS:
        var c = document.getElementsByTagName("head")[0];
        if (c.appendChild(b), b.styleSheet) b.styleSheet.cssText = this._response;else {
          var d = document.createTextNode(this._response);
          b.appendChild(d);
        }
        return this._rawResponse = this._response, this._response = b, !0;

      case createjs.LoadQueue.XML:
        var e = this._parseXML(this._response, "text/xml");

        return this._rawResponse = this._response, this._response = e, !0;

      case createjs.LoadQueue.SVG:
        var e = this._parseXML(this._response, "image/svg+xml");

        return this._rawResponse = this._response, null != e.documentElement ? (b.appendChild(e.documentElement), this._response = b) : this._response = e, !0;

      case createjs.LoadQueue.JSON:
      case createjs.LoadQueue.MANIFEST:
        var f = {};

        try {
          f = JSON.parse(this._response);
        } catch (g) {
          f = g;
        }

        return this._rawResponse = this._response, this._response = f, !0;
    }

    return !0;
  }, b._parseXML = function (a, b) {
    var c = null;

    try {
      if (window.DOMParser) {
        var d = new DOMParser();
        c = d.parseFromString(a, b);
      } else c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a);
    } catch (e) {}

    return c;
  }, b._handleTagReady = function () {
    this._sendComplete();
  }, b.toString = function () {
    return "[PreloadJS XHRLoader]";
  }, createjs.XHRLoader = a;
}(), "object" != (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
  "use strict";

  function f(a) {
    return 10 > a ? "0" + a : a;
  }

  function quote(a) {
    return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
      var b = meta[a];
      return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }

  function str(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = gap,
        i = b[a];

    switch (i && "object" == _typeof(i) && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), _typeof(i)) {
      case "string":
        return quote(i);

      case "number":
        return isFinite(i) ? String(i) : "null";

      case "boolean":
      case "null":
        return String(i);

      case "object":
        if (!i) return "null";

        if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
          for (f = i.length, c = 0; f > c; c += 1) {
            g[c] = str(c, i) || "null";
          }

          return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e;
        }

        if (rep && "object" == _typeof(rep)) for (f = rep.length, c = 0; f > c; c += 1) {
          "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
        } else for (d in i) {
          Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
        }
        return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e;
    }
  }

  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf();
  });
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  },
      rep;
  "function" != typeof JSON.stringify && (JSON.stringify = function (a, b, c) {
    var d;
    if (gap = "", indent = "", "number" == typeof c) for (d = 0; c > d; d += 1) {
      indent += " ";
    } else "string" == typeof c && (indent = c);
    if (rep = b, b && "function" != typeof b && ("object" != _typeof(b) || "number" != typeof b.length)) throw new Error("JSON.stringify");
    return str("", {
      "": a
    });
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(a, b) {
      var c,
          d,
          e = a[b];
      if (e && "object" == _typeof(e)) for (c in e) {
        Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
      }
      return reviver.call(a, b, e);
    }

    var j;
    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("JSON.parse");
  });
}();
module.exports = window.createjs;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /**
   * @constructor
   */
  function UrlTemplate() {}
  /**
   * @private
   * @param {string} str
   * @return {string}
   */


  UrlTemplate.prototype.encodeReserved = function (str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
      if (!/%[0-9A-Fa-f]/.test(part)) {
        part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']');
      }

      return part;
    }).join('');
  };
  /**
   * @private
   * @param {string} str
   * @return {string}
   */


  UrlTemplate.prototype.encodeUnreserved = function (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };
  /**
   * @private
   * @param {string} operator
   * @param {string} value
   * @param {string} key
   * @return {string}
   */


  UrlTemplate.prototype.encodeValue = function (operator, value, key) {
    value = operator === '+' || operator === '#' ? this.encodeReserved(value) : this.encodeUnreserved(value);

    if (key) {
      return this.encodeUnreserved(key) + '=' + value;
    } else {
      return value;
    }
  };
  /**
   * @private
   * @param {*} value
   * @return {boolean}
   */


  UrlTemplate.prototype.isDefined = function (value) {
    return value !== undefined && value !== null;
  };
  /**
   * @private
   * @param {string}
   * @return {boolean}
   */


  UrlTemplate.prototype.isKeyOperator = function (operator) {
    return operator === ';' || operator === '&' || operator === '?';
  };
  /**
   * @private
   * @param {Object} context
   * @param {string} operator
   * @param {string} key
   * @param {string} modifier
   */


  UrlTemplate.prototype.getValues = function (context, operator, key, modifier) {
    var value = context[key],
        result = [];

    if (this.isDefined(value) && value !== '') {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        value = value.toString();

        if (modifier && modifier !== '*') {
          value = value.substring(0, parseInt(modifier, 10));
        }

        result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
      } else {
        if (modifier === '*') {
          if (Array.isArray(value)) {
            value.filter(this.isDefined).forEach(function (value) {
              result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
            }, this);
          } else {
            Object.keys(value).forEach(function (k) {
              if (this.isDefined(value[k])) {
                result.push(this.encodeValue(operator, value[k], k));
              }
            }, this);
          }
        } else {
          var tmp = [];

          if (Array.isArray(value)) {
            value.filter(this.isDefined).forEach(function (value) {
              tmp.push(this.encodeValue(operator, value));
            }, this);
          } else {
            Object.keys(value).forEach(function (k) {
              if (this.isDefined(value[k])) {
                tmp.push(this.encodeUnreserved(k));
                tmp.push(this.encodeValue(operator, value[k].toString()));
              }
            }, this);
          }

          if (this.isKeyOperator(operator)) {
            result.push(this.encodeUnreserved(key) + '=' + tmp.join(','));
          } else if (tmp.length !== 0) {
            result.push(tmp.join(','));
          }
        }
      }
    } else {
      if (operator === ';') {
        if (this.isDefined(value)) {
          result.push(this.encodeUnreserved(key));
        }
      } else if (value === '' && (operator === '&' || operator === '?')) {
        result.push(this.encodeUnreserved(key) + '=');
      } else if (value === '') {
        result.push('');
      }
    }

    return result;
  };
  /**
   * @param {string} template
   * @return {function(Object):string}
   */


  UrlTemplate.prototype.parse = function (template) {
    var that = this;
    var operators = ['+', '#', '.', '/', ';', '?', '&'];
    return {
      expand: function expand(context) {
        return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
          if (expression) {
            var operator = null,
                values = [];

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0);
              expression = expression.substr(1);
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
              values.push.apply(values, that.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });

            if (operator && operator !== '+') {
              var separator = ',';

              if (operator === '?') {
                separator = '&';
              } else if (operator !== '#') {
                separator = operator;
              }

              return (values.length !== 0 ? operator : '') + values.join(separator);
            } else {
              return values.join(',');
            }
          } else {
            return that.encodeReserved(literal);
          }
        });
      }
    };
  };

  return new UrlTemplate();
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/underscore/underscore.js
var underscore = __webpack_require__(0);
var underscore_default = /*#__PURE__*/__webpack_require__.n(underscore);

// EXTERNAL MODULE: ./node_modules/backbone/backbone.js
var backbone = __webpack_require__(1);
var backbone_default = /*#__PURE__*/__webpack_require__.n(backbone);

// CONCATENATED MODULE: ./src/core/log.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _log = {
  debug: function debug() {
    return function () {};
  },
  warn: function warn() {
    return console.log;
  }
};

var Log =
/*#__PURE__*/
function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  _createClass(Log, null, [{
    key: "setup",
    value: function setup(writers) {
      _log = Object.assign(_log, writers);
    }
  }, {
    key: "debug",
    value: function debug(name) {
      return _log.debug(name);
    }
  }, {
    key: "warn",
    value: function warn(name) {
      return _log.warn(name);
    }
  }]);

  return Log;
}();


// EXTERNAL MODULE: ./node_modules/preload-js/index.js
var preload_js = __webpack_require__(3);
var preload_js_default = /*#__PURE__*/__webpack_require__.n(preload_js);

// CONCATENATED MODULE: ./src/core/loader.js
function loader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function loader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function loader_createClass(Constructor, protoProps, staticProps) { if (protoProps) loader_defineProperties(Constructor.prototype, protoProps); if (staticProps) loader_defineProperties(Constructor, staticProps); return Constructor; }





var _category = "loader";

var loader_Loader =
/*#__PURE__*/
function () {
  function Loader() {
    loader_classCallCheck(this, Loader);

    underscore_default.a.extend(this, backbone_default.a.Events);

    this.caches = {};
    this.promiseMap = {};
    this.$loadingResolve = null;
    this.queue = new preload_js_default.a.LoadQueue();
    this.preloads = [];
    var that = this;
    this.$isCompleted = false;
    this.queue.on('complete', function (event) {
      Log.debug(_category)("load complete ", event);
      that.$isCompleted = true;

      if (that.$_preloadResolve) {
        that.$_preloadResolve(event);
        that.$_preloadResolve = null;
      }

      that.preloads = [];
      that.trigger('loader:complete', event);
    });
    this.queue.on('fileload', function (event) {
      var id = event.item.id;
      that.caches[id] = event.result;

      if (that.promiseMap[id]) {
        var resolve = that.promiseMap[id];
        resolve(event.result);
        that.promiseMap[id] = null;

        if (that.$loadingResolve) {
          that.$loadingResolve(event.result);
          that.$loadingResolve = null;
        }
      }
    });
  }

  loader_createClass(Loader, [{
    key: "has",
    value: function has(name) {
      if (this.caches[name]) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      if (this.caches[name]) {
        return this.caches[name];
      } else {
        return "";
      }
    }
  }, {
    key: "load",
    value: function load(name, url) {
      var that = this;

      if (this.promiseMap[name]) {
        //  ローディング中
        var _promise = new Promise(function (resolve) {
          that.$loadingResolve = resolve;
        });

        return _promise;
      }

      var promise = new Promise(function (resolve) {
        that.promiseMap[name] = resolve;
      });
      this.queue.loadFile({
        id: name,
        src: url
      });
      return promise;
    }
  }, {
    key: "add",
    value: function add(name, url) {
      this.preloads.push({
        id: name,
        src: url
      });
    }
  }, {
    key: "size",
    value: function size() {
      return this.preloads.length;
    }
  }, {
    key: "preload",
    value: function preload() {
      var that = this;
      var promise = new Promise(function (resolve) {
        that.$_preloadResolve = resolve;
      });
      this.queue.loadManifest(this.preloads, true);
      return promise;
    }
  }]);

  return Loader;
}();


// CONCATENATED MODULE: ./src/core/router.js
function router_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function router_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function router_createClass(Constructor, protoProps, staticProps) { if (protoProps) router_defineProperties(Constructor.prototype, protoProps); if (staticProps) router_defineProperties(Constructor, staticProps); return Constructor; }





var router_category = "router";

var router_Router =
/*#__PURE__*/
function () {
  /**
   * Vue RouterでHTMLをダイナミックに読みこんで利用出来るようにしたラッパークラス
   *
   * @class VueSPA.Router
   * @constructor
   * @param options
   *
   * @example
   *      let router = new VueSPA.Router({
   *          routes : [
   *              {
   *                  name : "add",
   *                  path : "/add",
   *                  controller : FooController,
   *                  templateUrl : "tmpl/add.html"
   *              },
   *              {
   *
   *              }
   *          ]
   *      });
   *
   *      let mainController = new VueSPA.Controller({
   *              router : router
   *      }).main();
   */
  function Router(options) {
    router_classCallCheck(this, Router);

    underscore_default.a.extend(this, backbone_default.a.Events);

    this._init = false;
    this._options = options;
    this._preload = options.preload || false;
    this._lock = false;

    if (!underscore_default.a.isUndefined(options.base)) {
      this._base = options.base;
    }
  }

  router_createClass(Router, [{
    key: "init",
    value: function init($parentController) {
      var _this = this;

      if (this._init) {
        return;
      }

      var options = this._options;
      this.$$routes = [];
      var that = this;
      this.$loader = new loader_Loader();

      if (options.routes) {
        Log.debug(router_category)("routes......", this);

        var _loop = function _loop(idx) {
          var r = options.routes[idx];
          var item = {
            path: r.path,
            name: r.name
          };

          if (r.controller) {
            var controller = new r.controller();
            controller.$parent = $parentController;
            controller.$root = $parentController;

            if (controller.routes) {
              var childRoutes = controller.routes();
              Log.debug(router_category)("child routes ", childRoutes);
              childRoutes.forEach(function (child) {
                Log.debug(router_category)("child route item ", child);
              });
            }

            controller.$routeName = r.name;
            controller.$_createChildren(that, item);
            Log.debug(router_category)("route item is ", item);
            Log.debug(router_category)("==== $component invoked start ======", controller);
            item.component = controller.$component();
            Log.debug(router_category)("==== $component invoked end ======", controller);
          }

          if (!underscore_default.a.isUndefined(r.templateUrl)) {
            if (_this._preload || r.preload) {
              _this.$loader.add(r.name, r.templateUrl);
            }

            item.beforeEnter = function (to, from, next) {
              that.beforeEnter(item.component, r.name, r.templateUrl, to, from, next);
            };
          }

          _this.$$routes.push(item);
        };

        for (var idx in options.routes) {
          _loop(idx);
        }
      }

      this._init = true;
    }
    /**
     * HTMLのローダーインスタンスを取得する
     *
     * @method getLoader
     * @returns {Loader}
     */

  }, {
    key: "getLoader",
    value: function getLoader() {
      return this.$loader;
    }
  }, {
    key: "getVueRouter",
    value: function getVueRouter($parentController) {
      Log.debug(router_category)("getVueRouter()", this);
      var that = this;
      this.init($parentController);
      Log.debug(router_category)("routes is ", this.$$routes);
      var opts = {
        routes: this.$$routes
      };

      if (this._base) {
        opts.base = this._base;
      }

      Log.debug(router_category)("getVueRouter()", opts);
      this.$$router = new VueRouter(opts);
      return this.$$router;
    }
  }, {
    key: "start",
    value: function start() {
      Log.debug(router_category)("start ", this);
      var that = this;
      var p = this.$loader.preload();
      this.$$router.beforeEach(function (to, from, next) {
        Log.debug(router_category)("router locked ? ", that._lock);

        if (that._lock && that.$_lock_promise) {
          Log.debug(router_category)("router locked !! ", that._lock);
          that.$_lock_promise.then(function () {
            Log.debug(router_category)("router lock release !! ", that._lock, to, next);
            next();
          });
        } else {
          next();
        }
      });
    }
    /**
     *  ルートしないようにロックする
     *
     *  @method lock
     *  @protected
     */

  }, {
    key: "lock",
    value: function lock() {
      if (this._lock) {
        return;
      }

      this._lock = true;
      var that = this;
      var ctrl = {};
      this.$_lock_promise = new Promise(function (resolve) {
        ctrl.release = function () {
          resolve();
          that._lock = false;
        };
      });
      return ctrl;
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter(component, name, url, to, from, next) {
      Log.debug(router_category)("before enter ", component, to, from);
      var that = this;

      if (component.template) {
        next();
        return;
      }

      if (this.$loader.has(name)) {
        component.template = this.$loader.get(name);
        next();
        return;
      } else {
        that.trigger('loader:start', that.$loader);
        Log.debug(router_category)("START : load template(" + name + ") from ", url);
        var p = this.$loader.load(name, url);
        p.then(function (html) {
          component.template = html;
          that.trigger('loader:end', that.$loader);
          Log.debug(router_category)("END: load template(" + name + ") from ", url, html);
          next();
        });
      }
    }
  }]);

  return Router;
}();


;
// CONCATENATED MODULE: ./src/core/service.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function service_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function service_createClass(Constructor, protoProps, staticProps) { if (protoProps) service_defineProperties(Constructor.prototype, protoProps); if (staticProps) service_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Services =
/*#__PURE__*/
function (_Backbone$Model) {
  _inherits(Services, _Backbone$Model);

  function Services() {
    service_classCallCheck(this, Services);

    return _possibleConstructorReturn(this, _getPrototypeOf(Services).apply(this, arguments));
  }

  service_createClass(Services, [{
    key: "initialized",
    value: function initialized(attrs, opts) {}
  }]);

  return Services;
}(backbone_default.a.Model);

;

var _services = new Services();
/**
 *  サービスクラスを作成する為の基底クラス
 *
 *  @class VueSPA.Service
 */


var service_Service =
/*#__PURE__*/
function () {
  service_createClass(Service, null, [{
    key: "defaultContext",
    value: function defaultContext() {
      return _services;
    }
    /**
     * サービスの名称を取得する
     *
     * @static
     * @method name
     * @returns {string}
     */

  }, {
    key: "name",
    value: function name() {
      return "Service";
    }
    /**
     * @class VueSPA.Service
     * @constructor
     */

  }]);

  function Service() {
    service_classCallCheck(this, Service);

    underscore_default.a.extend(this, backbone_default.a.Events);
  } //  controllerからよばれる初期化メソッド


  service_createClass(Service, [{
    key: "$_init",
    value: function $_init() {}
  }, {
    key: "$createModel",
    value: function $createModel(opts) {
      return new backbone_default.a.Model(opts);
    }
  }]);

  return Service;
}();


// CONCATENATED MODULE: ./src/core/controller.js
function controller_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { controller_typeof = function _typeof(obj) { return typeof obj; }; } else { controller_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return controller_typeof(obj); }

function controller_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function controller_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function controller_createClass(Constructor, protoProps, staticProps) { if (protoProps) controller_defineProperties(Constructor.prototype, protoProps); if (staticProps) controller_defineProperties(Constructor, staticProps); return Constructor; }






var controller_category = "controller";
/**
 *   @module VueSPA
 *   @class VueSPA.Controller
 *
 *   @property $vue
 *   @type {object} Vueオブジェクト
 */

var controller_Controller =
/*#__PURE__*/
function () {
  /**
   *
   * @class VueSPA.Controller
   * @constructor
   *
   * @param {object} vue Vue定義
   *
   * @example
   *
   *      export default class FooController extends VueSPA.Controller {
   *          data(){
   *              return {
   *                  foo : 1
   *              }
   *          }
   *          methods(){
   *              return {
   *                  method1 : function(){
   *                      // this オブジェクトはこのControllerオブジェクト
   *                  }
   *              }
   *          },
   *          onEnter(){
   *              //  画面遷移された時の処理
   *          },
   *          onExit(){
   *              //  画面から抜けた時の処理
   *          }
   *      }
   */
  function Controller(vue) {
    controller_classCallCheck(this, Controller);

    underscore_default.a.extend(this, backbone_default.a.Events);

    if (!underscore_default.a.isUndefined(vue)) {
      if (!underscore_default.a.isUndefined(vue.services)) {
        var context = service_Service.defaultContext();
        Log.debug(controller_category)("services context ", context);

        for (var name in vue.services) {
          var s = vue.services[name];
          Log.debug(controller_category)("set service [" + name + "]", s, this);
          s.$context = context;

          if (!s._init) {
            s.$_init();
          }

          if (!underscore_default.a.isUndefined(s.constructor.name)) {
            if (typeof s.constructor.name == 'function') {
              var _name = s.constructor.name();

              Log.debug(controller_category)("found static name() function [" + _name + "]");
              context.set(_name, s);
            } else if (typeof s.constructor.name == 'string') {
              var _name2 = s.constructor.name;
              Log.debug(controller_category)("found static name property [" + _name2 + "]");
              context.set(_name2, s);
            }
          } else {
            Log.warn(controller_category)("not found static name() function");
            context.set(name, s);
            this[name] = s;
          }

          this.$services = context;
        }
      }
    } else {
      vue = {};
    }

    this._vue = vue;
    this._init = false;
    this._navigate = false; //  子のコントローラ

    this.$children = [];
  }

  controller_createClass(Controller, [{
    key: "$_init",
    value: function $_init() {
      if (this._navigate) {
        this.$vue.$router.push(this._navigate);
        this._navigate = false;
      }

      if (!this._init) {
        this.onInit(this.$vue);
        this._init = true;
      }
    }
  }, {
    key: "$_destroy",
    value: function $_destroy() {
      this._init = false;
      this.$isEnter = false;
      this.stopListening();
    }
  }, {
    key: "$_onRouteBefore",
    value: function $_onRouteBefore(to, from, next) {
      this.$isEnter = false;

      if (!underscore_default.a.isUndefined(this.onAuth)) {
        if (typeof this.onAuth == 'function') {
          return this.onAuth(to, from);
        }
      }
    } //  Vue Componentが作成されて、かつ、RouterでのEnterイベントの後

  }, {
    key: "$_onRouteEnter",
    value: function $_onRouteEnter(vue, to, from, next) {
      this.$isEnter = true;
      Log.debug(controller_category)("on route enter ", this, to, from);

      if (this.$parent) {
        Log.debug(controller_category)("on route enter : child enter", this.$parent);
        this.$parent.$_onChildEnter(to, from, this);
      } else {
        Log.debug(controller_category)("on route enter : parent is NULL");
      }

      var ret = this.onEnter(vue, to.params, to, from);

      if (this.$root) {
        if (this.$routeName == to.name) {
          this.$root.trigger('route:enter', to, from, this);
        }
      }

      if (underscore_default.a.isUndefined(ret) || ret === true) {
        vue.$forceUpdate();
      }
    }
  }, {
    key: "$_onRouteLeave",
    value: function $_onRouteLeave(vue, to, from, next) {
      if (this.$isEnter) {
        Log.debug(controller_category)("on exit", this);
        var ret = this.onExit(vue, to, from);

        if (underscore_default.a.isUndefined(ret)) {
          next();
        }

        if (typeof ret == 'boolean' && ret == false) {
          next(false);
        } else {
          next();
        }

        if (this.$parent) {
          this.$parent.$_onChildExit(to, from, this);
        }

        this.$isEnter = false;
      } else {
        Log.debug(controller_category)("not enter controller, and exit ", this);
      }
    }
  }, {
    key: "$_onChildEnter",
    value: function $_onChildEnter(to, from, child) {
      this.onChildEnter(to, from, child);
    }
  }, {
    key: "$_onChildExit",
    value: function $_onChildExit(to, from, child) {
      this.onChildExit(to, from, child);
    }
  }, {
    key: "$_createChildren",
    value: function $_createChildren(router, routeItem) {
      var _this = this;

      var that = this;

      if (this.routes) {
        var childRoutes = this.routes();
        routeItem.children = [];
        Log.debug(controller_category)("child routes ", childRoutes);
        childRoutes.forEach(function (child) {
          Log.debug(controller_category)("child route item ", child, routeItem);
          var item = {};
          item.path = child.path;
          item.name = routeItem.name + "." + child.name;

          if (child.controller) {
            var controller = new child.controller();
            controller.$routeName = item.name;
            controller.$parent = that;
            controller.$root = that.$root;
            that.$children.push(controller);
            var $component = controller.$component();
            $component.$controller = controller;
            item.component = $component;

            if (!underscore_default.a.isUndefined(child.templateUrl)) {
              item.component.template = "";

              if (router._preload || child.preload) {
                _this.$loader.add(item.name, child.templateUrl);
              }

              item.beforeEnter = function (to, from, next) {
                router.beforeEnter(item.component, item.name, child.templateUrl, to, from, next);
              };
            }

            controller.$_createChildren(router, item);
            Log.debug(controller_category)("component is ", $component);
          }

          routeItem.children.push(item);
        });
      }
    }
    /**
     * コントローラインスタンスが作成された時の初期化メソッド
     *
     * @method init
     */

  }, {
    key: "init",
    value: function init() {}
    /**
     *
     * Vueでのdata定義
     *
     * @method data
     * @example
     *
     *      data(){
     *          return {
     *              sid : 0,
     *              list: []
     *          }
     *      }
     *      // アクセスする際のコード例
     *      this.$vue.sid = 3;
     *
     * @returns {{}}
     */

  }, {
    key: "data",
    value: function data() {
      return {};
    }
  }, {
    key: "methods",
    value: function methods() {
      return {};
    }
  }, {
    key: "components",
    value: function components() {
      return {};
    } //  サービス

  }, {
    key: "services",
    value: function services() {
      return {};
    }
  }, {
    key: "watch",
    value: function watch() {}
  }, {
    key: "service",
    value: function service(name) {
      if (!underscore_default.a.isUndefined(name.constructor)) {
        if (!underscore_default.a.isUndefined(name.name)) {
          if (typeof name.name == 'function') {
            name = name.name();
          } else if (typeof name.name == 'string') {
            name = name.name;
          }

          Log.debug(controller_category)("service name - " + name);
        } else {
          Log.debug(controller_category)("service name - ", name);
        }
      } else {
        Log.debug(controller_category)("service " + controller_typeof(name));
      }

      var services = VueSPA.Service.defaultContext();

      if (!services) {
        return;
      }

      if (!services.has(name)) {
        return false;
      }

      var s = services.get(name);

      if (!s._init) {
        s.init();
      }

      return s;
    }
    /**
     * 指定した関数をthisにbindする
     *
     * _.bind(method,this)
     *
     * @method bindMethod
     * @param {function} method
     * @returns {function} bindされた関数
     */

  }, {
    key: "bindMethod",
    value: function bindMethod(method) {
      var func = underscore_default.a.bind(method, this);

      func.$bindController = true;
      return func;
    }
    /**
     * Vue.$props.$refs から値を取得する
     *
     * @example
     *
     *      <my-component ref="mycomp"></my-component>
     *      let myComp = this.refs("mycomp");
     *
     * @method refs
     * @param {string} name refで指定されたVue Componentを取得する
     * @returns {null|any}
     */

  }, {
    key: "refs",
    value: function refs(name) {
      if (!underscore_default.a.isUndefined(this.$vue.$refs[name])) {
        return this.$vue.$refs[name];
      } else {
        return null;
      }
    }
    /**
     * vue.beforeCreate が実行されたタイミングでのメソッド
     *
     * @method onInit
     * @param {object} vue Vueインスタンス
     */

  }, {
    key: "onInit",
    value: function onInit(vue) {}
    /**
     * 画面遷移でされた時に実行されるメソッド
     *
     * vue.beforeRouteEnter, vue.beforeRouteUpdate 時に実行されるメソッド
     *
     * @method onEnter
     *
     * @param {object} vue Vueインスタンス
     * @param {object} params Route時のPathパラメータ
     * @param {object} to Vue Routerのtoルート
     * @param {object} from Vue Router のfromルート
     * @returns {boolean}
     */

  }, {
    key: "onEnter",
    value: function onEnter(vue, params, to, from) {
      return true;
    }
    /**
     * コントローラを抜けた（画面遷移）時に実行されるメソッド
     *
     * vue.beforeRouteLeave 時に実行されるメソッド
     *
     * @method onExit
     * @param vue
     * @param to
     * @param from
     */

  }, {
    key: "onExit",
    value: function onExit(vue, to, from) {}
    /**
     * 子ルートが遷移した時のよばれるメソッド
     *
     * @method onChildEnter
     * @param {object} to
     * @param {object} from
     * @param {object} child 子VueSPA.Controllerのインスタンス
     */

  }, {
    key: "onChildEnter",
    value: function onChildEnter(to, from, child) {}
    /**
     *  子ルートから出たとき
     *
     *
     * @method onChildExit
     * @param to
     * @param from
     * @param child
     */

  }, {
    key: "onChildExit",
    value: function onChildExit(to, from, child) {}
    /**
     * vue-router.push のエイリアスメソッド
     *
     * @method navigate
     * @example
     *      this.navigate(-1); // history.back相当
     *      this.navigate(1);  // history.forward相当
     *      this.navigate("^"); // 親ルートに遷移する
     *      this.navigate(".child"); // 自分から見た子(child)ルートに遷移する
     *      this.navigate("path"); // 完全なルート名を指定し遷移する
     *      this.navigate("^.child2"); // 自分から見た親から見た子（child2)、つまり兄弟ルートに遷移する
     *
     *      //  パラメータを指定する場合
     *      this.navigate("^.list",{
     *          page: 2,
     *          limit : 10
     *      });
     *
     * @param {string|number} name パス名もしくは、数字（戻る、進む数）を指定する
     * @param {object} params Pathパラメータの指定が必要な場合に指定する
     */

  }, {
    key: "navigate",
    value: function navigate(name, params) {
      if (typeof name == "number") {
        this.$router.go(name);
        return;
      }

      var ch = name.charAt(0);

      if (name == ".") {
        name = this.$routeName;
      } else if (ch == "^") {
        if (this.$parent && this.$parent.$routeName) {
          name = this.$parent.$routeName + name.substr(1);
        } else {
          var ch2 = name.charAt(1);

          if (ch2 == ".") {
            name = name.substr(2);
          } else {
            name = name.substr(1);
          }
        }
      } else if (ch == ".") {
        name = this.$routeName + name;
      }

      if (this.$router) {
        Log.debug(controller_category)("navigate ", name, params);
        this.$router.push({
          name: name,
          params: params
        });
      } else {
        this._navigate = {
          name: name,
          params: params
        };
        Log.debug(controller_category)("navigate stack ", this._navigate);
      }
    }
  }, {
    key: "digest",
    value: function digest() {
      this.$vue.$forceUpdate();
    }
  }, {
    key: "$component",
    value: function $component(vue) {
      if (!vue) {
        vue = {};
      }

      var that = this;

      if (!underscore_default.a.isUndefined(vue.router)) {
        if (vue.router instanceof router_Router) {
          this.$router = vue.router;
          this.$controller = this;
          var router = vue.router.getVueRouter(this);
          vue.router = router;
        }
      }

      this.init();

      if (that.$router) {
        that.$router.start();
      }

      var context = service_Service.defaultContext();
      var services = this.services();

      vue.beforeCreate = function () {
        that.$vue = this;

        for (var name in services) {
          Log.debug(controller_category)("set service ", name, services[name]);

          if (!services[name]._init) {
            services[name].$_init();
          }

          if (!underscore_default.a.isUndefined(services[name].constructor.name)) {
            if (typeof services[name].constructor.name == 'function') {
              var _name = services[name].constructor.name();

              Log.debug(controller_category)("found static name() function " + _name);
              context.set(_name, services[name]);
            } else if (typeof services[name].constructor.name == 'string') {
              var _name3 = services[name].constructor.name;
              Log.debug(controller_category)("found static name property " + _name3);
              context.set(_name3, services[name]);
            }
          } else {
            Log.warn(controller_category)("not found static name() function");
            var _name4 = services[_name4];
            context.set(_name4, services[_name4]);
          }

          that[name] = services[name];
        }

        that.$router = this.$router;
        this.$controller = that;
        that.$_init(this);
        that.trigger('vue', 'beforeCreate', this);
        that.trigger('vue:beforeCreate', this);
      };

      vue.created = function () {
        Log.debug(controller_category)("vue created ", that);
        that.$isCreated = true;
        that.trigger('vue', 'created', this);
        that.trigger('vue:created', this);
      };

      vue.beforeMount = function () {
        that.trigger('vue', 'beforeMount', this);
        that.trigger('vue:beforeMount', this);
      };

      vue.mounted = function () {
        Log.debug(controller_category)("vue mounted ", that);
        that.trigger('vue', 'mounted', this);
        that.trigger('vue:mounted', this);
      };

      vue.beforeUpdate = function () {
        that.trigger('vue', 'beforeUpdate', this);
        that.trigger('vue:beforeUpdate', this);
      };

      vue.updated = function () {
        that.trigger('vue', 'updated', this);
        that.trigger('vue:updated', this);
      };

      vue.beforeDestroy = function () {
        that.trigger('vue', 'beforeDestroy', this);
        that.trigger('vue:beforeDestroy', this);
      };

      vue.destroyed = function () {
        that.trigger('vue', 'destroyed', this);
        that.trigger('vue:destroyed', this);
        that.$_destroy();

        for (var name in services) {
          Log.debug(controller_category)("service unset ", name);
          context.unset(name);
        }
      }; // vue routerのメソッド


      vue.beforeRouteEnter = function (to, from, next) {
        Log.debug(controller_category)("on route before ....", that);
        var ret = that.$_onRouteBefore(to, from, next);

        if (ret) {
          Log.debug(controller_category)("route cancel : next() called", ret);
          next(ret);
        } else {
          next(function (vm) {
            if (ret) {
              Log.debug(controller_category)("route cancel : next() called", ret);
            } else {
              that.$_onRouteEnter(vm, to, from, next);
            }
          });
        }
      };

      vue.beforeRouteUpdate = function (to, from, next) {
        Log.debug(controller_category)("on beforeRouteUpdate ....", that, to, from);
        next(); //  自分の場合

        if (to.name == that.$routeName) {
          if (to.name == from.name) {
            //  pathが変わった
            that.$_onRouteEnter(this, to, from, next);
          }
        }
      };

      vue.beforeRouteLeave = function (to, from, next) {
        Log.debug(controller_category)("on beforeRouteLeave ....", that);
        that.$_onRouteLeave(this, to, from, next);
      };

      vue.data = underscore_default.a.bind(this.data, this);
      vue.components = {};
      var components = this.components();

      for (var name in components) {
        var comp = components[name];

        if (comp) {
          vue.components[name] = comp;
        } else {
          // TODO warn : component is NULL
          Log.warn(controller_category)("component is NULL ", this);
        }
      }

      Log.debug(controller_category)("components ", vue.components);
      var methods = this.methods();

      for (var _name5 in methods) {
        // log.debug(_category)("name is [" + name + "]",typeof methods[name],name,this);
        var func = methods[_name5];

        if (!func.$bindController) {
          methods[_name5] = underscore_default.a.bind(func, this);
        }
      }

      var watch = this.watch();

      if (watch) {
        vue.watch = watch;
      }

      vue.methods = methods; //vue.methods = this.methods();

      vue.$controller = this;
      return vue;
    }
  }, {
    key: "$mount",
    value: function $mount(el) {
      this.$vue.$mount(el);
    }
  }]);

  return Controller;
}();


// CONCATENATED MODULE: ./src/core/main.js
function main_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_typeof = function _typeof(obj) { return typeof obj; }; } else { main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_typeof(obj); }

function main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function main_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_defineProperties(Constructor, staticProps); return Constructor; }

function main_possibleConstructorReturn(self, call) { if (call && (main_typeof(call) === "object" || typeof call === "function")) { return call; } return main_assertThisInitialized(self); }

function main_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function main_getPrototypeOf(o) { main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_getPrototypeOf(o); }

function main_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) main_setPrototypeOf(subClass, superClass); }

function main_setPrototypeOf(o, p) { main_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_setPrototypeOf(o, p); }


/**
 *  @module VueSPA
 *  @class VueSPA.Main
 *  @extends VueSPA.Controller
 */

var Main =
/*#__PURE__*/
function (_Controller) {
  main_inherits(Main, _Controller);

  function Main() {
    main_classCallCheck(this, Main);

    return main_possibleConstructorReturn(this, main_getPrototypeOf(Main).apply(this, arguments));
  }

  main_createClass(Main, [{
    key: "start",

    /**
     *  メインコントローラでの実行処理
     *
     *  @method start
     *  @example
     *      let main = new VueSPA.Main({
     *
     *      }).start();
     *
     */
    value: function start() {
      this.listenTo(this, 'vue:created', this.onCreate);
      this.listenTo(this, 'vue:mounted', this.onStart);
      this.$component(this._vue);
      this.$vue = new Vue(this._vue);
      return this;
    }
    /**
     *  Vueが作成されたときのイベント処理
     */

  }, {
    key: "onCreate",
    value: function onCreate(vue) {}
    /**
     * DOM要素にアクセスできる状態になった時のイベント
     *
     * ( vue.mounted )
     *
     * @method onStart
     * @param vue
     */

  }, {
    key: "onStart",
    value: function onStart(vue) {}
    /**
     * Mainの場合には、onEnterは実行されません。代わりに、onStartedを利用してください。
     *
     * @method onEnter
     * @param vue
     */

  }, {
    key: "onEnter",
    value: function onEnter(vue) {}
  }]);

  return Main;
}(controller_Controller);


// EXTERNAL MODULE: ./node_modules/url-template/lib/url-template.js
var url_template = __webpack_require__(4);
var url_template_default = /*#__PURE__*/__webpack_require__.n(url_template);

// CONCATENATED MODULE: ./src/core/ajax.js
function ajax_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ajax_typeof = function _typeof(obj) { return typeof obj; }; } else { ajax_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ajax_typeof(obj); }

function ajax_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ajax_possibleConstructorReturn(self, call) { if (call && (ajax_typeof(call) === "object" || typeof call === "function")) { return call; } return ajax_assertThisInitialized(self); }

function ajax_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ajax_getPrototypeOf(o) { ajax_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ajax_getPrototypeOf(o); }

function ajax_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ajax_createClass(Constructor, protoProps, staticProps) { if (protoProps) ajax_defineProperties(Constructor.prototype, protoProps); if (staticProps) ajax_defineProperties(Constructor, staticProps); return Constructor; }

function ajax_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ajax_setPrototypeOf(subClass, superClass); }

function ajax_setPrototypeOf(o, p) { ajax_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ajax_setPrototypeOf(o, p); }






var _default = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {}
};
var ajax_category = "service:ajax";
/**
 *  @module VueSPA
 *  @class VueSPA.Ajax
 *  @extends VueSPA.Service
 */

var ajax_Ajax =
/*#__PURE__*/
function (_Service) {
  ajax_inherits(Ajax, _Service);

  ajax_createClass(Ajax, null, [{
    key: "defaultOptions",
    value: function defaultOptions(opts) {
      _default = Object.assign(_default, opts);
    }
    /**
     * @class VueSPA.Ajax
     * @constructor
     * @extends VueSPA.Service
     * @param options
     */

  }]);

  function Ajax(options) {
    var _this;

    ajax_classCallCheck(this, Ajax);

    _this = ajax_possibleConstructorReturn(this, ajax_getPrototypeOf(Ajax).call(this));

    if (!underscore_default.a.isUndefined(options.prefix)) {
      _this.prefix = options.prefix;
    } else {
      _this.prefix = "";
    }

    if (underscore_default.a.isUndefined(options.context)) {
      _this.$context = service_Service.defaultContext();
    } else {
      _this.$context = options.context;
    }

    _this._init = false;
    _this.template = {};
    _this.mode = options.mode || _default.mode;
    _this.credentials = options.credentials || _default.credentials;
    _this.headers = options.headers || _default.headers;
    return _this;
  }

  ajax_createClass(Ajax, [{
    key: "$_init",
    value: function $_init() {
      var urls = this.urls();

      for (var name in urls) {
        var template = urls[name];
        this.template[name] = url_template_default.a.parse(template);
      }

      this.init();
      this._init = true;
    }
    /**
     * 何らかの初期化処理が必要な場合に上書き定義する
     *
     * @method init
     *
     */

  }, {
    key: "init",
    value: function init() {}
    /**
     * アクセスするエンドポイントのマップを定義する
     *
     * @method urls
     * @returns {{}}
     *
     * @example
     *      urls(){
     *          return {
     *              add : "/path/to/add",
     *              update : "/path/to/update/{sid}",
     *              list : "/path/to/list/{page}/{limit}"
     *          }
     *      }
     *
     *      /path/to/update/5 にデータをポストする場合
     *
     *      this.doPost("update",{
     *          title : "名称"
     *      },{
     *          sid : 5
     *      };
     *
     */

  }, {
    key: "urls",
    value: function urls() {
      return {};
    }
  }, {
    key: "filters",
    value: function filters() {
      return [];
    }
    /**
     * ファイルのアップロード処理
     *
     * @method doUpload
     *
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} file HTML Fileオブジェクト
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */

  }, {
    key: "doUpload",
    value: function doUpload(name, file, params, headers) {
      if (!this._init) {
        this.$_init();
      }

      if (!params) {
        params = {};
      }

      if (!headers) {
        headers = {};
      }

      if (underscore_default.a.isUndefined(this.template[name])) {
        Log.warn(ajax_category)("no url map : [" + name + "]");
        throw new Error("No url map [" + name + "]");
      }

      var url = this.prefix + this.template[name].expand(params);

      var _headers = Object.assign({}, this.headers, headers);

      var fd = new FormData();
      fd.append('file', file);
      var opts = {
        method: 'POST',
        mode: this.mode,
        cache: "no-cache",
        credentials: this.credentials,
        headers: _headers,
        timeout: 500,
        body: fd
      };
      return this._request(url, opts);
    }
    /**
     * JSONデータのPOST処理
     *
     * @method doPost
     *
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} postData POSTデータ
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */

  }, {
    key: "doPost",
    value: function doPost(name, postData, params, headers) {
      if (!this._init) {
        this.$_init();
      }

      if (!postData) {
        postData = {};
      }

      if (!params) {
        params = {};
      }

      if (!headers) {
        headers = {};
      }

      var postJson = JSON.stringify(postData);

      if (underscore_default.a.isUndefined(this.template[name])) {
        Log.warn(ajax_category)("no url map : [" + name + "]");
        throw new Error("No url map [" + name + "]");
      }

      var url = this.prefix + this.template[name].expand(params);

      var _headers = Object.assign({}, this.headers, headers, {
        "Content-Type": "application/json"
      });

      var opts = {
        method: 'POST',
        mode: this.mode,
        cache: "no-cache",
        credentials: this.credentials,
        headers: _headers,
        timeout: 500,
        body: postJson
      };
      return this._request(url, opts);
    }
    /**
     * GETリクエストを行う
     *
     * @metod doGet
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */

  }, {
    key: "doGet",
    value: function doGet(name, params, headers) {
      if (!this._init) {
        this.$_init();
      }

      if (!params) {
        params = {};
      }

      if (!headers) {
        headers = {};
      }

      if (underscore_default.a.isUndefined(this.template[name])) {
        Log.warn(ajax_category)("no url map : [" + name + "]");
        throw new Error("No url map [" + name + "]");
      }

      var url = this.prefix + this.template[name].expand(params);

      var _headers = Object.assign({}, this.headers, headers);

      var opts = {
        method: 'GET',
        mode: this.mode,
        cache: "no-cache",
        credentials: this.credentials,
        headers: _headers,
        timeout: 500
      };
      return this._request(url, opts);
    }
    /**
     * DELETEメソッドを送信する
     *
     * @method doDelete
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */

  }, {
    key: "doDelete",
    value: function doDelete(name, params, headers) {
      if (!this._init) {
        this.$_init();
      }

      if (!params) {
        params = {};
      }

      if (!headers) {
        headers = {};
      }

      if (underscore_default.a.isUndefined(this.template[name])) {
        Log.warn(ajax_category)("no url map : [" + name + "]");
        throw new Error("No url map [" + name + "]");
      }

      var url = this.prefix + this.template[name].expand(params);

      var _headers = Object.assign({}, this.headers, headers);

      var opts = {
        method: 'DELETE',
        mode: this.mode,
        cache: "no-cache",
        credentials: this.credentials,
        headers: _headers,
        timeout: 500
      };
      return this._request(url, opts);
    }
    /**
     * リクエスト実装処理
     *
     * @method _request
     * @param url
     * @param opts
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_request",
    value: function _request(url, opts) {
      if (this.$context) {
        this.$context.trigger('ajax:loading', url, opts);
      }

      var that = this;
      var promise = new Promise(function (resolve, reject) {
        Log.debug(ajax_category)("request [" + opts.method + "]", url);
        fetch(url, opts).then(function (res) {
          Log.debug(ajax_category)("response ", res);

          if (res.ok) {
            var json = res.json();
            Log.debug(ajax_category)("resolve ", res, json);

            if (that.$context) {
              that.$context.trigger('ajax:success', res, json, that);
            }

            var filters = that.filters();
            var ret = true;

            for (var i = 0; i < filters.length; i++) {
              var _ret = filters[i](json);

              Log.debug(ajax_category)("request filter ", json, _ret);

              if (_ret) {
                json = _ret;
              } else {
                ret = false;
              }
            }

            if (ret) {
              resolve(json);
            } else {
              reject(json);
            }
          } else {
            Log.debug(ajax_category)("reject ", res);
            reject(res);
            that.$context.trigger('ajax:error', res, that);
          }

          that.$context.trigger('ajax:finished', url, opts);
        })["catch"](function (error) {
          Log.debug(ajax_category)("reject ", error);
          reject(error);
          that.$context.trigger('ajax:finished');
        });
      });
      return promise;
    }
  }]);

  return Ajax;
}(service_Service);


// CONCATENATED MODULE: ./src/core/utils.js
function utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utils_createClass(Constructor, protoProps, staticProps) { if (protoProps) utils_defineProperties(Constructor.prototype, protoProps); if (staticProps) utils_defineProperties(Constructor, staticProps); return Constructor; }



/**
 *  @module VueSPA
 *  @class VueSPA.Utils
 */

var utils_Utils =
/*#__PURE__*/
function () {
  function Utils() {
    utils_classCallCheck(this, Utils);
  }

  utils_createClass(Utils, null, [{
    key: "createEventObject",

    /**
     *  Backboneのイベントオブジェクトを作成する
     *
     *  @static
     *  @method createEventObject
     *  @return
     */
    value: function createEventObject() {
      var target = {};

      underscore_default.a.extend(target, backbone_default.a.Events);

      return target;
    }
    /**
     * 指定したオブジェクトにBackbone.Events機能を追加したオブジェクトにする
     *
     * 通常のVue Componentの場合イベント処理を扱うのが面倒なため、Backbone.Eventsのメソッドを使えるように拡張する等。
     *
     *
     * @static
     * @method extendEvents
     * @param {object} obj
     * @returns {object}
     *
     * @example
     *
     *      let comp = {
     *          created(){
     *              VueSPA.Utils.extendEvents(this);
     *          },
     *          methods : {
     *              foo: function(){
     *                  this.trigger('foo');
     *              }
     *          }
     *      }
     *
     *      // VueSPA.Controller内で以下の様な使い方を想定
     *
     *      onEnter(){
     *          let comp = this.refs("comp");
     *          this.listenTo(comp,"foo",function(){});
     *      }
     *
     *
     */

  }, {
    key: "extendEvents",
    value: function extendEvents(obj) {
      underscore_default.a.extend(obj, backbone_default.a.Events);

      return obj;
    }
  }]);

  return Utils;
}();


// CONCATENATED MODULE: ./src/index.js
// import VueSPA from './core/vuespa.js'









/**
 *
 * @module VueSPA
 *
 * @type {{Log: Log, Utils: Utils, Loader: Loader, Router: Router, Service: Service, Controller: Controller, Component: Component, Directive: Directive, Ajax: Ajax}}
 *
 */

window.VueSPA = {
  Loader: loader_Loader,
  Router: router_Router,
  Main: Main,
  Controller: controller_Controller,
  Service: service_Service,
  Ajax: ajax_Ajax,
  Log: Log,
  Utils: utils_Utils
};

/***/ })
/******/ ]);