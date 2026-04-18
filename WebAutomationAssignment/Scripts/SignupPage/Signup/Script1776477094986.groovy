import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.util.KeywordUtil as KeywordUtil

// 1. Setup
WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:5173/signup')

// 2. Data Entry (Variables bound to your Excel/Data File)
WebUI.setText(findTestObject('GrapherWeb/SignupPage/input_username'), username)
WebUI.setText(findTestObject('GrapherWeb/SignupPage/input_firstName'), firstName)
WebUI.setText(findTestObject('GrapherWeb/SignupPage/input_lastName'), lastName)
WebUI.setText(findTestObject('GrapherWeb/SignupPage/input_email'), email)
WebUI.setText(findTestObject('GrapherWeb/SignupPage/input_password'), password)

WebUI.click(findTestObject('GrapherWeb/SignupPage/button_Get Started'))

// 3. Simple Validation Logic
if (isSuccess== "true") {
    // If we expect success, verify we landed on the Login or Dashboard page
    boolean success = WebUI.waitForElementPresent(findTestObject('GrapherWeb/LoginPage/button_Sign in'), 5)
    if (success) {
        KeywordUtil.logInfo("SUCCESS: Valid user " + username + " registered correctly.")
    } else {
        KeywordUtil.markFailed("FAILURE: Valid user " + username + " could not register.")
    }
} else {
    // If we expect an error, just check if ANY error text is visible
    // You can use a generic object that targets your error class (e.g., .text-destructive)
    boolean hasError = WebUI.waitForElementVisible(findTestObject('Object Repository/GrapherWeb/SignupPage/error_message'), 3)
    
    if (hasError) {
        KeywordUtil.logInfo("SUCCESS: System correctly blocked invalid user: " + username)
    } else {
        KeywordUtil.markFailed("FAILURE: Invalid user " + username + " was allowed to submit without error!")
    }
}

WebUI.closeBrowser()