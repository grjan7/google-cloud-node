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

function main(tensorboardTimeSeries) {
  // [START aiplatform_export_tensorboard_time_series_data_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the TensorboardTimeSeries to export data from.
   *  Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}/timeSeries/{time_series}`
   */
  // const tensorboardTimeSeries = 'abc123'
  /**
   *  Exports the TensorboardTimeSeries' data that match the filter expression.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of data points to return per page.
   *  The default page_size will be 1000. Values must be between 1 and 10000.
   *  Values above 10000 will be coerced to 10000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  [TensorboardService.ExportTensorboardTimeSeries][] call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  [TensorboardService.ExportTensorboardTimeSeries][] must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Field to use to sort the TensorboardTimeSeries' data.
   *  By default, TensorboardTimeSeries' data will be returned in a pseudo random
   *  order.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {TensorboardServiceClient} =
    require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function exportTensorboardTimeSeriesData() {
    // Construct request
    const request = {
      tensorboardTimeSeries,
    };

    // Run request
    const iterable =
      await aiplatformClient.exportTensorboardTimeSeriesDataAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  exportTensorboardTimeSeriesData();
  // [END aiplatform_export_tensorboard_time_series_data_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
