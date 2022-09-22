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

function main(parent) {
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource that the policy is attached to, along with the kind
   *  of policy to list. Format: `policies/{attachment_point}/denypolicies`
   *  The attachment point is identified by its URL-encoded full resource name,
   *  which means that the forward-slash character, `/`, must be written as
   *  `%2F`. For example,
   *  `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`.
   *  For organizations and folders, use the numeric ID in the full resource
   *  name. For projects, you can use the alphanumeric or the numeric ID.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of policies to return. IAM ignores this value and uses
   *  the value 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token received in a
   *  ListPoliciesResponse google.iam.v2.ListPoliciesResponse. Provide this
   *  token to retrieve the next page.
   */
  // const pageToken = 'abc123'

  // Imports the Iam library
  const {PoliciesClient} = require('@google-cloud/iam').v2;

  // Instantiates a client
  const iamClient = new PoliciesClient();

  async function callListPolicies() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await iamClient.listPoliciesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListPolicies();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
