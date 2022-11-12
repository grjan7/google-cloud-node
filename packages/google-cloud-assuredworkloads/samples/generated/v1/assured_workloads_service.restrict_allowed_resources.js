// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name, restrictionType) {
  // [START assuredworkloads_v1_generated_AssuredWorkloadsService_RestrictAllowedResources_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Workload. This is the workloads's
   *  relative path in the API, formatted as
   *  "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}".
   *  For example,
   *  "organizations/123/locations/us-east1/workloads/assured-workload-1".
   */
  // const name = 'abc123'
  /**
   *  Required. The type of restriction for using gcp products in the Workload environment.
   */
  // const restrictionType = {}

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} = require('@google-cloud/assured-workloads').v1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function callRestrictAllowedResources() {
    // Construct request
    const request = {
      name,
      restrictionType,
    };

    // Run request
    const response = await assuredworkloadsClient.restrictAllowedResources(request);
    console.log(response);
  }

  callRestrictAllowedResources();
  // [END assuredworkloads_v1_generated_AssuredWorkloadsService_RestrictAllowedResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
