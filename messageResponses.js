module.exports = {
        "invocationMessage" : {
									type: "SSML",
									ssml: '<speak><voice name="Kendra">This is your invocation message.</voice></speak>'
								},
        "unknownMessage"     : {
									type: "PlainText",
									text: "I'm unsure what to do now"
								},
 
	  "firstIntentMessage"  : {
									type: "SSML",
									ssml: '<speak><voice name="Kendra">This is your first intent</voice></speak>'
								},
								
	  "secondIntentMessage" : {
									type: "SSML",
									ssml: '<speak><voice name="Kendra">This is your second intent</voice></speak>'
								},

	  "thirdIntentMessage"  : {
									type: "SSML",
									ssml: '<speak><voice name="Kendra">This is your third intent</voice></speak>'
								}
                           
}
