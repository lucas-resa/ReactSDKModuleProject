import { NativeModules } from 'react-native';

const WebViewSDK = NativeModules.WebViewSDK

export function showWebView(url: string) {
  return WebViewSDK.showWebView(url);
}
