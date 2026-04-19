import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.util.KeywordUtil as KeywordUtil

WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:5173/login')

// 1. Login
WebUI.setText(findTestObject('Object Repository/GrapherWeb/LoginPage/input_username'), 'willyhsu0130')
WebUI.setEncryptedText(findTestObject('Object Repository/GrapherWeb/LoginPage/input_password'), 'RigbBhfdqOBGNlJIWM1ClA==')
WebUI.click(findTestObject('Object Repository/GrapherWeb/LoginPage/button_Sign in'))

WebUI.waitForElementVisible(findTestObject('GrapherWeb/GraphsPage/input_Search graphs'), 10)

// 2. Navigate to specific graph (ID 47)
WebUI.navigateToUrl('http://localhost:5173/graphs/47')

// 3. Edit Cells
// Double click cell 1 and set text to '1'
WebUI.doubleClick(findTestObject('GrapherWeb/GraphPage/td_gridcell_1'))
WebUI.setText(findTestObject('GrapherWeb/GraphPage/textarea_handsontableInput'), '1')
WebUI.click(findTestObject('GrapherWeb/GraphPage/td_gridcell_2')) // Click away to trigger save/blur

// Double click cell 2 and set text to 'Test'
WebUI.doubleClick(findTestObject('GrapherWeb/GraphPage/td_gridcell_2'))
WebUI.setText(findTestObject('GrapherWeb/GraphPage/textarea_handsontableInput'), 'Test')
WebUI.click(findTestObject('GrapherWeb/GraphPage/td_gridcell_1')) // Click away to save

// 13. Click away to trigger the save event in Handsontable
WebUI.click(findTestObject("GrapherWeb/GraphPage/td_gridcell_1"))

// --- THE FIX: Wait for the API to finish saving ---
// Handsontable and your Spring API need a moment to complete the 'PUT' request.
WebUI.delay(2) 

// 14. Now refresh
WebUI.refresh()
WebUI.waitForPageLoad(5)

// 16. Check if "1" is present
WebUI.verifyElementPresent(findTestObject("GrapherWeb/GraphPage/td_1"), 5)

// 17. Check if "Test" is present (use a longer timeout to allow the table to render)
boolean isOnePresent = WebUI.verifyElementPresent(findTestObject("GrapherWeb/GraphPage/td_1"), 5)

// 17. Verify "Test" is present
boolean isTestPresent = WebUI.verifyTextPresent("Test", false)

if (isOnePresent && isTestPresent) {
    KeywordUtil.logInfo("SUCCESS: Data '1' and 'Test' persisted after refresh.")
} else {
    KeywordUtil.markFailed("FAILURE: Data lost after refresh. Check if your Spring Boot backend is saving the cell changes.")
}

WebUI.closeBrowser()