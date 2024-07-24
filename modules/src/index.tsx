import { NativeModules } from 'react-native';

const WebViewSDK = NativeModules.WebViewSDK

export function testMethod(url: string) {
  return WebViewSDK.showWebView(url);
}
