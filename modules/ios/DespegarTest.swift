import Foundation
import DespegarWebKit

@objc(WebViewSDK)
class WebViewSDK: NSObject {
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    @objc
    func showWebView(_ url: String) {
        DispatchQueue.main.async {
            self._initializeWebView(url: url)
        }
    }
    
    func _initializeWebView(url: String) {
        let controller = RCTPresentedViewController()
        let config = DespegarWebviewKitConfiguration(url: URL(string: url)!)
        config.features = [.closeButtonEnabled]
        let webVC = DespegarWebviewKit.createDespegarWebviewNavigation(configuration: config)
        webVC.modalPresentationStyle = .fullScreen
        controller?.present(webVC, animated: true)
    }
}
