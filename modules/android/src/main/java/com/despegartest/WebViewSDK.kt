package com.despegartest

import android.content.Intent
import android.net.Uri
import com.despegar.whitelabel.webkit.presentation.DespegarWebviewKit
import com.despegar.whitelabel.webkit.presentation.enviroment.DespegarWebKitFeatures
import com.despegar.whitelabel.webkit.presentation.enviroment.DespegarWebviewKitConfiguration
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class WebViewSDK(private val reactContext: ReactApplicationContext)
  : ReactContextBaseJavaModule(reactContext) {
  override fun getName(): String = "WebViewSDK"

  @ReactMethod fun showWebView(url: String) {
    val activity = reactContext.currentActivity

    val configuration = DespegarWebviewKitConfiguration(uri = Uri.parse(url))
    configuration.features = listOf(DespegarWebKitFeatures.CLOSE_BUTTON_ENABLE)
    val intent: Intent = DespegarWebviewKit.createWebviewIntent(configuration)

    activity?.let {
      it.startActivity(intent)
    }
  }
}
