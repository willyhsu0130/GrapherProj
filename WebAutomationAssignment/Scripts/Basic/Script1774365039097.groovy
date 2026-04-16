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

WebUI.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')

WebUI.click(findTestObject('Page_CURA Healthcare Service/a_btn-make-appointment'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/input_Username'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/input_Username_1'))

WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_Username'), 'John Doe')

WebUI.click(findTestObject('Page_CURA Healthcare Service/input_Password'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/input_Password_1'))

WebUI.setEncryptedText(findTestObject('Page_CURA Healthcare Service/input_Password_1'), 'g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM')

WebUI.click(findTestObject('Page_CURA Healthcare Service/button_btn-login'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/div_input-group-addon'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/td_19'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/th_'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/td_24'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/textarea_Comment'))

WebUI.waitForElementClickable(findTestObject('Page_CURA Healthcare Service/label_Medicaid'), 5)

WebUI.click(findTestObject('Page_CURA Healthcare Service/label_Medicaid'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/button_btn-book-appointment'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/a_menu-toggle'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Logout'))

WebUI.click(findTestObject('Page_CURA Healthcare Service/div_CURA Healthcare Service'))

WebUI.navigateToUrl('chrome://settings/')

