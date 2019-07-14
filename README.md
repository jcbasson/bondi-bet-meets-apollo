# Bondi Bets Proposed Tech Stack 2019

Front-end stack:
```
React, Redux, Redux-Saga, Apollo, Lodash, Typescript, Redux-thunk, Styled-components, Reselect
```
Why Apollo (Please refer to this repo for a sample of how a component would work):
```
    • Built in support for Polling and Websockets
    • Easy developer experience, very declarative. Even provides a way to see what data was previously fetched, allowing us to compare previous with current
    • Middle man that can pull in data from our own REST APIs as well as any other service to provide us exactly what we need in one response.
    • Avoid complex REST url GET parameters
    • Data is normalised server side
    • Fetch only what we need
    • No need for multiple REST calls to get all the data we need, everything comes from one request
    • Generates clearly defined schemas with types so easy for developers to tell what  the data looks like without having to look to REST docs and write up our own types
    • We can define our own schemas the server generates and hence the data the graphql query endpoints return, allowing for cleaner components because the components drive how the schema looks
    • Provides a flexible network layer for us
    • Allows us to separately store our network/business data from our app state.We might only use IDs coming from the network/business data in linkage with app state
    • Although we can’t use native http caching like with REST, this application will need fresh updates every 5 to 10 seconds
    • Apollo is way more user friendly with much better documentation than Relay
```
Why styled-components:
```
Styles live with components and controlled with javascript and CSS, No need for magic class/id selector strings anymore
```
