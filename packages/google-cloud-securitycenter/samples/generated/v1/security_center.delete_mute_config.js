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

function main(name) {
  // [START securitycenter_v1_generated_SecurityCenter_DeleteMuteConfig_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the mute config to delete. Its format is
   *  organizations/{organization}/muteConfigs/{config_id},
   *  folders/{folder}/muteConfigs/{config_id}, or
   *  projects/{project}/muteConfigs/{config_id}
   */
  // const name = 'abc123'

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callDeleteMuteConfig() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await securitycenterClient.deleteMuteConfig(request);
    console.log(response);
  }

  callDeleteMuteConfig();
  // [END securitycenter_v1_generated_SecurityCenter_DeleteMuteConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
