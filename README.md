# Implementing Google's and Bing's custom search APIs

## Context

This app was created to implement the google and bing's APIs in a React project. The idea was to make it as simple as it can be using Redux for managing the state and Redux-Saga as a Redux middleware.

## Requirements

- A Google account.
- A Microsoft account with access to Azure Portal ([Create a free account](https://azure.microsoft.com/en-us/free/)).
- Node v12+ in your computer or server.
- npm v6.14+ in your computer or server.

## Configuration

1. Clone this repo in you computer.

   For this app to work you must complete the config file in `src/config/api.js` you have an object for Google and one for Bing, you must complete them for the app to work properly.

   To get this keys from your own custom search please:

   - [Configure Google's Custom Search JSON API](https://developers.google.com/custom-search/v1/overview)
   - [Configure Microsfts's Bing Search Resource](https://docs.microsoft.com/en-us/bing/search-apis/bing-web-search/create-bing-search-service-resource)

   Once you completed the config file you can proceed with:

2. Run `npm install`.
3. Run `npm start`. This will start the app in dev mode so you can easily follow the state of the app if you have installed the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

## Next steps

- Tests: you may have noticed the lack of tests in some parts of the app. I'll be adding unit tests and snapshots in future commits. For this, we will user Jest and Enzyme.
- Error Handling: There are many errors that we are not being specific about to the user. This must be changed to a more descriptive message and a secondary way to solve it.
- Adding more Search engines: Right now the app is atached to the currect state structure, meaning that if we don't want to configure Google o Bing we can't. The idea is to abstract our app from the engines and bundle them in a different way so we can easily remove or add other APIs for search.
