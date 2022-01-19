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

function main(parent, groupBy) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_GroupFindings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the source to groupBy. Its format is
   *  "organizations/[organization_id]/sources/[source_id]",
   *  folders/[folder_id]/sources/[source_id], or
   *  projects/[project_id]/sources/[source_id]. To groupBy across all sources
   *  provide a source_id of `-`. For example:
   *  organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-,
   *  or projects/{project_id}/sources/-
   */
  // const parent = 'abc123'
  /**
   *  Expression that defines the filter to apply across findings.
   *  The expression is a list of one or more restrictions combined via logical
   *  operators `AND` and `OR`.
   *  Parentheses are supported, and `OR` has higher precedence than `AND`.
   *  Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *  character in front of them to indicate negation. Examples include:
   *   * name
   *   * source_properties.a_property
   *   * security_marks.marks.marka
   *  The supported operators are:
   *  * `=` for all value types.
   *  * `>`, `<`, `>=`, `<=` for integer values.
   *  * `:`, meaning substring matching, for strings.
   *  The supported value types are:
   *  * string literals in quotes.
   *  * integer literals without quotes.
   *  * boolean literals `true` and `false` without quotes.
   *  The following field and operator combinations are supported:
   *  * name: `=`
   *  * parent: `=`, `:`
   *  * resource_name: `=`, `:`
   *  * state: `=`, `:`
   *  * category: `=`, `:`
   *  * external_uri: `=`, `:`
   *  * event_time: `=`, `>`, `<`, `>=`, `<=`
   *  * severity: `=`, `:`
   *    Usage: This should be milliseconds since epoch or an RFC3339 string.
   *    Examples:
   *      `event_time = "2019-06-10T16:07:18-07:00"`
   *      `event_time = 1560208038000`
   *  * security_marks.marks: `=`, `:`
   *  * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
   *  For example, `source_properties.size = 100` is a valid filter string.
   *  Use a partial match on the empty string to filter based on a property
   *  existing: `source_properties.my_property : ""`
   *  Use a negated partial match on the empty string to filter based on a
   *  property not existing: `-source_properties.my_property : ""`
   */
  // const filter = 'abc123'
  /**
   *  Required. Expression that defines what assets fields to use for grouping (including
   *  `state_change`). The string value should follow SQL syntax: comma separated
   *  list of fields. For example: "parent,resource_name".
   *  The following fields are supported:
   *  * resource_name
   *  * category
   *  * state
   *  * parent
   *  * severity
   *  The following fields are supported when compare_duration is set:
   *  * state_change
   */
  // const groupBy = 'abc123'
  /**
   *  Time used as a reference point when filtering findings. The filter is
   *  limited to findings existing at the supplied time and their values are
   *  those at that specific time. Absence of this field will default to the
   *  API's version of NOW.
   */
  // const readTime = {}
  /**
   *  When compare_duration is set, the GroupResult's "state_change" attribute is
   *  updated to indicate whether the finding had its state changed, the
   *  finding's state remained unchanged, or if the finding was added during the
   *  compare_duration period of time that precedes the read_time. This is the
   *  time between (read_time - compare_duration) and read_time.
   *  The state_change value is derived based on the presence and state of the
   *  finding at the two points in time. Intermediate state changes between the
   *  two times don't affect the result. For example, the results aren't affected
   *  if the finding is made inactive and then active again.
   *  Possible "state_change" values when compare_duration is specified:
   *  * "CHANGED":   indicates that the finding was present and matched the given
   *                   filter at the start of compare_duration, but changed its
   *                   state at read_time.
   *  * "UNCHANGED": indicates that the finding was present and matched the given
   *                   filter at the start of compare_duration and did not change
   *                   state at read_time.
   *  * "ADDED":     indicates that the finding did not match the given filter or
   *                   was not present at the start of compare_duration, but was
   *                   present at read_time.
   *  * "REMOVED":   indicates that the finding was present and matched the
   *                   filter at the start of compare_duration, but did not match
   *                   the filter at read_time.
   *  If compare_duration is not specified, then the only possible state_change
   *  is "UNUSED",  which will be the state_change set for all findings present
   *  at read_time.
   *  If this field is set then `state_change` must be a specified field in
   *  `group_by`.
   */
  // const compareDuration = {}
  /**
   *  The value returned by the last `GroupFindingsResponse`; indicates
   *  that this is a continuation of a prior `GroupFindings` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callGroupFindings() {
    // Construct request
    const request = {
      parent,
      groupBy,
    };

    // Run request
    const iterable = await securitycenterClient.groupFindingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callGroupFindings();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_GroupFindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
