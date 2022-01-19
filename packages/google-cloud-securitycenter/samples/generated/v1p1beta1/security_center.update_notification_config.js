// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(notificationConfig) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_UpdateNotificationConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The notification config to update.
   */
  // const notificationConfig = {}
  /**
   *  The FieldMask to use when updating the notification config.
   *  If empty all mutable fields will be updated.
   */
  // const updateMask = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callUpdateNotificationConfig() {
    // Construct request
    const request = {
      notificationConfig,
    };

    // Run request
    const response = await securitycenterClient.updateNotificationConfig(request);
    console.log(response);
  }

  callUpdateNotificationConfig();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_UpdateNotificationConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
