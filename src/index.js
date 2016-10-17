import React from 'react';
import ReactDOM from 'react-dom';

import Bacon from 'baconjs'

import App from './App';
import './index.css';


// const availUrlPrefix = '/usernameavailable/'
// function setVisibility(element, visible) {
//   element.toggle(visible)
// }
// function setEnabled(element, enabled) {
//   element.attr("disabled", !enabled)
// }
// function inputValueToProperty(elem) {
//   return elem
//     .asEventStream('keyup')
//     .map(e => elem.val())
//     .toProperty('')
// }
// function queryAvailability(reqParams) {
//   return reqParams.url.substring(availUrlPrefix.length).length > 0 ? 
//     Bacon.fromPromise($.ajax(reqParams)) : Bacon.once(true)
// }

// $(".ajax").hide()

// userNameInput = $("#username input")
// fullNameInput = $("#fullname input")
// registerButton = $("#register button")
// unavailabilityLabel = $("#username-unavailable")
// usernameAjaxIndicator = $("#username .ajax")
// registerAjaxIndicator = $("#register .ajax")
// registrationFeedbackElem = $("#result")

// // input properties
// userNameP = inputValueToProperty(userNameInput)
// fullNameP = inputValueToProperty(fullNameInput)
// userNameEnteredP = userNameP.map(R.complement(R.isEmpty))
// fullNameEnteredP = fullNameP.map(R.complement(R.isEmpty))

// // user name availability
// availabilityRequestS = userNameP
//   .changes().map(user => ({url: `${availUrlPrefix}${user}`}))
// availabilityResponseS = availabilityRequestS
//   .flatMapLatest(queryAvailability)
// availabilityRequestPendingP = availabilityRequestS
//   .awaiting(availabilityResponseS)
// userNameAvailableP = availabilityResponseS
//   .toProperty(true)

// // register button  
// registerButtonEnabledP = Bacon
//   .combineWith(R.unapply(R.all(x => x)), userNameEnteredP, 
//     fullNameEnteredP, userNameAvailableP).log()

// // register
// registerClickS = registerButton
//   .asEventStream('click')
//   .doAction(e => e.preventDefault())
//   .log()
// registrationRequestS = userNameP
//   .combine(fullNameP, function(username, fullname) {
//     return {
//       type: "post",
//       url : "/register",
//       contentType: "application/json",
//       data: JSON.stringify({ username, fullname })
//     }
//   })
//   .sampledBy(registerClickS)
// registrationResponseS = registrationRequestS
//   .flatMapLatest(reqParams => Bacon.fromPromise($.ajax(reqParams)))
// registrationRequestPendingP = registrationRequestS
//   .awaiting(registrationResponseS)
// registrationSentP = registrationRequestS
//   .map(true)
//   .toProperty(false)
// registrationResponseP = registrationResponseS.toProperty('')

// // side-effetcs
// userNameAvailableP
//   .onValue(available => setVisibility(unavailabilityLabel, !available))
// availabilityRequestPendingP
//   .onValue(pending => setVisibility(usernameAjaxIndicator, pending))
// registerButtonEnabledP
//   .onValue(enabled => setEnabled(registerButton, enabled))
// registrationRequestPendingP
//   .onValue(pending => setVisibility(registerAjaxIndicator, pending))
// registrationResponseS
//   .map("Thanks!")
//   .onValue(text => registrationFeedbackElem.text(text))


// const appStateP = Bacon.combineTemplate({
//   userNameAvailableP,
//   availabilityRequestPendingP,
//   registerButtonEnabledP,
//   registrationRequestPendingP,
//   registrationResponseP
// })

// appStateP.onValue(appState => {
//   ReactDOM.render(
//     <App {...appState} />, document.getElementById('root')
//   )
// })

const actionS = new Bacon.Bus()
const test = actionS.flatMap(x => x);
test.onValue(val => console.log(val))

ReactDOM.render(
  <App actions={actionS} />, document.getElementById('root')
)
