import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import internal.GlobalVariable as GlobalVariable
import groovy.json.JsonSlurper

// 1. Send the Login Request (Make sure this object is in your Object Repository)
def response = WS.sendRequest(findTestObject('Object Repository/Grapher/POST_Login'))

// 2. Parse the JSON response
def jsonSlurper = new JsonSlurper()
def jsonResponse = jsonSlurper.parseText(response.getResponseText())

// 3. Store the JWT in your Global Variable
// Assuming your API returns { "token": "ey..." } or { "jwt": "ey..." }
GlobalVariable.G_JWT_TOKEN = jsonResponse.token 

println("JWT Token stored successfully: " + GlobalVariable.G_JWT_TOKEN)