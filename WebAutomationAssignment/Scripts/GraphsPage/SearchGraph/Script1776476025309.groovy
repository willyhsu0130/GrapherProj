import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import org.openqa.selenium.Keys as Keys
import com.kms.katalon.core.util.KeywordUtil as KeywordUtil

// 1. Setup & Login
WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:5173/login')

WebUI.setText(findTestObject('GrapherWeb/GraphsPage/input_username'), 'willyhsu0130')
WebUI.setEncryptedText(findTestObject('Object Repository/GrapherWeb/LoginPage/input_password'), 'RigbBhfdqOBGNlJIWM1ClA==')

// Using ENTER key to submit (matches your search style)
WebUI.sendKeys(findTestObject('Object Repository/GrapherWeb/LoginPage/input_password'), Keys.chord(Keys.ENTER))

// 2. Search Execution
// Wait for the search bar to actually be ready
WebUI.waitForElementVisible(findTestObject('GrapherWeb/GraphsPage/input_Search graphs'), 10)

String searchTerm = 'Test1'
WebUI.setText(findTestObject('GrapherWeb/GraphsPage/input_Search graphs'), searchTerm)

// 3. Verification (Foolproofing)

WebUI.delay(1)

// Check if the result we wanted is there
boolean foundResult = WebUI.waitForElementPresent(findTestObject('Object Repository/GrapherWeb/GraphsPage/thumbnail_Test1'), 5)

if (foundResult) {
    KeywordUtil.logInfo("SUCCESS: Search found the graph '" + searchTerm + "'")
} else {
    KeywordUtil.markFailedAndStop("FAILURE: Search for '" + searchTerm + "' yielded no results.")
}

// Optional: Verify that a graph that shouldn't be there is gone
// WebUI.verifyElementNotPresent(findTestObject('Object Repository/GrapherWeb/GraphsPage/thumbnail_DifferentGraph'), 2)

WebUI.closeBrowser()