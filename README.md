# ALEXA TUTORIAL
Here is the code and instructional content you need to create your first Alexa skill.

# Prerequisites
* An Amazon developer account.
* An Amazon Web Services account.
* AWS Lambda
* Knowledge of Node.js and JSON.

For more information visit: https://developer.amazon.com/docs/ask-overviews/requirements-to-build-a-skill.html

# Alexa skills
*	__Intents__: An intent represents an action that fulfils a user's spoken request. Intents can optionally have arguments called slots.
*	__Sample utterances__: A set of likely spoken phrases mapped to the intents. This should include as many representative phrases as possible.
*	__AWS Lambda__ is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running. 

### Table 1
| Intent     | Sample utterances|
|------------|-------------------|
| FirstIntent | * First intent <br> * Tell me about first intent <br> * Activate first intent|
| SecondIntent| * Second intent <br> * Tell me about second intent <br> * Activate second intent|
| ThirdIntent | * Third intent <br> * Tell me about third intent <br> * Activtate third intent |

## Creating a new skill
To create your Alexa skill model, complete the following steps:

1.	Navigate to https://developer.amazon.com/home.html. 
2.	Log on.
3.	Navigate to the __Alexa tab__ and click __Alexa Skills Kit__.
4.	Click __Create skill__.
5.  Enter your skill's name in the __Skill name__ field.
6.  Select __Custom__.
7.  Click __Create skill__.
8.  Select __Start from scratch__.
9.  Click __Choose__.

## Creating an invocation name

1.  In the __CUSTOM__ menu, navigate to __Invocation__.
2.  Enter your __Skill Invocation Name__.
3.  Click __Save Model__

## Creating intents
You must create intents to represent a user's spoken request. To create your intents, complete the following steps:

1.  In the __CUSTOM__ menu, navigate to __Intents__.
2.  Click __Add__.
3.  Click __Add intent__.
4.  In the __Create custom intent__ field enter the following name: _FirstIntent_.
5.  Fill in the sample utterances for FirstIntent listed in __Table 1__.
6.  Click __Save Model__.
7.  Repeat steps 1 - 7 for SecondIntent and ThirdIntent.
8.	Click __Build Model__.

## Setting up your Endpoint
To set up your __Endpoint__ to receive POST requests when a user interacts with your Alexa Skill, complete the following steps:

1.  Navigate to __Service Endpoint Type__ and click __AWS Lambda ARN__.
2.  Navigate to __Your Skill ID__ and copy it to your clipboard.
3.  Do not close your developer console.

## Setting up Lambda

1.	Open a new tab and navigate to https://console.aws.amazon.com/.
2.	Navigate to the __AWS Services__ tab and click __Lambda__.
3.	Click __Create function__.
4.  Select __Author from scratch__.
5.  Enter your __Function name__.
6.  In the __Runtime__ drop-down menu, select __Node.js 10.x__.
7.  Click __Create function__.
8.  Click __Add trigger__ and select __Alexa Skills Kit__ from the drop-down menu. 
9.  Add the __Skill ID__ that you copied from the developer console.
10. Click __Add__.
11. Click __Save__.
12. Copy the ARN number on the top right corner of your window.
13. Navigate to the developer console in your browser tab. 
14. Enter the ARN number in the __Default Region__ field.
15. Click __Save Endpoints__.
16. Navigate to AWS and click on your function name.
17. In the __Function code__ window, add the _index.js_ and _messageResponses.js_ files to your folder.
18. Click __Save__.

## Building your model

1.  Navigate to the developer console.
2.  In your skill, navigate to the __CUSTOM__ menu and click __Intents__.
3.  Click __Build Model__.

## Testing your new Intent
1.	In the Amazon developer console navigate to the __Test__ tab.
4.	Where it says _Type or click and hold the mic_ type _Alexa ask_ + (Your skill name) and press __Enter__, then type “Ask (Your skill name) to (utterance)”. 
5.	If the outputs are: "This is your invocation message" and "This is your (intent)" you have been successful.
