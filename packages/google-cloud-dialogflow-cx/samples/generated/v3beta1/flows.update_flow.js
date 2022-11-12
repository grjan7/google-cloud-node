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

function main(flow) {
  // [START dialogflow_v3beta1_generated_Flows_UpdateFlow_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The flow to update.
   */
  // const flow = {}
  /**
   *  The mask to control which fields get updated. If the mask is not present,
   *  all fields will be updated.
   */
  // const updateMask = {}
  /**
   *  The language of the following fields in `flow`:
   *  *  `Flow.event_handlers.trigger_fulfillment.messages`
   *  *  `Flow.event_handlers.trigger_fulfillment.conditional_cases`
   *  *  `Flow.transition_routes.trigger_fulfillment.messages`
   *  *  `Flow.transition_routes.trigger_fulfillment.conditional_cases`
   *  If not specified, the agent's default language is used.
   *  Many
   *  languages (https://cloud.google.com/dialogflow/cx/docs/reference/language)
   *  are supported.
   *  Note: languages must be enabled in the agent before they can be used.
   */
  // const languageCode = 'abc123'

  // Imports the Cx library
  const {FlowsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new FlowsClient();

  async function callUpdateFlow() {
    // Construct request
    const request = {
      flow,
    };

    // Run request
    const response = await cxClient.updateFlow(request);
    console.log(response);
  }

  callUpdateFlow();
  // [END dialogflow_v3beta1_generated_Flows_UpdateFlow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
