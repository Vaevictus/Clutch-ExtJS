Ext.data.JsonP.Deft_promise_Promise({"meta":{},"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Deft.Promise</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Deft.promise.Promise</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Deft.promise.Resolver' rel='Deft.promise.Resolver' class='docClass'>Deft.promise.Resolver</a></div><h4>Files</h4><div class='dependency'><a href='source/Promise.html#Deft-promise-Promise' target='_blank'>Promise.js</a></div></pre><div class='doc-contents'><p>Promises represent a future value; i.e., a value that may not yet be available.</p>\n\n<p>A Promise's then() method is used to specify onFulfilled and onRejected\ncallbacks that will be notified when the future value becomes available. Those\ncallbacks can subsequently transform the value that was resolved or the reason\nthat was rejected. Each call to then() returns a new Promise of that\ntransformed value; i.e., a Promise that is resolved with the callback return\nvalue or rejected with any error thrown by the callback.</p>\n\n<h2><u><a href=\"https://github.com/deftjs/DeftJS/wiki/Promises%20API\">Basic Usage</a></u></h2>\n\n<p>In it's most basic and common form, a method will create and return a Promise like this:</p>\n\n<pre><code>// A method in a service class which uses a Store and returns a Promise\nloadCompanies: function() {\n  var deferred = Ext.create('<a href=\"#!/api/Deft.promise.Deferred\" rel=\"Deft.promise.Deferred\" class=\"docClass\">Deft.Deferred</a>');\n\n  this.companyStore.load({\n\n    callback: function(records, operation, success) {\n      if (success) {\n        deferred.resolve(records);\n      } else {\n        deferred.reject(\"Error loading Companies.\");\n      }\n    }\n\n  });\n\n  return deferred.promise;\n}\n</code></pre>\n\n<p>You can see this method first creates a Deferred object. It then returns a Promise object for\nuse by the caller. Finally, in the asynchronous callback, it resolves the Deferred object if\nthe call was successful, and rejects the Deferred if the call failed.</p>\n\n<p>The method which calls the above code and works with the returned Promise might look like:</p>\n\n<pre><code>// Using a Promise returned by another object.\nloadCompanies: function() {\n\n  this.companyService.loadCompanies().then({\n    success: function(records) {\n      // Do something with result.\n    },\n    failure: function(error) {\n      // Do something on failure.\n    }\n  }).always(function() {\n    // Do something whether call succeeded or failed\n  });\n\n}\n</code></pre>\n\n<p>The calling code uses the Promise returned from the companyService.loadCompanies() method and\nuses then() to attach success and failure handlers. Finally, an always() method call is chained\nonto the returned Promise. This specifies a callback function that will run whether the underlying\ncall succeeded or failed.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Deft.promise.Promise-method-constructor' class='name expandable'>Deft.promise.Promise</a>( <span class='pre'>resolver</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolver</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-always' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-always' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-always' class='name expandable'>always</a>( <span class='pre'>onCompleted, scope</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Attaches a callback to this {Deft.promise.Promise} that will be called when it resolves or rejects. ...</div><div class='long'><p>Attaches a callback to this {<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>} that will be called when it resolves or rejects. Similar to \"finally\" in \"try..catch..finally\".</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onCompleted</span> : Function<div class='sub-desc'><p>Callback function to be called when resolved or rejected.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Optional scope for the callback.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A new \"pass-through\" Promise that resolves with the original value or rejects with the original reason.</p>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Cancels this {Deft.promise.Promise} if it is still pending, triggering a rejection with a CancellationError that will...</div><div class='long'><p>Cancels this {<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>} if it is still pending, triggering a rejection with a CancellationError that will propagate to any Promises originating from this Promise.</p>\n</div></div></div><div id='method-done' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-done' class='name expandable'>done</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Terminates a {Deft.promise.Promise} chain, ensuring that unhandled rejections will be thrown as Errors. ...</div><div class='long'><p>Terminates a {<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>} chain, ensuring that unhandled rejections will be thrown as Errors.</p>\n</div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-log' class='name expandable'>log</a>( <span class='pre'>identifier</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Logs the resolution or rejection of this Promise using Deft.logger.Logger::log(). ...</div><div class='long'><p>Logs the resolution or rejection of this Promise using <a href=\"#!/api/Deft.log.Logger-method-log\" rel=\"Deft.log.Logger-method-log\" class=\"docClass\">Deft.logger.Logger::log()</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>identifier</span> : String<div class='sub-desc'><p>An optional identifier to incorporate into the resulting log entry.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A new \"pass-through\" Promise that resolves with the original value or rejects with the original reason.</p>\n</div></li></ul></div></div></div><div id='method-otherwise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-otherwise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-otherwise' class='name expandable'>otherwise</a>( <span class='pre'>onRejected, scope</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Attaches a callback that will be called if this Promise is rejected. ...</div><div class='long'><p>Attaches a callback that will be called if this Promise is rejected. The callbacks can subsequently transform the reason that was rejected.</p>\n\n<p>Each call to otherwise() returns a new Promise of that transformed value; i.e., a Promise that is resolved with the callback return value or rejected with any error thrown by the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onRejected</span> : Function<div class='sub-desc'><p>Callback function to be called when rejected.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Optional scope for the callback.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the transformed future value.</p>\n</div></li></ul></div></div></div><div id='method-then' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-method-then' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-method-then' class='name expandable'>then</a>( <span class='pre'>onFulfilled, onRejected, onProgress, scope</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Attaches callbacks that will be notified when this Promise's future value becomes available. ...</div><div class='long'><p>Attaches callbacks that will be notified when this Promise's future value becomes available. Those callbacks can subsequently transform the value that was resolved or the reason that was rejected.</p>\n\n<p>Each call to then() returns a new Promise of that transformed value; i.e., a Promise that is resolved with the callback return value or rejected with any error thrown by the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFulfilled</span> : Function<div class='sub-desc'><p>Callback function to be called when resolved.</p>\n</div></li><li><span class='pre'>onRejected</span> : Function<div class='sub-desc'><p>Callback function to be called when rejected.</p>\n</div></li><li><span class='pre'>onProgress</span> : Function<div class='sub-desc'><p>Callback function to be called with progress updates.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Optional scope for the callback(s).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the transformed future value.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-all' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-all' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-all' class='name expandable'>all</a>( <span class='pre'>promisesOrValues</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a new Promise that will only resolve once all the specified promisesOrValues have resolved. ...</div><div class='long'><p>Returns a new Promise that will only resolve once all the specified <code>promisesOrValues</code> have resolved.</p>\n\n<p>The resolution value will be an Array containing the resolution value of each of the <code>promisesOrValues</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promisesOrValues</span> : Mixed[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><div class='sub-desc'><p>An Array of values or Promises, or a Promise of an Array of values or Promises.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of an Array of the resolved values.</p>\n</div></li></ul></div></div></div><div id='static-method-any' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-any' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-any' class='name expandable'>any</a>( <span class='pre'>promisesOrValues</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Initiates a competitive race, returning a new Promise that will resolve when any one of the specified promisesOrValue...</div><div class='long'><p>Initiates a competitive race, returning a new Promise that will resolve when any one of the specified <code>promisesOrValues</code> have resolved, or will reject when all <code>promisesOrValues</code> have rejected or cancelled.</p>\n\n<p>The resolution value will the first value of <code>promisesOrValues</code> to resolve.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promisesOrValues</span> : Mixed[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><div class='sub-desc'><p>An Array of values or Promises, or a Promise of an Array of values or Promises.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the first resolved value.</p>\n</div></li></ul></div></div></div><div id='static-method-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-delay' class='name expandable'>delay</a>( <span class='pre'>promiseOrValue, milliseconds</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a new Promise that will automatically resolve with the specified Promise or value after the specified delay (...</div><div class='long'><p>Returns a new Promise that will automatically resolve with the specified Promise or value after the specified delay (in milliseconds).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promiseOrValue</span> : Mixed<div class='sub-desc'><p>A Promise or value.</p>\n</div></li><li><span class='pre'>milliseconds</span> : Number<div class='sub-desc'><p>A delay duration (in milliseconds).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the specified Promise or value that will resolve after the specified delay.</p>\n</div></li></ul></div></div></div><div id='static-method-isPromise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-isPromise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-isPromise' class='name expandable'>isPromise</a>( <span class='pre'>value</span> ) : Boolean<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Determines whether the specified value is a Promise (including third-party untrusted Promises or then()-ables), based...</div><div class='long'><p>Determines whether the specified value is a Promise (including third-party untrusted Promises or then()-ables), based on the Promises/A specification feature test.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>A potential Promise.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>A Boolean indicating whether the specified value was a Promise.</p>\n</div></li></ul></div></div></div><div id='static-method-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-map' class='name expandable'>map</a>( <span class='pre'>promisesOrValues, mapFn</span> ) : Promise<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Traditional map function, similar to Array.prototype.map(), that allows input to contain promises and/or values. ...</div><div class='long'><p>Traditional map function, similar to <code>Array.prototype.map()</code>, that allows input to contain promises and/or values.</p>\n\n<p>The specified map function may return either a value or a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promisesOrValues</span> : Mixed[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><div class='sub-desc'><p>An Array of values or Promises, or a Promise of an Array of values or Promises.</p>\n</div></li><li><span class='pre'>mapFn</span> : Function<div class='sub-desc'><p>A Function to call to transform each resolved value in the Array.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'><p>A Promise of an Array of the mapped resolved values.</p>\n</div></li></ul></div></div></div><div id='static-method-memoize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-memoize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-memoize' class='name expandable'>memoize</a>( <span class='pre'>fn, scope, hashFn</span> ) : Function<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a new function that wraps the specified function and caches the results for previously processed inputs. ...</div><div class='long'><p>Returns a new function that wraps the specified function and caches the results for previously processed inputs.</p>\n\n<p>Similar to <a href=\"#!/api/Deft.util.Function-static-method-memoize\" rel=\"Deft.util.Function-static-method-memoize\" class=\"docClass\">Deft.util.Function::memoize()</a>, except it allows for parameters that are Promises and/or values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>A Function to wrap.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>An optional scope in which to execute the wrapped function.</p>\n</div></li><li><span class='pre'>hashFn</span> : Function<div class='sub-desc'><p>An optional function used to compute a hash key for storing the result, based on the arguments to the original function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>The new wrapper function.</p>\n</div></li></ul></div></div></div><div id='static-method-reduce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-reduce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-reduce' class='name expandable'>reduce</a>( <span class='pre'>promisesOrValues, reduceFn, initialValue</span> ) : Promise<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Traditional reduce function, similar to Array.reduce(), that allows input to contain promises and/or values. ...</div><div class='long'><p>Traditional reduce function, similar to <code>Array.reduce()</code>, that allows input to contain promises and/or values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promisesOrValues</span> : Mixed[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><div class='sub-desc'><p>An Array of values or Promises, or a Promise of an Array of values or Promises.</p>\n</div></li><li><span class='pre'>reduceFn</span> : Function<div class='sub-desc'><p>A Function to call to transform each successive item in the Array into the final reduced value.</p>\n</div></li><li><span class='pre'>initialValue</span> : Mixed<div class='sub-desc'><p>An initial Promise or value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'><p>A Promise of the reduced value.</p>\n</div></li></ul></div></div></div><div id='static-method-reduceArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-reduceArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-reduceArray' class='name expandable'>reduceArray</a>( <span class='pre'>reduceFn, initialValue</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Fallback implementation when Array.reduce is not available. ...</div><div class='long'><p>Fallback implementation when Array.reduce is not available.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reduceFn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>initialValue</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='static-method-some' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-some' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-some' class='name expandable'>some</a>( <span class='pre'>promisesOrValues, howMany</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Initiates a competitive race, returning a new Promise that will resolve when howMany of the specified promisesOrValue...</div><div class='long'><p>Initiates a competitive race, returning a new Promise that will resolve when <code>howMany</code> of the specified <code>promisesOrValues</code> have resolved, or will reject when it becomes impossible for <code>howMany</code> to resolve.</p>\n\n<p>The resolution value will be an Array of the first <code>howMany</code> values of <code>promisesOrValues</code> to resolve.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promisesOrValues</span> : Mixed[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a>[]/<a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><div class='sub-desc'><p>An Array of values or Promises, or a Promise of an Array of values or Promises.</p>\n</div></li><li><span class='pre'>howMany</span> : Number<div class='sub-desc'><p>The expected number of resolved values.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the expected number of resolved values.</p>\n</div></li></ul></div></div></div><div id='static-method-timeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-timeout' class='name expandable'>timeout</a>( <span class='pre'>promiseOrValue, milliseconds</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a new Promise that will automatically reject after the specified timeout (in milliseconds) if the specified p...</div><div class='long'><p>Returns a new Promise that will automatically reject after the specified timeout (in milliseconds) if the specified promise has not resolved or rejected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promiseOrValue</span> : Mixed<div class='sub-desc'><p>A Promise or value.</p>\n</div></li><li><span class='pre'>milliseconds</span> : Number<div class='sub-desc'><p>A timeout duration (in milliseconds).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the specified Promise or value that enforces the specified timeout.</p>\n</div></li></ul></div></div></div><div id='static-method-when' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deft.promise.Promise'>Deft.promise.Promise</span><br/><a href='source/Promise.html#Deft-promise-Promise-static-method-when' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deft.promise.Promise-static-method-when' class='name expandable'>when</a>( <span class='pre'>promiseOrValue</span> ) : <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Returns a new Promise that:\n\n\nresolves immediately for the specified value, or\nresolves or rejects when the specified...</div><div class='long'><p>Returns a new Promise that:</p>\n\n<ul>\n<li>resolves immediately for the specified value, or</li>\n<li>resolves or rejects when the specified <a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Promise</a> (or third-party Promise or then()-able) is resolved or rejected.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promiseOrValue</span> : Mixed<div class='sub-desc'><p>A Promise (or third-party Promise or then()-able) or value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Deft.promise.Promise\" rel=\"Deft.promise.Promise\" class=\"docClass\">Deft.promise.Promise</a></span><div class='sub-desc'><p>A Promise of the specified Promise or value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"alternateClassNames":["Deft.Promise"],"autodetected":{"uses":true,"alternateClassNames":true,"aliases":true,"members":true,"mixins":true,"extends":true,"code_type":true,"requires":true},"aliases":{},"mixedInto":[],"parentMixins":[],"superclasses":["Ext.Base"],"members":[{"meta":{},"owner":"Deft.promise.Promise","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"always","id":"method-always","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"cancel","id":"method-cancel","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"done","id":"method-done","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"log","id":"method-log","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"otherwise","id":"method-otherwise","tagname":"method"},{"meta":{},"owner":"Deft.promise.Promise","name":"then","id":"method-then","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"all","id":"static-method-all","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"any","id":"static-method-any","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"delay","id":"static-method-delay","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"isPromise","id":"static-method-isPromise","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"map","id":"static-method-map","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"memoize","id":"static-method-memoize","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"reduce","id":"static-method-reduce","tagname":"method"},{"meta":{"static":true,"private":true},"owner":"Deft.promise.Promise","name":"reduceArray","id":"static-method-reduceArray","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"some","id":"static-method-some","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"timeout","id":"static-method-timeout","tagname":"method"},{"meta":{"static":true},"owner":"Deft.promise.Promise","name":"when","id":"static-method-when","tagname":"method"}],"mixins":[],"extends":"Ext.Base","subclasses":[],"code_type":"ext_define","name":"Deft.promise.Promise","id":"class-Deft.promise.Promise","requires":["Deft.promise.Resolver"],"tagname":"class","short_doc":"Promises represent a future value; i.e., a value that may not yet be available. ...","files":[{"href":"Promise.html#Deft-promise-Promise","filename":"Promise.js"}]});