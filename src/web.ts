import { WebPlugin } from '@capacitor/core';

import type { PluginTapDBPlugin } from './definitions';
import { initOptions } from "./definitions";

export class PluginTapDBWeb extends WebPlugin implements PluginTapDBPlugin {
  async initialize(options: initOptions): Promise<void> {
    console.log('TapDB_Func_init', options);
    return Promise.resolve();
  }
  async setUser(options: { userId: string }): Promise<void> {
    console.log('TapDB_Func_setUser', options);
    return Promise.resolve();
  }
  async clearUser(): Promise<void> {
    console.log('TapDB_Func_clearUser');
    return Promise.resolve();
  }
  async setName(options: { name: string }): Promise<void> {
    console.log('TapDB_Func_setName', options);
    return Promise.resolve();
  }
  async setLevel(options: { level: number }): Promise<void> {
    console.log('TapDB_Func_setLevel', options);
    return Promise.resolve();
  }
  async setServer(options: { server: string }): Promise<void> {
    console.log('TapDB_Func_setServer', options);
    return Promise.resolve();
  }
  async onCharge(options: {
    orderId: string;
    product: string;
    amount: number;
    currencyType: string;
    payment: string;
  }): Promise<void> {
    console.log('TapDB_Func_charge', options);
    return Promise.resolve();
  }
  async trackEvent(options: { eventName: string; properties: Object }): Promise<void> {
    console.log('TapDB_Func_onEvent', options);
    return Promise.resolve();
  }

  async registerStaticProperties(options:{staticProperties: Object}): Promise<void> {
    console.log('TapDB_Func_registerStaticProperties',options);
    return Promise.resolve();
  }

  async unregisterStaticProperty(options:{propertyName: string}): Promise<void> {
    console.log('TapDB_Func_unregisterStaticProperty',options);
    return Promise.resolve();
  }

  async clearStaticProperties(): Promise<void> {
    console.log('TapDB_Func_clearStaticProperties');
    return Promise.resolve();
  }

  async deviceUpdate(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_deviceUpdate',options);
    return Promise.resolve();
  }

  async deviceInitialize(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_deviceInitialize',options);
    return Promise.resolve();
  }

  async deviceAdd(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_deviceAdd',options);
    return Promise.resolve();
  }

  async userUpdate(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_userUpdate',options);
    return Promise.resolve();
  }

  async userInitialize(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_userInitialize',options);
    return Promise.resolve();
  }

  async userAdd(options:{properties: Object}): Promise<void> {
    console.log('TapDB_Func_userAdd',options);
    return Promise.resolve();
  }
}
