# iotplayground
Playground for me to learn different IoT stacks

This project is primarily for me to learn - the goal is to develop a cross-container/cross-platform app.  I don't expect it to be particularly useful - but to express some questions about IoT's state today.

Platforms:
- SmartThings
- AWS, AWS IoT
- Alexa
- Arduino
- Android
- [IBM Watson] - if I get to it for personalization, ML
- IFTTT - using the make channel and Node.js

Tech Choices:
- Groovy (for smartthings)
- Node.js
- nools (maybe not, aws has enough support for rules so I don't need to learn this)
- mqtt.js (for use with AWS IoT)

Capabilities:
- Rules engine to define 'complex' states to trigger actions
- Voice commands
- Data storage, and 'learning' to drive facts & assertions in rules
- Android app to interact


Concept 1:
Capture all the events across devices in the house to determine patterns that can be converted to scenes.

Need to do some feature processing to normalize the data for the ML engine - specifically:
- All events within a certain time period (10m?) considered 'same' event
- store 'day part' as part of data (perhaps determine actual day parts from the data)
- discover chains of actions; eg. TV on, lights down...  Door opens, lights on... , etc.
