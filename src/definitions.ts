export interface AppboxoPlugin {
  /**
   * Set global configs
   */
  setConfig(options: ConfigOptions): Promise<void>;
  /**
   * Open miniapp with options
   */
  openMiniapp(options: OpenMiniappOptions): Promise<void>;
  /**
   * get AuthCode from hostapp backend and send it to miniapp
   */
  setAuthCode(options: { appId: string; authCode: string }): Promise<void>;
  /**
   * close miniapp by appId
   */
  closeMiniapp(options: { appId: string }): Promise<void>;
  /**
   * send custom event to miniapp
   */
  sendCustomEvent(customEvent: CustomEvent): Promise<void>;
  /**
   * send payment event to miniapp
   */
  sendPaymentEvent(paymentEvent: PaymentEvent): Promise<void>;
  /**
   * Get list of miniapps
   */
  getMiniapps(): Promise<MiniappListResult>;
  /**
   * Miniapp opens on a native screen. To show payment processing page need to hide miniapp screen.
   * To use this function need to enable 'enableMultitaskMode: true' in Appboxo.setConfigs()
   */
  hideMiniapps(): Promise<void>;
  /**
   * When host app user logs out, it is highly important to clear all miniapp storage data.
   */
  logout(): Promise<void>;
}

export interface ConfigOptions {
  /**
   * your client id from dashboard
   */
  clientId: string;
  /**
   * hostapp userId, will be used for the Consent Management
   */
  userId?: string;
  /**
   * switch to sandbox mode
   */
  sandboxMode?: boolean;
  /**
   * Each miniapp appears as a task in the Recents screen.
   * !It works only on android devices.
   */
  enableMultitaskMode?: boolean;
  /**
   * theme for splash screen and other native components used inside miniapp.
   */
  theme?: 'light' | 'dark' | 'system';
  /**
   * enables webview debugging
   */
  isDebug?: boolean;
  /**
   * use it to hide "Settings" from Miniapp menu
   */
  showPermissionsPage?: boolean;
  /**
   * use it to hide "Clear cache" from Miniapp menu
   */
  showClearCache?: boolean;
}

export interface OpenMiniappOptions {
  /**
   * miniapp id
   */
  appId: string;
  /**
   * (optional) data as Map that is sent to miniapp
   */
  data?: object;
  /**
   * (optional) miniapp theme "dark" | "light" (by default is system theme)
   */
  theme?: 'light' | 'dark' | 'system';
  /**
   * (optional) extra query params to append to miniapp URL (like: http://miniapp-url.com/?param=test)
   */
  extraUrlParams?: object;
  /**
   * (optional) suffix to append to miniapp URL (like: http://miniapp-url.com/?param=test)
   */
  urlSuffix?: string;
  /**
   * (optional) provide colors to miniapp if miniapp supports
   */
  colors?: ColorOptions;
  /**
   * (optional) use to skip miniapp splash screen
   */
  enableSplash?: boolean;
}

export interface ColorOptions {
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
}

export interface CustomEvent {
  appId: string;
  requestId: number;
  type: string;
  errorType?: string;
  payload?: object;
}

export interface PaymentEvent {
  appId: string;
  transactionToken?: string;
  miniappOrderId?: string;
  amount: number;
  currency?: string;
  status?: string;
  hostappOrderId?: string;
  extraParams?: object;
}

export interface LifecycleEvent {
  appId: string;
  /**
   * onLaunch -  Called when the miniapp will launch with Appboxo.open(...)
   * onResume -  Called when the miniapp will start interacting with the user
   * onPause -  Called when the miniapp loses foreground state
   * onClose -  Called when clicked close button in miniapp or when destroyed miniapp page
   * onError -  Called when miniapp fails to launch due to internet connection issues
   * onUserInteraction -  Called whenever touch event is dispatched to the miniapp page.
   * onAuth -  Called when the miniapp starts login and user allows it
   */
  lifecycle: string;
  error?: string;
}

export interface MiniappListResult {
  miniapps?: [MiniappData];
  error?: string;
}

export interface MiniappData {
  appId: string;
  name: string;
  category: string;
  description: string;
  logo: string;
}
