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

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta3/metrics_v1_beta3_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './metrics_v1_beta3_client_config.json';
const version = require('../../../package.json').version;

/**
 *  The Dataflow Metrics API lets you monitor the progress of Dataflow
 *  jobs.
 * @class
 * @memberof v1beta3
 */
export class MetricsV1Beta3Client {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  metricsV1Beta3Stub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of MetricsV1Beta3Client.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new MetricsV1Beta3Client({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof MetricsV1Beta3Client;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      getJobExecutionDetails: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'stages'
      ),
      getStageExecutionDetails: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'workers'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.dataflow.v1beta3.MetricsV1Beta3',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.metricsV1Beta3Stub) {
      return this.metricsV1Beta3Stub;
    }

    // Put together the "service stub" for
    // google.dataflow.v1beta3.MetricsV1Beta3.
    this.metricsV1Beta3Stub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.dataflow.v1beta3.MetricsV1Beta3'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.dataflow.v1beta3.MetricsV1Beta3,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const metricsV1Beta3StubMethods = [
      'getJobMetrics',
      'getJobExecutionDetails',
      'getStageExecutionDetails',
    ];
    for (const methodName of metricsV1Beta3StubMethods) {
      const callPromise = this.metricsV1Beta3Stub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.metricsV1Beta3Stub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'dataflow.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'dataflow.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/compute.readonly',
      'https://www.googleapis.com/auth/userinfo.email',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Request the job status.
   *
   * To request the status of a job, we recommend using
   * `projects.locations.jobs.getMetrics` with a [regional endpoint]
   * (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using
   * `projects.jobs.getMetrics` is not recommended, as you can only request the
   * status of jobs that are running in `us-central1`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get metrics for.
   * @param {google.protobuf.Timestamp} request.startTime
   *   Return only metric data that has changed since this time.
   *   Default is to return all information about all metrics for the job.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [JobMetrics]{@link google.dataflow.v1beta3.JobMetrics}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta3/metrics_v1_beta3.get_job_metrics.js</caption>
   * region_tag:dataflow_v1beta3_generated_MetricsV1Beta3_GetJobMetrics_async
   */
  getJobMetrics(
    request?: protos.google.dataflow.v1beta3.IGetJobMetricsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IJobMetrics,
      protos.google.dataflow.v1beta3.IGetJobMetricsRequest | undefined,
      {} | undefined
    ]
  >;
  getJobMetrics(
    request: protos.google.dataflow.v1beta3.IGetJobMetricsRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.dataflow.v1beta3.IJobMetrics,
      protos.google.dataflow.v1beta3.IGetJobMetricsRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getJobMetrics(
    request: protos.google.dataflow.v1beta3.IGetJobMetricsRequest,
    callback: Callback<
      protos.google.dataflow.v1beta3.IJobMetrics,
      protos.google.dataflow.v1beta3.IGetJobMetricsRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getJobMetrics(
    request?: protos.google.dataflow.v1beta3.IGetJobMetricsRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.dataflow.v1beta3.IJobMetrics,
          | protos.google.dataflow.v1beta3.IGetJobMetricsRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.dataflow.v1beta3.IJobMetrics,
      protos.google.dataflow.v1beta3.IGetJobMetricsRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IJobMetrics,
      protos.google.dataflow.v1beta3.IGetJobMetricsRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getJobMetrics(request, options, callback);
  }

  /**
   * Request detailed information about the execution status of the job.
   *
   * EXPERIMENTAL.  This API is subject to change or removal without notice.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of stages to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [StageSummary]{@link google.dataflow.v1beta3.StageSummary}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `getJobExecutionDetailsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  getJobExecutionDetails(
    request?: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IStageSummary[],
      protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest | null,
      protos.google.dataflow.v1beta3.IJobExecutionDetails
    ]
  >;
  getJobExecutionDetails(
    request: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IJobExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IStageSummary
    >
  ): void;
  getJobExecutionDetails(
    request: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    callback: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IJobExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IStageSummary
    >
  ): void;
  getJobExecutionDetails(
    request?: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
          | protos.google.dataflow.v1beta3.IJobExecutionDetails
          | null
          | undefined,
          protos.google.dataflow.v1beta3.IStageSummary
        >,
    callback?: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IJobExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IStageSummary
    >
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IStageSummary[],
      protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest | null,
      protos.google.dataflow.v1beta3.IJobExecutionDetails
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getJobExecutionDetails(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of stages to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [StageSummary]{@link google.dataflow.v1beta3.StageSummary} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `getJobExecutionDetailsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  getJobExecutionDetailsStream(
    request?: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
      });
    const defaultCallSettings = this._defaults['getJobExecutionDetails'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.getJobExecutionDetails.createStream(
      this.innerApiCalls.getJobExecutionDetails as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `getJobExecutionDetails`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of stages to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [StageSummary]{@link google.dataflow.v1beta3.StageSummary}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta3/metrics_v1_beta3.get_job_execution_details.js</caption>
   * region_tag:dataflow_v1beta3_generated_MetricsV1Beta3_GetJobExecutionDetails_async
   */
  getJobExecutionDetailsAsync(
    request?: protos.google.dataflow.v1beta3.IGetJobExecutionDetailsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.dataflow.v1beta3.IStageSummary> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
      });
    const defaultCallSettings = this._defaults['getJobExecutionDetails'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.getJobExecutionDetails.asyncIterate(
      this.innerApiCalls['getJobExecutionDetails'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.dataflow.v1beta3.IStageSummary>;
  }
  /**
   * Request detailed information about the execution status of a stage of the
   * job.
   *
   * EXPERIMENTAL.  This API is subject to change or removal without notice.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {string} request.stageId
   *   The stage for which to fetch information.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of work items to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {google.protobuf.Timestamp} request.startTime
   *   Lower time bound of work items to include, by start time.
   * @param {google.protobuf.Timestamp} request.endTime
   *   Upper time bound of work items to include, by start time.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [WorkerDetails]{@link google.dataflow.v1beta3.WorkerDetails}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `getStageExecutionDetailsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  getStageExecutionDetails(
    request?: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IWorkerDetails[],
      protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest | null,
      protos.google.dataflow.v1beta3.IStageExecutionDetails
    ]
  >;
  getStageExecutionDetails(
    request: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IStageExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IWorkerDetails
    >
  ): void;
  getStageExecutionDetails(
    request: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    callback: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IStageExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IWorkerDetails
    >
  ): void;
  getStageExecutionDetails(
    request?: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
          | protos.google.dataflow.v1beta3.IStageExecutionDetails
          | null
          | undefined,
          protos.google.dataflow.v1beta3.IWorkerDetails
        >,
    callback?: PaginationCallback<
      protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
      protos.google.dataflow.v1beta3.IStageExecutionDetails | null | undefined,
      protos.google.dataflow.v1beta3.IWorkerDetails
    >
  ): Promise<
    [
      protos.google.dataflow.v1beta3.IWorkerDetails[],
      protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest | null,
      protos.google.dataflow.v1beta3.IStageExecutionDetails
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
        stage_id: request.stageId ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getStageExecutionDetails(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {string} request.stageId
   *   The stage for which to fetch information.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of work items to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {google.protobuf.Timestamp} request.startTime
   *   Lower time bound of work items to include, by start time.
   * @param {google.protobuf.Timestamp} request.endTime
   *   Upper time bound of work items to include, by start time.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing [WorkerDetails]{@link google.dataflow.v1beta3.WorkerDetails} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `getStageExecutionDetailsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   */
  getStageExecutionDetailsStream(
    request?: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
        stage_id: request.stageId ?? '',
      });
    const defaultCallSettings = this._defaults['getStageExecutionDetails'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.getStageExecutionDetails.createStream(
      this.innerApiCalls.getStageExecutionDetails as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `getStageExecutionDetails`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   A project id.
   * @param {string} request.jobId
   *   The job to get execution details for.
   * @param {string} request.location
   *   The [regional endpoint]
   *   (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *   contains the job specified by job_id.
   * @param {string} request.stageId
   *   The stage for which to fetch information.
   * @param {number} request.pageSize
   *   If specified, determines the maximum number of work items to
   *   return.  If unspecified, the service may choose an appropriate
   *   default, or may return an arbitrarily large number of results.
   * @param {string} request.pageToken
   *   If supplied, this should be the value of next_page_token returned
   *   by an earlier call. This will cause the next page of results to
   *   be returned.
   * @param {google.protobuf.Timestamp} request.startTime
   *   Lower time bound of work items to include, by start time.
   * @param {google.protobuf.Timestamp} request.endTime
   *   Upper time bound of work items to include, by start time.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [WorkerDetails]{@link google.dataflow.v1beta3.WorkerDetails}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta3/metrics_v1_beta3.get_stage_execution_details.js</caption>
   * region_tag:dataflow_v1beta3_generated_MetricsV1Beta3_GetStageExecutionDetails_async
   */
  getStageExecutionDetailsAsync(
    request?: protos.google.dataflow.v1beta3.IGetStageExecutionDetailsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.dataflow.v1beta3.IWorkerDetails> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project_id: request.projectId ?? '',
        location: request.location ?? '',
        job_id: request.jobId ?? '',
        stage_id: request.stageId ?? '',
      });
    const defaultCallSettings = this._defaults['getStageExecutionDetails'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.getStageExecutionDetails.asyncIterate(
      this.innerApiCalls['getStageExecutionDetails'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.dataflow.v1beta3.IWorkerDetails>;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.metricsV1Beta3Stub && !this._terminated) {
      return this.metricsV1Beta3Stub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
