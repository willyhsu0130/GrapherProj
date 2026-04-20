import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import groovy.json.JsonSlurper

// 1. CREATE the graph first to get a fresh ID
def createResponse = WS.sendRequest(findTestObject('Object Repository/Grapher/POST_Create_Graph'))
def jsonSlurper = new JsonSlurper()
def newGraph = jsonSlurper.parseText(createResponse.getResponseText())
def graphId = newGraph.id

println("Graph created with ID: " + graphId)

// 2. UPDATE the graph
// We pass the 'id' and 'newTitle' variables into the Object
def updateResponse = WS.sendRequest(findTestObject('Object Repository/Grapher/Patch_Update_Graph', [
    ('id') : graphId, 
    ('newTitle') : 'Updated by Katalon'
]))

// 3. VERIFY the update was successful (200 OK)
WS.verifyResponseStatusCode(updateResponse, 200)

// 4. LOG the response to see the updated object
def updatedGraph = jsonSlurper.parseText(updateResponse.getResponseText())
println("New Title is: " + updatedGraph.title)
println("New Data Row 1: " + updatedGraph.data[0])