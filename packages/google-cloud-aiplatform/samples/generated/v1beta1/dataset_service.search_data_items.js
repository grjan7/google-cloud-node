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

function main(dataset) {
  // [START aiplatform_v1beta1_generated_DatasetService_SearchDataItems_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A comma-separated list of data item fields to order by, sorted in
   *  ascending order. Use "desc" after a field name for descending.
   */
  // const orderByDataItem = 'abc123'
  /**
   *  Expression that allows ranking results based on annotation's property.
   */
  // const orderByAnnotation = {}
  /**
   *  Required. The resource name of the Dataset from which to search DataItems.
   *  Format:
   *  `projects/{project}/locations/{location}/datasets/{dataset}`
   */
  // const dataset = 'abc123'
  /**
   *  The resource name of a SavedQuery(annotation set in UI).
   *  Format:
   *  `projects/{project}/locations/{location}/datasets/{dataset}/savedQueries/{saved_query}`
   *  All of the search will be done in the context of this SavedQuery.
   */
  // const savedQuery = 'abc123'
  /**
   *  The resource name of a DataLabelingJob.
   *  Format:
   *  `projects/{project}/locations/{location}/dataLabelingJobs/{data_labeling_job}`
   *  If this field is set, all of the search will be done in the context of
   *  this DataLabelingJob.
   */
  // const dataLabelingJob = 'abc123'
  /**
   *  An expression for filtering the DataItem that will be returned.
   *    * `data_item_id` - for = or !=.
   *    * `labeled` - for = or !=.
   *    * `has_annotation(ANNOTATION_SPEC_ID)` - true only for DataItem that
   *      have at least one annotation with annotation_spec_id =
   *      `ANNOTATION_SPEC_ID` in the context of SavedQuery or DataLabelingJob.
   *  For example:
   *  * `data_item=1`
   *  * `has_annotation(5)`
   */
  // const dataItemFilter = 'abc123'
  /**
   *  An expression for filtering the Annotations that will be returned per
   *  DataItem.
   *    * `annotation_spec_id` - for = or !=.
   */
  // const annotationsFilter = 'abc123'
  /**
   *  An expression that specifies what Annotations will be returned per
   *  DataItem. Annotations satisfied either of the conditions will be returned.
   *    * `annotation_spec_id` - for = or !=.
   *  Must specify `saved_query_id=` - saved query id that annotations should
   *  belong to.
   */
  // const annotationFilters = 'abc123'
  /**
   *  Mask specifying which fields of
   *  DataItemView google.cloud.aiplatform.v1beta1.DataItemView  to read.
   */
  // const fieldMask = {}
  /**
   *  If set, only up to this many of Annotations will be returned per
   *  DataItemView. The maximum value is 1000. If not set, the maximum value will
   *  be used.
   */
  // const annotationsLimit = 1234
  /**
   *  Requested page size. Server may return fewer results than requested.
   *  Default and maximum page size is 100.
   */
  // const pageSize = 1234
  /**
   *  A comma-separated list of fields to order by, sorted in ascending order.
   *  Use "desc" after a field name for descending.
   */
  // const orderBy = 'abc123'
  /**
   *  A token identifying a page of results for the server to return
   *  Typically obtained via
   *  SearchDataItemsResponse.next_page_token google.cloud.aiplatform.v1beta1.SearchDataItemsResponse.next_page_token 
   *  of the previous
   *  DatasetService.SearchDataItems google.cloud.aiplatform.v1beta1.DatasetService.SearchDataItems 
   *  call.
   */
  // const pageToken = 'abc123'

  // Imports the Aiplatform library
  const {DatasetServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new DatasetServiceClient();

  async function callSearchDataItems() {
    // Construct request
    const request = {
      dataset,
    };

    // Run request
    const iterable = await aiplatformClient.searchDataItemsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchDataItems();
  // [END aiplatform_v1beta1_generated_DatasetService_SearchDataItems_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
