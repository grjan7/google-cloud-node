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

function main(parent, registration, yearlyPrice) {
  // [START domains_v1beta1_generated_Domains_TransferDomain_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the `Registration`. Must be in the
   *  format `projects/* /locations/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The complete `Registration` resource to be created.
   *  You can leave `registration.dns_settings` unset to import the
   *  domain's current DNS configuration from its current registrar. Use this
   *  option only if you are sure that the domain's current DNS service
   *  does not cease upon transfer, as is often the case for DNS services
   *  provided for free by the registrar.
   */
  // const registration = ''
  /**
   *  The list of contact notices that you acknowledge. The notices
   *  needed here depend on the values specified in
   *  `registration.contact_settings`.
   */
  // const contactNotices = 1234
  /**
   *  Required. Acknowledgement of the price to transfer or renew the domain for one year.
   *  Call `RetrieveTransferParameters` to obtain the price, which you must
   *  acknowledge.
   */
  // const yearlyPrice = ''
  /**
   *  The domain's transfer authorization code. You can obtain this from the
   *  domain's current registrar.
   */
  // const authorizationCode = ''
  /**
   *  Validate the request without actually transferring the domain.
   */
  // const validateOnly = true

  // Imports the Domains library
  const {DomainsClient} = require('@google-cloud/domains').v1beta1;

  // Instantiates a client
  const domainsClient = new DomainsClient();

  async function transferDomain() {
    // Construct request
    const request = {
      parent,
      registration,
      yearlyPrice,
    };

    // Run request
    const [operation] = await domainsClient.transferDomain(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  transferDomain();
  // [END domains_v1beta1_generated_Domains_TransferDomain_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
