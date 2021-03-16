/*
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
;(function () {
  'use strict'

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features

  const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  )

  if (
    'serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || isLocalhost)
  ) {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(function (registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function () {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            const installingWorker = registration.installing

            installingWorker.onstatechange = function () {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break

                case 'redundant':
                  throw new Error(
                    'The installing ' + 'service worker became redundant.'
                  )

                default:
                // Ignore
              }
            }
          }
        }
      })
      .catch(function (e) {
        console.error('Error during service worker registration:', e)
      })
  }

  // // Your custom JavaScript goes here

  // // TASK 1

  // const img = document.querySelector('#imgBacon').outerHTML
  // const container = document.querySelector('#overview')
  // const btn = document.querySelector('#btnBacon')

  // btn.addEventListener('click', () => {
  //   container.insertAdjacentHTML('beforeend', img)
  // })

  // // TASK 3
  // const submitBtn = document.querySelector('#submit')
  // const errorEmail = document.querySelector('#emailError')
  // const cardNumberError = document.querySelector('#cardnumberError')
  // const expMonthAndYearError = document.querySelector('#expMonthAndYearError')
  // const cvvError = document.querySelector('#cvvError')

  // const form = document.querySelector('#checkoutForm')
  // const lname = document.querySelector('#lname')
  // const email = form.email
  // const cardNumber = form.cardNumber
  // const month = form.month
  // const year = form.year
  // const cvv = form.cvv

  // console.log(form)


  // const fields = [
  //   { el: email, errorEl: errorEmail },
  //   { el: cardNumber, errorEl: cardNumberError },
  //   { el: month, errorEl: expMonthAndYearError },
  //   { el: year, errorEl: expMonthAndYearError },
  //   { el: cvv, errorEl: cvvError },
  // ]

  // let validations = {}

  // fields.forEach(field => {
  //   validations[field.el.name] = true
  //   addOnChangeEventListener(field.el, field.errorEl)
  // })

  // submitBtn.addEventListener('click', function (e) {

  //   alert('fuck')
  //   e.preventDefault()

  //   validateEmail()
  //   validateCardNumber()
  //   validatePresence(month)
  //   validatePresence(year)
  //   validateCvv()
  //   Object.values(validations).find(value => value === false) === undefined &&
  //     alert('Everything is great!')
  // })

  // function addOnChangeEventListener(el, errorEl) {
  //   el.addEventListener('input', () => {
  //     if (errorEl.style.display === 'block') {
  //       errorEl.style.display = 'none'
  //     }
  //   })
  // }

  // // all separate fn of the validation

  // function validateEmail() {
  //   const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
  //     email.value
  //   )
  //   validations.email = onStyleDisplay(errorEmail, isValid)
  // }

  // function validateCardNumber() {
  //   const isValid = /^((4\d{3})|(5[1-5]\d{2}))(-?|\040?)(\d{4}(-?|\040?)){3}|^(3[4,7]\d{2})(-?|\040?)\d{6}(-?|\040?)\d{5}/i.test(
  //     cardNumber.value
  //   )
  //   validations.cardNumber = onStyleDisplay(cardNumberError, isValid)
  // }

  // function validatePresence(str) {
  //   const numbers = str.value.split('')
  //   if (+numbers[0] === 0) {
  //     if (+numbers[1] === 0) {
  //       expMonthAndYearError.style.display = 'block'
  //       validations[str.name] = false
  //       return
  //     }
  //     validations[str.name] = true
  //     return
  //   }
  //   validations[str.name] = true
  // }

  // function validateCvv() {
  //   const isValid = /^\d{3}$/i.test(cvv.value)
  //   validations.cvv = onStyleDisplay(cvvError, isValid)
  // }

  // // UTILS

  // function onStyleDisplay(errorEl, isValid) {
  //   if (!isValid) {
  //     errorEl.style.display = 'block'
  //   }
  //   return isValid
  // }

  
})()
