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

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:5173/graphs')

WebUI.click(findTestObject('GrapherWeb/nav_grapher'))

WebUI.setText(findTestObject('GrapherWeb/LoginPage/input_username'), 'willyhsu0130')

WebUI.click(findTestObject('GrapherWeb/LoginPage/input_password'))

WebUI.setEncryptedText(findTestObject('GrapherWeb/LoginPage/input_password'), 'RigbBhfdqOBGNlJIWM1ClA==')

WebUI.click(findTestObject('GrapherWeb/button_Sign in'))

WebUI.click(findTestObject('GrapherWeb/button_New graph'))

WebUI.setText(findTestObject('GrapherWeb/LoginPage/input_text-xl'), 'Test1')

// Give the React app/Spring Boot backend 1 second to save the record
WebUI.delay(1)

WebUI.navigateToUrl('http://localhost:5173/graphs')

// FIX: Use verifyElementPresent to return a boolean
// 5 is the timeout in seconds
boolean isCreated = WebUI.verifyElementPresent(findTestObject('GrapherWeb/GraphsPage/graph_thumbnail'), 5, FailureHandling.OPTIONAL)

if (isCreated) {
    // Pro-Tip: use a literal string since you didn't define graphName variable
    com.kms.katalon.core.util.KeywordUtil.markPassed("Assertion Passed: New graph record is visible in the list.")
} else {
    com.kms.katalon.core.util.KeywordUtil.markFailed("Assertion Failed: New graph record did not appear in the list.")
}
WebUI.closeBrowser()

