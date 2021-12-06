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

function main(updateMask, domain) {
  // [START managedidentities_v1beta1_generated_ManagedIdentitiesService_UpdateDomain_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Mask of fields to update. At least one path must be supplied in this
   *  field. The elements of the repeated paths field may only include
   *  fields from Domain google.cloud.managedidentities.v1beta1.Domain:
   *   * `labels`
   *   * `locations`
   *   * `authorized_networks`
   *   * `audit_logs_enabled`
   */
  // const updateMask = {}
  /**
   *  Required. Domain message with updated fields. Only supported fields specified in
   *  update_mask are updated.
   */
  // const domain = {}

  // Imports the Managedidentities library
  const {ManagedIdentitiesServiceClient} =
    require('@google-cloud/managed-identities').v1beta1;

  // Instantiates a client
  const managedidentitiesClient = new ManagedIdentitiesServiceClient();

  async function callUpdateDomain() {
    // Construct request
    const request = {
      updateMask,
      domain,
    };

    // Run request
    const [operation] = await managedidentitiesClient.updateDomain(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateDomain();
  // [END managedidentities_v1beta1_generated_ManagedIdentitiesService_UpdateDomain_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
