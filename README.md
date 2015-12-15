# React Car Registration
A react component for validating car registrations.

## Installation
```
npm install
```

## Development
### Running the dev server

#### Props
`title`  String - Heading to appear in modal  
`message`  String - Descriptive message to appear in modal  
`handleAccept`  Function - Callback for when the user accepts the upsell  
`handleDecline`  Function - Callback for when the user declined the upsell  
`handleDismiss`  Function - Callback for when the user dismisses the modal  
`handleLaunch`  Function - Callback for when the user opens the modal  
`acceptButtonLabel`  String - Optional update the text for the accept button (default is "Yes please")  
`declineButtonLabel`  String - Optional update the text for the decline button (default is "No thanks")  
`animation`  Boolean - Optional animate in/out the modal (default is false)  
`closeButton`  Boolean - Optional show the close `x` at the top right of the modall (default is true)

### TrackableUpsellModal

Wrapper for UpsellModal that includes [TrackerJS](https://github.com/holidayextras/tracker).

```
const { TrackableUpsellModal } = require('react-upsell-modal');
const { render } = require('react-dom');

render(<TrackableUpsellModal {...props}>Button Text Here</TrackableUpsellModal>, document.getElementById('example'));
```
#### Props
`trackingData`  Object - data to send to the various tracking services


## Development

### Installation

```
git clone git@github.com:holidayextras/react-upsell-modal.git
cd react-upsell-modal
npm install
```

### Running the demo
```
npm start
```

### Testing
Unit tests are written in mocha and uses `sinon` and `chai`. To run the suite use the following command:
```
npm test
```

To see the coverage report and debug any issues open `coverage/lcov-report/index.html` in your browser.

### Linting
To check the code run:
```
npm run lint
```
