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

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  GrpcClientOptions,
  LROperation,
  LocationsClient,
  LocationProtos,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v2beta/workflows_service_v2_beta_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './workflows_service_v2_beta_client_config.json';
const version = require('../../../package.json').version;

/**
 *  A service for running workflows, such as pipelines consisting of Docker
 *  containers.
 * @class
 * @memberof v2beta
 */
export class WorkflowsServiceV2BetaClient {
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
  locationsClient: LocationsClient;
  operationsClient: gax.OperationsClient;
  workflowsServiceV2BetaStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of WorkflowsServiceV2BetaClient.
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
   *     const client = new WorkflowsServiceV2BetaClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof WorkflowsServiceV2BetaClient;
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
    this.locationsClient = new this._gaxModule.LocationsClient(
      this._gaxGrpc,
      opts
    );

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

    const protoFilesRoot = this._gaxModule.protobuf.Root.fromJSON(jsonProtos);
    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const lroOptions: GrpcClientOptions = {
      auth: this.auth,
      grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined,
    };
    if (opts.fallback === 'rest') {
      lroOptions.protoJson = protoFilesRoot;
      lroOptions.httpRules = [
        {
          selector: 'google.cloud.location.Locations.GetLocation',
          get: '/v2beta/{name=projects/*/locations/*}',
        },
        {
          selector: 'google.cloud.location.Locations.ListLocations',
          get: '/v2beta/{name=projects/*}/locations',
        },
        {
          selector: 'google.longrunning.Operations.CancelOperation',
          post: '/v2beta/{name=projects/*/locations/*/operations/*}:cancel',
          body: '*',
        },
        {
          selector: 'google.longrunning.Operations.GetOperation',
          get: '/v2beta/{name=projects/*/locations/*/operations/*}',
        },
        {
          selector: 'google.longrunning.Operations.ListOperations',
          get: '/v2beta/{name=projects/*/locations/*}/operations',
        },
      ];
    }
    this.operationsClient = this._gaxModule
      .lro(lroOptions)
      .operationsClient(opts);
    const runPipelineResponse = protoFilesRoot.lookup(
      '.google.cloud.lifesciences.v2beta.RunPipelineResponse'
    ) as gax.protobuf.Type;
    const runPipelineMetadata = protoFilesRoot.lookup(
      '.google.cloud.lifesciences.v2beta.Metadata'
    ) as gax.protobuf.Type;

    this.descriptors.longrunning = {
      runPipeline: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        runPipelineResponse.decode.bind(runPipelineResponse),
        runPipelineMetadata.decode.bind(runPipelineMetadata)
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.lifesciences.v2beta.WorkflowsServiceV2Beta',
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
    if (this.workflowsServiceV2BetaStub) {
      return this.workflowsServiceV2BetaStub;
    }

    // Put together the "service stub" for
    // google.cloud.lifesciences.v2beta.WorkflowsServiceV2Beta.
    this.workflowsServiceV2BetaStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.lifesciences.v2beta.WorkflowsServiceV2Beta'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.lifesciences.v2beta
            .WorkflowsServiceV2Beta,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const workflowsServiceV2BetaStubMethods = ['runPipeline'];
    for (const methodName of workflowsServiceV2BetaStubMethods) {
      const callPromise = this.workflowsServiceV2BetaStub.then(
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

      const descriptor = this.descriptors.longrunning[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.workflowsServiceV2BetaStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'lifesciences.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'lifesciences.googleapis.com';
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
    return ['https://www.googleapis.com/auth/cloud-platform'];
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
   * Runs a pipeline.  The returned Operation's [metadata]
   * [google.longrunning.Operation.metadata] field will contain a
   * {@link google.cloud.lifesciences.v2beta.Metadata|google.cloud.lifesciences.v2beta.Metadata}
   * object describing the status of the pipeline execution. The
   * {@link google.longrunning.Operation.response|response} field will contain a
   * {@link google.cloud.lifesciences.v2beta.RunPipelineResponse|google.cloud.lifesciences.v2beta.RunPipelineResponse}
   * object if the pipeline completes successfully.
   *
   * **Note:** Before you can use this method, the *Life Sciences Service Agent*
   * must have access to your project. This is done automatically when the
   * Cloud Life Sciences API is first enabled, but if you delete this permission
   * you must disable and re-enable the API to grant the Life Sciences
   * Service Agent the required permissions.
   * Authorization requires the following [Google
   * IAM](https://cloud.google.com/iam/) permission:
   *
   * * `lifesciences.workflows.run`
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The project and location that this request should be executed against.
   * @param {google.cloud.lifesciences.v2beta.Pipeline} request.pipeline
   *   Required. The description of the pipeline to run.
   * @param {number[]} request.labels
   *   User-defined labels to associate with the returned operation. These
   *   labels are not propagated to any Google Cloud Platform resources used by
   *   the operation, and can be modified at any time.
   *
   *   To associate labels with resources created while executing the operation,
   *   see the appropriate resource message (for example, `VirtualMachine`).
   * @param {string} request.pubSubTopic
   *   The name of an existing Pub/Sub topic.  The server will publish
   *   messages to this topic whenever the status of the operation changes.
   *   The Life Sciences Service Agent account must have publisher permissions to
   *   the specified topic or notifications will not be sent.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation. Its `promise()` method returns a promise
   *   you can `await` for.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v2beta/workflows_service_v2_beta.run_pipeline.js</caption>
   * region_tag:lifesciences_v2beta_generated_WorkflowsServiceV2Beta_RunPipeline_async
   */
  runPipeline(
    request?: protos.google.cloud.lifesciences.v2beta.IRunPipelineRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<
        protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
        protos.google.cloud.lifesciences.v2beta.IMetadata
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  >;
  runPipeline(
    request: protos.google.cloud.lifesciences.v2beta.IRunPipelineRequest,
    options: CallOptions,
    callback: Callback<
      LROperation<
        protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
        protos.google.cloud.lifesciences.v2beta.IMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  runPipeline(
    request: protos.google.cloud.lifesciences.v2beta.IRunPipelineRequest,
    callback: Callback<
      LROperation<
        protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
        protos.google.cloud.lifesciences.v2beta.IMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  runPipeline(
    request?: protos.google.cloud.lifesciences.v2beta.IRunPipelineRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          LROperation<
            protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
            protos.google.cloud.lifesciences.v2beta.IMetadata
          >,
          protos.google.longrunning.IOperation | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LROperation<
        protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
        protos.google.cloud.lifesciences.v2beta.IMetadata
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<
        protos.google.cloud.lifesciences.v2beta.IRunPipelineResponse,
        protos.google.cloud.lifesciences.v2beta.IMetadata
      >,
      protos.google.longrunning.IOperation | undefined,
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
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.runPipeline(request, options, callback);
  }
  /**
   * Check the status of the long running operation returned by `runPipeline()`.
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v2beta/workflows_service_v2_beta.run_pipeline.js</caption>
   * region_tag:lifesciences_v2beta_generated_WorkflowsServiceV2Beta_RunPipeline_async
   */
  async checkRunPipelineProgress(
    name: string
  ): Promise<
    LROperation<
      protos.google.cloud.lifesciences.v2beta.RunPipelineResponse,
      protos.google.cloud.lifesciences.v2beta.Metadata
    >
  > {
    const request =
      new this._gaxModule.operationsProtos.google.longrunning.GetOperationRequest(
        {name}
      );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new this._gaxModule.Operation(
      operation,
      this.descriptors.longrunning.runPipeline,
      this._gaxModule.createDefaultBackoffSettings()
    );
    return decodeOperation as LROperation<
      protos.google.cloud.lifesciences.v2beta.RunPipelineResponse,
      protos.google.cloud.lifesciences.v2beta.Metadata
    >;
  }
  /**
   * Gets information about a location.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name for the location.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Location]{@link google.cloud.location.Location}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * ```
   * const [response] = await client.getLocation(request);
   * ```
   */
  getLocation(
    request: LocationProtos.google.cloud.location.IGetLocationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          LocationProtos.google.cloud.location.ILocation,
          | LocationProtos.google.cloud.location.IGetLocationRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LocationProtos.google.cloud.location.ILocation,
      | LocationProtos.google.cloud.location.IGetLocationRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<LocationProtos.google.cloud.location.ILocation> {
    return this.locationsClient.getLocation(request, options, callback);
  }

  /**
   * Lists information about the supported locations for this service. Returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The resource that owns the locations collection, if applicable.
   * @param {string} request.filter
   *   The standard list filter.
   * @param {number} request.pageSize
   *   The standard list page size.
   * @param {string} request.pageToken
   *   The standard list page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   [Location]{@link google.cloud.location.Location}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example
   * ```
   * const iterable = client.listLocationsAsync(request);
   * for await (const response of iterable) {
   *   // process response
   * }
   * ```
   */
  listLocationsAsync(
    request: LocationProtos.google.cloud.location.IListLocationsRequest,
    options?: CallOptions
  ): AsyncIterable<LocationProtos.google.cloud.location.ILocation> {
    return this.locationsClient.listLocationsAsync(request, options);
  }

  /**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   *   e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   *   details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing
   * [google.longrunning.Operation]{@link
   * external:"google.longrunning.Operation"}.
   * @return {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   * [google.longrunning.Operation]{@link
   * external:"google.longrunning.Operation"}. The promise has a method named
   * "cancel" which cancels the ongoing API call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * const name = '';
   * const [response] = await client.getOperation({name});
   * // doThingsWith(response)
   * ```
   */
  getOperation(
    request: protos.google.longrunning.GetOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.longrunning.Operation,
          protos.google.longrunning.GetOperationRequest,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.longrunning.Operation,
      protos.google.longrunning.GetOperationRequest,
      {} | null | undefined
    >
  ): Promise<[protos.google.longrunning.Operation]> {
    return this.operationsClient.getOperation(request, options, callback);
  }
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`. Returns an iterable object.
   *
   * For-await-of syntax is used with the iterable to recursively get response element on-demand.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation collection.
   * @param {string} request.filter - The standard list filter.
   * @param {number=} request.pageSize -
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   *   e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   *   https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   *   details.
   * @returns {Object}
   *   An iterable Object that conforms to @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * for await (const response of client.listOperationsAsync(request));
   * // doThingsWith(response)
   * ```
   */
  listOperationsAsync(
    request: protos.google.longrunning.ListOperationsRequest,
    options?: gax.CallOptions
  ): AsyncIterable<protos.google.longrunning.ListOperationsResponse> {
    return this.operationsClient.listOperationsAsync(request, options);
  }
  /**
   * Starts asynchronous cancellation on a long-running operation.  The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
   * {@link Operations.GetOperation} or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with
   * an {@link Operation.error} value with a {@link google.rpc.Status.code} of
   * 1, corresponding to `Code.CANCELLED`.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource to be cancelled.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   * e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   * details.
   * @param {function(?Error)=} callback
   *   The function which will be called with the result of the API call.
   * @return {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API
   * call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * await client.cancelOperation({name: ''});
   * ```
   */
  cancelOperation(
    request: protos.google.longrunning.CancelOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.protobuf.Empty,
          protos.google.longrunning.CancelOperationRequest,
          {} | undefined | null
        >,
    callback?: Callback<
      protos.google.longrunning.CancelOperationRequest,
      protos.google.protobuf.Empty,
      {} | undefined | null
    >
  ): Promise<protos.google.protobuf.Empty> {
    return this.operationsClient.cancelOperation(request, options, callback);
  }

  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   *
   * @param {Object} request - The request object that will be sent.
   * @param {string} request.name - The name of the operation resource to be deleted.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this call,
   * e.g, timeout, retries, paginations, etc. See [gax.CallOptions]{@link
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the
   * details.
   * @param {function(?Error)=} callback
   *   The function which will be called with the result of the API call.
   * @return {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API
   * call.
   *
   * @example
   * ```
   * const client = longrunning.operationsClient();
   * await client.deleteOperation({name: ''});
   * ```
   */
  deleteOperation(
    request: protos.google.longrunning.DeleteOperationRequest,
    options?:
      | gax.CallOptions
      | Callback<
          protos.google.protobuf.Empty,
          protos.google.longrunning.DeleteOperationRequest,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.protobuf.Empty,
      protos.google.longrunning.DeleteOperationRequest,
      {} | null | undefined
    >
  ): Promise<protos.google.protobuf.Empty> {
    return this.operationsClient.deleteOperation(request, options, callback);
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.workflowsServiceV2BetaStub && !this._terminated) {
      return this.workflowsServiceV2BetaStub.then(stub => {
        this._terminated = true;
        stub.close();
        this.locationsClient.close();
        this.operationsClient.close();
      });
    }
    return Promise.resolve();
  }
}
