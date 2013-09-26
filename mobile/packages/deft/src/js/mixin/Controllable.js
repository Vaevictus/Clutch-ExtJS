// Generated by CoffeeScript 1.6.3
/*
Copyright (c) 2012-2013 [DeftJS Framework Contributors](http://deftjs.org)
Open source under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
*/

/**
* A mixin that creates and attaches the specified view controller(s) to the target view. Used in conjunction with Deft.mvc.ViewController.
* @deprecated 0.8 Deft.mixin.Controllable has been deprecated and can now be omitted - simply use the \'controller\' class annotation on its own.
*/

Ext.define('Deft.mixin.Controllable', {
  requires: ['Ext.Component', 'Deft.core.Class', 'Deft.log.Logger'],
  /**
  	@private
  */

  onClassMixedIn: function(targetClass) {
    Deft.Logger.deprecate('Deft.mixin.Controllable has been deprecated and can now be omitted - simply use the \'controller\' class annotation on its own.');
  }
}, function() {
  var createControllerInterceptor;
  if (Ext.getVersion('extjs') && Ext.getVersion('core').isLessThan('4.1.0')) {
    createControllerInterceptor = function() {
      return function(config) {
        var controller, error;
        if (config == null) {
          config = {};
        }
        if (this instanceof Ext.ClassManager.get('Ext.Component') && !this.$controlled) {
          try {
            controller = Ext.create(this.controller, config.controllerConfig || this.controllerConfig || {});
          } catch (_error) {
            error = _error;
            Deft.Logger.warn("Error initializing view controller: an error occurred while creating an instance of the specified controller: '" + this.controller + "'.");
            throw error;
          }
          if (this.getController === void 0) {
            this.getController = function() {
              return controller;
            };
          }
          this.$controlled = true;
          this.callOverridden(arguments);
          controller.controlView(this);
          return this;
        }
        return this.callOverridden(arguments);
      };
    };
  } else {
    createControllerInterceptor = function() {
      return function(config) {
        var controller, error;
        if (config == null) {
          config = {};
        }
        if (this instanceof Ext.ClassManager.get('Ext.Component') && !this.$controlled) {
          try {
            controller = Ext.create(this.controller, config.controllerConfig || this.controllerConfig || {});
          } catch (_error) {
            error = _error;
            Deft.Logger.warn("Error initializing view controller: an error occurred while creating an instance of the specified controller: '" + this.controller + "'.");
            throw error;
          }
          if (this.getController === void 0) {
            this.getController = function() {
              return controller;
            };
          }
          this.$controlled = true;
          this.callParent(arguments);
          controller.controlView(this);
          return this;
        }
        return this.callParent(arguments);
      };
    };
  }
  Deft.Class.registerPreprocessor('controller', function(Class, data, hooks, callback) {
    var self;
    Deft.Class.hookOnClassCreated(hooks, function(Class) {
      Class.override({
        constructor: createControllerInterceptor()
      });
    });
    Deft.Class.hookOnClassExtended(data, function(Class, data, hooks) {
      Deft.Class.hookOnClassCreated(hooks, function(Class) {
        Class.override({
          constructor: createControllerInterceptor()
        });
      });
    });
    self = this;
    Ext.require([data.controller], function() {
      if (callback != null) {
        callback.call(self, Class, data, hooks);
      }
    });
    return false;
  }, 'before', 'extend');
});
