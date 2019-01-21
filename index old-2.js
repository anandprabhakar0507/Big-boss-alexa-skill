/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 **/

const Alexa = require('alexa-sdk');

const FACTS = [
"I am going to tell you a fact from bhagvad geeta spoken by lord krishna in mahabharata yada yada hi dharmasya glanir bhavti bhartah abyuthanm adharmasya tadaatmaanam srijanyahamm paritranaay saadhunaam vinaashay cha dushkritaam dharma sansthapnaarthya sambhavaami yuge yuge means god says that whenever there is an occurence of lust,cheating, violence on earth then i come again and again and destroy all those bad evils and establish a fresh and pure life again on earth",
"Let me tell you about someone named Anand prabhakar.He is a student,web developer,data scientist and an active programmer he learns and practices html,css,js,python,java,go,sql,node-json,bootstrap,jquery and php and he loves exploring new things",
"Do you know than i am made using a serverless application at lambda arn..and i can also be configured in echo dot devices i am amazon alexa i am the live example of artificial intelligence",
"i am going to tell you a fact spoken by saige valmiki in ramayan,Mother and motherland is more great than the heaven",
"Earth is the only known planet till now that have life and we are very lucky that we belong from earth..The whole earth is family",
  "i am alexa and i am live example of IoT and Artficial intelligence",
  "You are very lucky as you belong from earth because earth is a planet which have life",
  "Do you know rainbow can be seen circular from aeroplane",
  "We see light more faster than listening sound because speed of light is more than sound",
  "there are seven continents in the world"
  "largest desert in the world is sahara in africa",
  "the largest delta in the world is sundarban delta in india",
  "the Bhagvata geeta was spoken by krishna",
  "olympus mons on mars is largest known mountain in universe",
  "If you travel at speed of light for five years then you will be only five years older but you friends on earth will grow 65 years older",
  "data scientists is the sexiest job in the twenty first century",
  "Do you konw kailash mountain is only mountain on which no one has climbed till now and it is less in height than mount everest",
  "honesty is the best policy",
  "do you know that love is a feeling produced by a chemical released from brain when we see someone",
  "do you know our veins and arteries can bind earth three times",
  "do you know that our eyes have capacity of five hundred seventy six megapixel"
];

const SKILL_NAME = 'big. boss.';
const GET_FACT_MESSAGE = '<audio src="https://archive.org/download/tellmeafact/tellmeafact.mp3" />';
const HELP_MESSAGE = 'You can say tell me a fact, or, you can say exit?';
const HELP_REPROMPT = 'How can i help your dear?';
const STOP_MESSAGE = '<audio src="https://archive.org/download/tellmeafact/awesome.mp3" />';

const handlers = {
  'LaunchRequest': function () {
    this.emit('GetFactIntent');
  },
  'GetFactIntent': function () {
    const factArr = FACTS;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = GET_FACT_MESSAGE + randomFact;

    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(':responseReady');
  },
  'SessionEndedRequest': function () {
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
};

exports.handler = function (event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = "amzn1.ask.skill.00b39a65-f6ce-49f5-a9c0-15da9f2d26fb";
  alexa.registerHandlers(handlers);
  alexa.execute();
};
