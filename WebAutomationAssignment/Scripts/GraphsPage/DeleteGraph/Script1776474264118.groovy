import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys
import com.kms.katalon.core.util.KeywordUtil as KeywordUtil

WebUI.openBrowser('')
WebUI.navigateToUrl('http://localhost:5173/login')

// Login
WebUI.setText(findTestObject('Object Repository/GrapherWeb/LoginPage/input_username'), 'willyhsu0130')
WebUI.setEncryptedText(findTestObject('Object Repository/GrapherWeb/LoginPage/input_password'), 'RigbBhfdqOBGNlJIWM1ClA==')
WebUI.click(findTestObject('Object Repository/GrapherWeb/LoginPage/button_Sign in'))

//Check if Test1 is here first.
boolean existsBeforeDelete = WebUI.waitForElementPresent(findTestObject('Object Repository/GrapherWeb/GraphsPage/thumbnail_Test1'), 10)

if (!existsBeforeDelete) {
	KeywordUtil.markFailedAndStop("PRE-CONDITION FAILED: The graph 'Test1' does not exist. Please create it before running the delete test.")
}

// Delete Flow
WebUI.click(findTestObject('Object Repository/GrapherWeb/GraphsPage/test1_ellipsis'))
WebUI.click(findTestObject('Object Repository/GrapherWeb/GraphsPage/span_Delete Graph'))

// Wait for the Shadcn AlertDialog to pop up
WebUI.waitForElementVisible(findTestObject('Object Repository/GrapherWeb/GraphsPage/button_Confirm Delete'), 5)
WebUI.click(findTestObject('Object Repository/GrapherWeb/GraphsPage/button_Confirm Delete'))

// --- ASSERTIONS ---
// Check that the specific record is gone
boolean isGone = WebUI.verifyElementNotPresent(findTestObject('Object Repository/GrapherWeb/GraphsPage/thumbnail_Test1'), 5)

if (isGone) {
    KeywordUtil.logInfo("SUCCESS: Graph was removed from the table.")
} else {
    KeywordUtil.markFailed("FAILURE: Graph still exists after deletion.")
}

WebUI.closeBrowser()

