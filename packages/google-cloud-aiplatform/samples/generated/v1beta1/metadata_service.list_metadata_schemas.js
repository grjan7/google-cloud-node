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

function main(parent) {
  // [START aiplatform_list_metadata_schemas_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The MetadataStore whose MetadataSchemas should be listed.
   *  Format:
   *  projects/{project}/locations/{location}/metadataStores/{metadatastore}
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of MetadataSchemas to return. The service may return
   *  fewer.
   *  Must be in range 1-1000, inclusive. Defaults to 100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  [MetadataService.ListMetadataSchemas][google.cloud.aiplatform.v1beta1.MetadataService.ListMetadataSchemas] call. Provide this to retrieve the
   *  next page.
   *  When paginating, all other provided parameters must match the call that
   *  provided the page token. (Otherwise the request will fail with
   *  INVALID_ARGUMENT error.)
   */
  // const pageToken = 'abc123'
  /**
   *  A query to filter available MetadataSchemas for matching results.
   */
  // const filter = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function listMetadataSchemas() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listMetadataSchemasAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listMetadataSchemas();
  // [END aiplatform_list_metadata_schemas_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
