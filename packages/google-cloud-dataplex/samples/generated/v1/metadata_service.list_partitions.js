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
  // [START dataplex_v1_generated_MetadataService_ListPartitions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent entity:
   *  `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of partitions to return. The service may return fewer than
   *  this value. If unspecified, 100 partitions will be returned by default. The
   *  maximum page size is 500; larger values will will be truncated to 500.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListPartitions` call. Provide
   *  this to retrieve the subsequent page. When paginating, all other parameters
   *  provided to `ListPartitions` must match the call that provided the
   *  page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filter the partitions returned to the caller using a key vslue pair
   *  expression. The filter expression supports:
   *  - logical operators: AND, OR
   *  - comparison operators: <, >, >=, <= ,=, !=
   *  - LIKE operators:
   *      - The right hand of a LIKE operator supports “.” and
   *        “*” for wildcard searches, for example "value1 LIKE ".*oo.*"
   *  - parenthetical grouping: ( )
   *  Sample filter expression: `?filter="key1 < value1 OR key2 > value2"
   *  **Notes:**
   *  - Keys to the left of operators are case insensitive.
   *  - Partition results are sorted first by creation time, then by
   *    lexicographic order.
   *  - Up to 20 key value filter pairs are allowed, but due to performance
   *    considerations, only the first 10 will be used as a filter.
   */
  // const filter = 'abc123'

  // Imports the Dataplex library
  const {MetadataServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new MetadataServiceClient();

  async function callListPartitions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataplexClient.listPartitionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPartitions();
  // [END dataplex_v1_generated_MetadataService_ListPartitions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
