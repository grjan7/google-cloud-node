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
  // [START dataproc_v1_generated_BatchController_ListBatches_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of batches.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of batches to return in each response.
   *  The service may return fewer than this value.
   *  The default page size is 20; the maximum page size is 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token received from a previous `ListBatches` call.
   *  Provide this token to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'

  // Imports the Dataproc library
  const {BatchControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new BatchControllerClient();

  async function listBatches() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataprocClient.listBatchesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listBatches();
  // [END dataproc_v1_generated_BatchController_ListBatches_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
