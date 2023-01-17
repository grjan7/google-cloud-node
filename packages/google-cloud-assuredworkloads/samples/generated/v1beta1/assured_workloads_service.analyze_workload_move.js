// Copyright 2023 Google LLC
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

function main(target) {
  // [START assuredworkloads_v1beta1_generated_AssuredWorkloadsService_AnalyzeWorkloadMove_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The source type is a project-based workload. Specify the workloads's
   *  relative resource name, formatted as:
   *  "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}"
   *  For example:
   *  "organizations/123/locations/us-east1/workloads/assured-workload-1"
   */
  // const source = 'abc123'
  /**
   *  The source type is a project. Specify the project's relative resource
   *  name, formatted as either a project number or a project ID:
   *  "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}"
   *  For example:
   *  "projects/951040570662" when specifying a project number, or
   *  "projects/my-project-123" when specifying a project ID.
   */
  // const project = 'my-project'
  /**
   *  Required. The resource ID of the folder-based destination workload. This workload is
   *  where the source project will hypothetically be moved to. Specify the
   *  workload's relative resource name, formatted as:
   *  "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}"
   *  For example:
   *  "organizations/123/locations/us-east1/workloads/assured-workload-2"
   */
  // const target = 'abc123'

  // Imports the Assuredworkloads library
  const {AssuredWorkloadsServiceClient} = require('@google-cloud/assured-workloads').v1beta1;

  // Instantiates a client
  const assuredworkloadsClient = new AssuredWorkloadsServiceClient();

  async function callAnalyzeWorkloadMove() {
    // Construct request
    const request = {
      target,
    };

    // Run request
    const response = await assuredworkloadsClient.analyzeWorkloadMove(request);
    console.log(response);
  }

  callAnalyzeWorkloadMove();
  // [END assuredworkloads_v1beta1_generated_AssuredWorkloadsService_AnalyzeWorkloadMove_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
