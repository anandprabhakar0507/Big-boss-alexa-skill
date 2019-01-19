//this is the sample index on codeacademy lesson

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Welcome to big boss';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const SKILL_NAME = 'big. boss.';
const GET_FACT_MESSAGE = '<audio src="https://content-na.drive.amazonaws.com/v2/download/presigned/n9w1b5BYovpl8H6ADLMLepXuH-0ZjmviyxXBdOAB3bUeJxFPc?download=true" />';
const HELP_MESSAGE = 'ask something or say me to exit';
const HELP_REPROMPT = 'How can i help you dear?';
const STOP_MESSAGE = '<audio src="https://content-na.drive.amazonaws.com/v2/download/presigned/zwztzzFcs0O9rrq5DzBpiM_HI6DLunzM8RSdODSdoYweJxFPc?download=true" />';




const HelloHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Hello Friend,how are you';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const CancelAndStopHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = 'Ok as you wish,Goodbye! and Have a nice day';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(error.trace);

    return handlerInput.responseBuilder
      .speak('can you please speak clearly')
      .getResponse();
  },
};

const data =[
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

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloHandler,
    HelpHandler,
    CancelAndStopHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
