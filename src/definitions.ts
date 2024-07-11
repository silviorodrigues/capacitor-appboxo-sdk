export interface AppboxoPlugin {
  setConfig(options: ConfigOptions):Promise<void>;
  openMiniapp(options: OpenMiniappOptions):Promise<void>;
  setAuthCode(options: {appId:string, authCode: string}):Promise<void>;
  closeMiniapp(options: {appId: string}):Promise<void>;
  sendCustomEvent(options: {appId: string, customEvent: CustomEvent}):Promise<void>;
  sendPaymentEvent(options: {appId: string, paymentEvent: PaymentEvent}):Promise<void>;
  getMiniapps():Promise<void>;
  hideMiniapps():Promise<void>;
  logout():Promise<void>;
}

export interface ConfigOptions {
  clientId: string;
  userId?: string;
  sandboxMode?: boolean;
  enableMultitaskMode?: boolean;
  theme?: 'light' | 'dark' | 'system';
  isDebug?: boolean;
  showPermissionsPage?: boolean;
  showClearCache?: boolean;
}

export interface OpenMiniappOptions{
  appId: string;
  data?: object;
  theme?: 'light' | 'dark' | 'system';
  extraUrlParams?: object;
  urlSuffix?: string;
  colors?: ColorOptions;
}

export interface ColorOptions{
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
}

export interface CustomEvent{
  requestId: number;
  type: string;
  errorType?: string;
  payload?: object;
}

export interface PaymentEvent{
  transactionToken?: string;
  miniappOrderId?: string;
  amount: number;
  currency?: string;
  status?: string;
  hostappOrderId?: string;
  extraParams?: object;
}
