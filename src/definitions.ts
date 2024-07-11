import type { PluginListenerHandle } from '@capacitor/core';

export interface AppboxoPlugin {
  setConfig(options: ConfigOptions): Promise<void>;
  openMiniapp(options: OpenMiniappOptions): Promise<void>;
  setAuthCode(options: {appId:string, authCode: string}): Promise<void>;
  closeMiniapp(options: {appId: string}): Promise<void>;
  sendCustomEvent(customEvent: CustomEvent): Promise<void>;
  sendPaymentEvent(paymentEvent: PaymentEvent): Promise<void>;
  async getMiniapps(): Promise<MiniappListResult>;
  hideMiniapps(): Promise<void>;
  logout(): Promise<void>;
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
  appId: string;
  requestId: number;
  type: string;
  errorType?: string;
  payload?: object;
}

export interface PaymentEvent{
  appId: string;
  transactionToken?: string;
  miniappOrderId?: string;
  amount: number;
  currency?: string;
  status?: string;
  hostappOrderId?: string;
  extraParams?: object;
}

export interface LifecycleEvent{
  appId: string;
  lifecycle: string;
  error?: string;
}

export interface MiniappListResult{
  miniapps?: [MiniappData];
  error?: string;
}

export interface MiniappData{
  appId: string;
  name: string;
  category: string;
  description: string;
  logo: string;
}

addListener(
    eventName: 'custom_event',
    listenerFunc: (customEvent: CustomEvent) => void,
): Promise<PluginListenerHandle>;

addListener(
    eventName: 'payment_event',
    listenerFunc: (paymentEvent: PaymentEvent) => void,
): Promise<PluginListenerHandle>;

addListener(
    eventName: 'miniapp_lifecycle',
    listenerFunc: (lifecycle: LifecycleEvent) => void,
): Promise<PluginListenerHandle>;
