# React Car Registration
A react component for validating car registrations.

#### Props
* `label`  String - Header that appears next to select box
* `options`  Array - Contains options for the select  
  * `text`  String - Required, option name
  * `placeholder`  String - Placeholder that will appear in the input field
  * `validation`  RegExp - The regex that will be applied to the input field
* `labelContainerClass`  String - Name that will be applied to the class containing the label (Useful for bootstrap classes)
* `inputContainerClass`  String - Name that will be applied to the class containing the label (Useful for bootstrap classes)
* `errorMessage`  String - Error that is shown when the input doesn't match the regex
* `inputEntered`  Function - Callback that provides the app with the data entered
* `inputName`  String - Name applied to the input class
* `placeholderInMessage`  Boolean - True to show the placeholder at the end of the error message

## Development

### Installation

```
git clone git@github.com:holidayextras/react-car-reg.git
cd react-car-reg
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
