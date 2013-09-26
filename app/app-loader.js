Ext.Loader.setConfig({
  enabled: true,
  paths: {
    "Clutch": "app"
  }
});

Ext.syncRequire(["Ext.Component", "Ext.ComponentManager", "Ext.ComponentQuery"]);