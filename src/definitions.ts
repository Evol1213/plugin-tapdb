export interface initOptions {
  clientId: string;
  channel?: string;
  appVersion?: string;
}

export interface PluginTapDBPlugin {
  //
  /**
   * 初始化
   * @description 初始化 TapDB SDK 并上报一个设备登录（ device_login ）事件，
   * 调用这个接口是使用其它接口的先决条件，需要尽早调用，建议在游戏的主 Activity 中调用。
   * @param options
   */
  initialize(options: initOptions): Promise<void>;

  /**
   * 设置账号 ID
   * @description 当用户进行账号登录时，可调用设置账号 ID （ setUser ）接口在记录该账号 ID。
   * 调用后会上报一个账号登录（ user_login ）事件，并将这个设备的是否有用户注册过 （ has_user ） 属性置为 true。
   * 在重启应用或调用清除账号 ID （ clearUser ） 前，上报的事件都会带有该账号 ID。
   * @param options
   */
  setUser(options: { userId: string }): Promise<void>;

  /**
   * 清除账号 ID
   * @description 当用户进行登出时，可调用 clearUser 清除当前 SDK 中保存的账号 ID，
   * 后续上报的事件将不会带有账号 ID，调用该接口不会上报任何事件。
   * @param options
   */
  clearUser(): Promise<void>;

  /**
   * 设置账户名称
   * @description 在用户进行账号登录后，可调用该接口设置该账号的名称，调用后将更新账号的账号名称（ user_name ）属性。
   * @param options
   */
  setName(options: { name: string }): Promise<void>;

  /**
   * 设置账户等级
   * @description 在用户进行账号登录后，可调用该接口设置该账号的等级，调用将更新账号的账号等级（ level ）属性。
   * @param options
   */
  setLevel(options: { level: number }): Promise<void>;

  /**
   * 设置账号区服
   * @description 在用户进行账号登录后，可调用该接口设置该账号的区服信息，
   * 调用将初始化账号的首次区服（ first_server ）属性、更新账号的当前区服（ current_server ）属性。
   * @param options
   */
  setServer(options: { server: string }): Promise<void>;

  /**
   * 上报充值
   * @description 在用户进行充值后，可调用该接口上报充值信息，调用后将上报 charge 事件，并将传入的参数作为事件的属性。
   * @param options
   */
  onCharge(options: {
    orderId: string;
    product: string;
    amount: number;
    currencyType: string;
    payment: string;
  }): Promise<void>;

  /**
   * 上报事件
   * @description 在 SDK 初始化完成后可使用该接口上报事件
   * 事件名支持上报预置事件和自定义事件，其中自定义事件应以 # 开头
   * 事件属性的 key 值为属性的名称，支持 String 类型
   * 事件属性的 value 值为属性的名称，支持 String 256 ）、Long（取值区间为 [-9E15, 9E15] ）类型
   * 事件属性支持上报预置属性和自定属性，其中自定义属性应以 # 开头
   * 事件属性传入预置属性时，SDK 默认采集的预置属性将被覆盖
   * @param options
   */
  trackEvent(options: { eventName: string; properties: Object }): Promise<void>;

  /**
   * 设置通用事件属性
   * @description 对于一些所有事件都要携带的属性，建议使用通用事件属性实现。
   * 添加静态通用事件属性后，所有事件都会自动携带这些属性，无需手动添加。
   * @param options
   */
  registerStaticProperties(options: {
    staticProperties: Object;
  }): Promise<void>;

  /**
   * 删除单个静态通用事件属性
   * @description 删除单个静态通用事件属性
   * @param options
   */
  unregisterStaticProperty(options: { propertyName: string }): Promise<void>;

  /**
   * 清空全部静态通用属性
   * @description 清空全部静态通用属性
   * @param options
   */
  clearStaticProperties(): Promise<void>;

  /**
   * 设备属性更新操作
   * @description 对于常规的用设备属性，可使用改接口进行赋值操作，新的属性值将会直接覆盖旧的属性值
   * @param options
   */
  deviceUpdate(options: { properties: Object }): Promise<void>;

  /**
   * 设备初始化操作
   * @description 对于需要保证只有首次设置时有效的属性，可以使用该接口进行赋值操作，
   * 仅当前值为空时赋值操作才会生效，如当前值不为空，则赋值操作会被忽略。
   * 例如： 记录用户首次登陆的区服，客户端无法得知该属性是否已经被设置过，使用该接口保证仅第一次的设置会生效。
   * @param options
   */
  deviceInitialize(options: { properties: Object }): Promise<void>;

  /**
   * 设备属性累加操作
   * @description 对于数值类型的属性，可以使用该接口进行累加操作，调用后 TapDB 将对原属性值进行累加后保存结果值
   * @param options
   */
  deviceAdd(options: { properties: Object }): Promise<void>;

  /**
   * 账号属性更新操作
   * @description 使用方法同设备属性更新操作
   * @param options
   */
  userUpdate(options: { properties: Object }): Promise<void>;

  /**
   * 账号属性初始化操作
   * @description 使用方法同设备属性初始化操作
   * @param options
   */
  userInitialize(options: { properties: Object }): Promise<void>;

  /**
   * 账号属性累加操作
   * @description 使用方法同设备属性累加操作
   * @param options
   */
  userAdd(options: { properties: Object }): Promise<void>;
}
