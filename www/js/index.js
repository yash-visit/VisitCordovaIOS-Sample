/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document
    .getElementById("loadVisitApp")
    .addEventListener("click", function () {
        loadVisitURL(
          "https://star-health.getvisitapp.xyz/", //baseUrl
          "967914547335-g2ntga70t1i7b19ti91gcubb7agm7rje.apps.googleusercontent.com",//firebase_default_client_id
          "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOi[%E2%80%A6]GFsIn0.f0656mzmcRMSCywkbEptdd6JgkDfIqN0S9t-P1aPyt8",//user_token
          "8158"//userId
        );
    });
}

function loadVisitURL(baseUrl, firebase_default_client_id, user_token, userId) {
    cordova.exec(
      null,
      null,
      "CordovaFitnessPlugin", //plugin class name
      "loadVisitWebUrl", //plugin method
      [
        baseUrl, //base url (should change based on the build type)
        firebase_default_client_id, //firebase default_client_id (should change based on the build type)
        user_token, //token
        userId, //userId
      ] 
    );
  }
  
