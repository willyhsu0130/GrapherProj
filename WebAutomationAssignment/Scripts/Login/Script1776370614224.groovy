import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.util.KeywordUtil

WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:5173/login')

boolean success = Boolean.parseBoolean(isSuccess.toString())

WebUI.setText(findTestObject('Page_grapherweb/input_username'), username)
WebUI.setText(findTestObject('Page_grapherweb/input_password'), password)
WebUI.click(findTestObject('Page_grapherweb/button_Sign in'))

if (success) {
    // --- Success: Wait for Redirect ---
    boolean urlMatched = false
    long timeout = System.currentTimeMillis() + 10000
    
    while (System.currentTimeMillis() < timeout) {
        if (WebUI.getUrl().contains('/graphs')) {
            urlMatched = true
            break
        }
        WebUI.delay(0.5)
    }

    if (urlMatched) {
        WebUI.waitForElementVisible(findTestObject('Page_grapherweb/p_welcome_back'), 5)
        KeywordUtil.markPassed("SUCCESS: Logged in and redirected.")
    } else {
        KeywordUtil.markFailed("ERROR: Redirect timed out. URL: " + WebUI.getUrl())
    }

} else {
    // --- Failure: Just check if Error UI appears ---
    // This passes Requirement 3.2.1 by verifying the "Error message for invalid credentials" shows up
    boolean errorVisible = WebUI.waitForElementVisible(findTestObject('Page_grapherweb/error_message'), 5)
    
    if (errorVisible) {
        WebUI.verifyMatch(WebUI.getUrl(), '.*/login.*', true)
        KeywordUtil.markPassed("SUCCESS: Login rejected and error UI is visible.")
    } else {
        KeywordUtil.markFailed("ERROR: Login failed but no error message appeared on screen.")
    }
}

WebUI.closeBrowser()