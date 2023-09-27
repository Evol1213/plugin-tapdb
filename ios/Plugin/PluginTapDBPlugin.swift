import Foundation
import Capacitor
import TapDB

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(PluginTapDBPlugin)
public class PluginTapDBPlugin: CAPPlugin {
    
    //初始化
    @objc func initialize(_ call:CAPPluginCall){
        TapDB.enableLog(true)
        let channel = call.getString("channel") ?? "";
        let appVersion = call.getString("appVersion") ?? "";
        if let clientId = call.getString("clientId"){
            TapDB.onStart(clientId, channel: channel, version: appVersion)
        }
        call.resolve()
    }
    
    //设置用户
    @objc func setUser(_ call:CAPPluginCall){
        let userId = call.getString("userId") ?? "";
        TapDB.setUser(userId);
        call.resolve()
    }
    
    @objc func clearUser(_ call: CAPPluginCall) {
           TapDB.clearUser()
           call.resolve()
        
    }
    //设置账户名称
    @objc func setName(_ call: CAPPluginCall) {
        if let name = call.getString("name") {
               TapDB.setName(name)
           }
           call.resolve()
    }
       
   @objc func setLevel(_ call: CAPPluginCall) {
       if let level = call.getInt("level") {
           TapDB.setLevel(level)
       }
       call.resolve()
   }
   
   @objc func setServer(_ call: CAPPluginCall) {
       if let server = call.getString("server") {
           TapDB.setServer(server)
       }
       call.resolve()
   }
   
   @objc func onCharge(_ call: CAPPluginCall) {
       if let orderId = call.getString("orderId"),
          let product = call.getString("product") {
           let amount = call.getInt("amount") ?? 0
           let currencyType = call.getString("currencyType")
           let payment = call.getString("payment")
           TapDB.onChargeSuccess(orderId, product: product, amount: amount, currencyType: currencyType, payment: payment)
       }
       call.resolve()
   }
   
   @objc func trackEvent(_ call: CAPPluginCall) {
       if let event = call.getString("eventName"),
          let properties = call.getObject("properties") {
           TapDB.trackEvent(event, properties: properties)
       }
       call.resolve()
   }
   
   @objc func registerStaticProperties(_ call: CAPPluginCall) {
       if let staticProperties = call.getObject("staticProperties") {
           TapDB.registerStaticProperties(staticProperties)
       }
       call.resolve()
   }
   
   @objc func unregisterStaticProperty(_ call: CAPPluginCall) {
       if let propertyName = call.getString("propertyName") {
           TapDB.unregisterStaticProperty(propertyName)
       }
       call.resolve()
   }
   
   @objc func clearStaticProperties(_ call: CAPPluginCall) {
       TapDB.clearStaticProperties()
       call.resolve()
   }
   
   @objc func deviceUpdate(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.deviceUpdate(properties)
       }
       call.resolve()
   }
   
   @objc func deviceInitialize(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.deviceInitialize(properties)
       }
       call.resolve()
   }
   
   @objc func deviceAdd(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.deviceAdd(properties)
       }
       call.resolve()
   }
   
   @objc func userUpdate(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.userUpdate(properties)
       }
       call.resolve()
   }
   
   @objc func userInitialize(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.userInitialize(properties)
       }
       call.resolve()
   }
   
   @objc func userAdd(_ call: CAPPluginCall) {
       if let properties = call.getObject("properties") {
           TapDB.userAdd(properties)
       }
       call.resolve()
   }
}
