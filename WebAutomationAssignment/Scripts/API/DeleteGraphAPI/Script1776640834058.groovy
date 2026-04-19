import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import groovy.json.JsonSlurper

// 1. CREATE the graph
def createResponse = WS.sendRequest(findTestObject('Object Repository/Grapher/POST_Create_Graph'))
WS.verifyResponseStatusCode(createResponse, 201) // Or 200 depending on your Spring API

// 2. GET the ID from the response
def jsonSlurper = new JsonSlurper()
def newGraph = jsonSlurper.parseText(createResponse.getResponseText())
def graphId = newGraph.id

println("Successfully created graph with ID: " + graphId)

// 3. DELETE the graph using the ID we just got
// We use 'setEntityProperty' to pass the ID into the URL of the Delete object
def deleteResponse = WS.sendRequest(findTestObject('Object Repository/Grapher/DELETE_Graph', [('id') : graphId]))

// 4. VERIFY it is gone
WS.verifyResponseStatusCode(deleteResponse, 200)
println("Successfully deleted graph: " + graphId)