# capacitor-boxo-sdk

A Capacitor wrapper over Appboxo SDK for IOS and Android.

## Install

```bash
npm install capacitor-boxo-sdk
npx cap sync
```

## API

<docgen-index>

* [`setConfig(...)`](#setconfig)
* [`openMiniapp(...)`](#openminiapp)
* [`setAuthCode(...)`](#setauthcode)
* [`closeMiniapp(...)`](#closeminiapp)
* [`sendCustomEvent(...)`](#sendcustomevent)
* [`sendPaymentEvent(...)`](#sendpaymentevent)
* [`getMiniapps()`](#getminiapps)
* [`hideMiniapps()`](#hideminiapps)
* [`logout()`](#logout)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setConfig(...)

```typescript
setConfig(options: ConfigOptions) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#configoptions">ConfigOptions</a></code> |

--------------------


### openMiniapp(...)

```typescript
openMiniapp(options: OpenMiniappOptions) => Promise<void>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#openminiappoptions">OpenMiniappOptions</a></code> |

--------------------


### setAuthCode(...)

```typescript
setAuthCode(options: { appId: string; authCode: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ appId: string; authCode: string; }</code> |

--------------------


### closeMiniapp(...)

```typescript
closeMiniapp(options: { appId: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ appId: string; }</code> |

--------------------


### sendCustomEvent(...)

```typescript
sendCustomEvent(customEvent: CustomEvent) => Promise<void>
```

| Param             | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`customEvent`** | <code><a href="#customevent">CustomEvent</a></code> |

--------------------


### sendPaymentEvent(...)

```typescript
sendPaymentEvent(paymentEvent: PaymentEvent) => Promise<void>
```

| Param              | Type                                                  |
| ------------------ | ----------------------------------------------------- |
| **`paymentEvent`** | <code><a href="#paymentevent">PaymentEvent</a></code> |

--------------------


### getMiniapps()

```typescript
getMiniapps() => Promise<MiniappListResult>
```

**Returns:** <code>Promise&lt;<a href="#miniapplistresult">MiniappListResult</a>&gt;</code>

--------------------


### hideMiniapps()

```typescript
hideMiniapps() => Promise<void>
```

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### Interfaces


#### ConfigOptions

| Prop                      | Type                                       |
| ------------------------- | ------------------------------------------ |
| **`clientId`**            | <code>string</code>                        |
| **`userId`**              | <code>string</code>                        |
| **`sandboxMode`**         | <code>boolean</code>                       |
| **`enableMultitaskMode`** | <code>boolean</code>                       |
| **`theme`**               | <code>'light' \| 'dark' \| 'system'</code> |
| **`isDebug`**             | <code>boolean</code>                       |
| **`showPermissionsPage`** | <code>boolean</code>                       |
| **`showClearCache`**      | <code>boolean</code>                       |


#### OpenMiniappOptions

| Prop                 | Type                                                  |
| -------------------- | ----------------------------------------------------- |
| **`appId`**          | <code>string</code>                                   |
| **`data`**           | <code>object</code>                                   |
| **`theme`**          | <code>'light' \| 'dark' \| 'system'</code>            |
| **`extraUrlParams`** | <code>object</code>                                   |
| **`urlSuffix`**      | <code>string</code>                                   |
| **`colors`**         | <code><a href="#coloroptions">ColorOptions</a></code> |


#### ColorOptions

| Prop                 | Type                |
| -------------------- | ------------------- |
| **`primaryColor`**   | <code>string</code> |
| **`secondaryColor`** | <code>string</code> |
| **`tertiaryColor`**  | <code>string</code> |


#### CustomEvent

| Prop            | Type                |
| --------------- | ------------------- |
| **`appId`**     | <code>string</code> |
| **`requestId`** | <code>number</code> |
| **`type`**      | <code>string</code> |
| **`errorType`** | <code>string</code> |
| **`payload`**   | <code>object</code> |


#### PaymentEvent

| Prop                   | Type                |
| ---------------------- | ------------------- |
| **`appId`**            | <code>string</code> |
| **`transactionToken`** | <code>string</code> |
| **`miniappOrderId`**   | <code>string</code> |
| **`amount`**           | <code>number</code> |
| **`currency`**         | <code>string</code> |
| **`status`**           | <code>string</code> |
| **`hostappOrderId`**   | <code>string</code> |
| **`extraParams`**      | <code>object</code> |


#### MiniappListResult

| Prop           | Type                       |
| -------------- | -------------------------- |
| **`miniapps`** | <code>[MiniappData]</code> |
| **`error`**    | <code>string</code>        |


#### MiniappData

| Prop              | Type                |
| ----------------- | ------------------- |
| **`appId`**       | <code>string</code> |
| **`name`**        | <code>string</code> |
| **`category`**    | <code>string</code> |
| **`description`** | <code>string</code> |
| **`logo`**        | <code>string</code> |

</docgen-api>
