import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import internal.GlobalVariable as GlobalVariable
import groovy.json.JsonSlurper

// 1. Send the Login Request (Make sure this object is in your Object Repository)
def response = WS.sendRequest(findTestObject('Object Repository/Grapher/GET_All_Graphs'))

// 2. Parse the JSON response
def jsonSlurper = new JsonSlurper()
def jsonResponse = jsonSlurper.parseText(response.getResponseText())

WS.verifyResponseStatusCode(response, 200)

println("My Graphs: " + jsonResponse)

// If you want to see a specific part, like the name of the first graph:
println("First Graph Name: " + jsonResponse[0].name)