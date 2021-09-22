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

function main(endpoint, updateMask) {
  // [START aiplatform_update_endpoint_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Endpoint which replaces the resource on the server.
   */
  // const endpoint = ''
  /**
   *  Required. The update mask applies to the resource. See [google.protobuf.FieldMask][google.protobuf.FieldMask].
   */
  // const updateMask = ''

  // Imports the Aiplatform library
  const {EndpointServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new EndpointServiceClient();

  async function updateEndpoint() {
    // Construct request
    const request = {
      endpoint,
      updateMask,
    };

    // Run request
    const response = await aiplatformClient.updateEndpoint(request);
    console.log(response);
  }

  updateEndpoint();
  // [END aiplatform_update_endpoint_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
