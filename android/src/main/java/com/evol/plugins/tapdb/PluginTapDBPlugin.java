package com.evol.plugins.tapdb;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.tds.tapdb.sdk.TapDB;

import org.json.JSONObject;


@CapacitorPlugin(name = "PluginTapDB")
public class PluginTapDBPlugin extends Plugin {

  @PluginMethod
  public void initialize(PluginCall call) {
    String clientId = call.getString("clientId");
    String channel = call.getString("channel");
    String appVersion = call.getString("appVersion");

    TapDB.init(getContext(), clientId, channel, appVersion);
    call.resolve();
  }

  @PluginMethod
  public void setUser(PluginCall call) {
    String userId = call.getString("userId");
    TapDB.setUser(userId);
    call.resolve();
  }

  @PluginMethod
  public void clearUser(PluginCall call) {
    TapDB.clearUser();
    call.resolve();
  }

  //设置账户名称
  @PluginMethod
  public void setName(PluginCall call) {
    String name = call.getString("name");
    TapDB.setName(name);
    call.resolve();
  }

  //设置账户等级
  @PluginMethod
  public void setLevel(PluginCall call) {
    int level = call.getInt("level");
    TapDB.setLevel(level);
    call.resolve();
  }

  //设置账号区服
  @PluginMethod
  public void setServer(PluginCall call) {
    String server = call.getString("server");
    TapDB.setServer(server);
    call.resolve();
  }

  //上报充值
  @PluginMethod
  public void onCharge(PluginCall call) {
    String orderId = call.getString("orderId");
    String product = call.getString("product");

    Long amount = Long.valueOf(0);
    try {
      amount = Long.valueOf(call.getInt("amount", 0));
    } catch (NumberFormatException e) {
    }
    String currencyType = call.getString("currencyType");
    String payment = call.getString("payment");
    TapDB.onCharge(orderId, product, amount, currencyType, payment);
    call.resolve();
  }

  //上报事件
  @PluginMethod
  public void trackEvent(PluginCall call) {
    String event = call.getString("eventName");
    JSONObject properties = call.getObject("properties");
    TapDB.trackEvent(event, properties);
    call.resolve();
  }

  //设置通用事件属性
  @PluginMethod
  public void registerStaticProperties(PluginCall call) {
    JSONObject properties = call.getObject("staticProperties");
    TapDB.registerStaticProperties(properties);
    call.resolve();
  }

  //删除单个静态通用事件属性
  @PluginMethod
  public void unregisterStaticProperty(PluginCall call) {
    String propertyName = call.getString("propertyName");
    TapDB.unregisterStaticProperty(propertyName);
    call.resolve();
  }

  //清空全部静态通用属性
  @PluginMethod
  public void clearStaticProperties(PluginCall call) {
    TapDB.clearStaticProperties();
    call.resolve();
  }

  //设备属性更新操作
  @PluginMethod
  public void deviceUpdate(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.deviceUpdate(properties);
    call.resolve();
  }

  //设备初始化操作
  @PluginMethod
  public void deviceInitialize(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.deviceInitialize(properties);
    call.resolve();
  }

  //设备属性累加操作
  @PluginMethod
  public void deviceAdd(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.deviceAdd(properties);
    call.resolve();
  }

  //账号属性更新操作
  @PluginMethod
  public void userUpdate(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.userUpdate(properties);
    call.resolve();
  }

  //账号属性初始化操作
  @PluginMethod
  public void userInitialize(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.userInitialize(properties);
    call.resolve();
  }

  //账号属性累加操作
  @PluginMethod
  public void userAdd(PluginCall call) {
    JSONObject properties = call.getObject("properties");
    TapDB.userAdd(properties);
    call.resolve();
  }
}
