#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(PluginTapDBPlugin, "PluginTapDB",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setUser, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(clearUser, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setName, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setLevel, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setServer, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(onCharge, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(trackEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(registerStaticProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(unregisterStaticProperty, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(clearStaticProperties, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(deviceUpdate, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(deviceInitialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(deviceAdd, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(userUpdate, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(userInitialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(userAdd, CAPPluginReturnPromise);
)
