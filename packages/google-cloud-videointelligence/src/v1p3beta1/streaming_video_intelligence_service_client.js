// Copyright 2019 Google LLC
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

'use strict';

const gapicConfig = require('./streaming_video_intelligence_service_client_config.json');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Service that implements Google Cloud Video Intelligence Streaming API.
 *
 * @class
 * @memberof v1p3beta1
 */
class StreamingVideoIntelligenceServiceClient {
  /**
   * Construct an instance of StreamingVideoIntelligenceServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
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
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/videointelligence/v1p3beta1/video_intelligence.proto'
      )
    );

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this._descriptors.stream = {
      streamingAnnotateVideo: new gax.StreamDescriptor(
        gax.StreamType.BIDI_STREAMING
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.videointelligence.v1p3beta1.StreamingVideoIntelligenceService.
    const streamingVideoIntelligenceServiceStub = gaxGrpc.createStub(
      protos.google.cloud.videointelligence.v1p3beta1
        .StreamingVideoIntelligenceService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const streamingVideoIntelligenceServiceStubMethods = [
      'streamingAnnotateVideo',
    ];
    for (const methodName of streamingVideoIntelligenceServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        streamingVideoIntelligenceServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            },
          err =>
            function() {
              throw err;
            }
        ),
        defaults[methodName],
        this._descriptors.stream[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'videointelligence.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Performs video annotation with bidirectional streaming: emitting results
   * while sending video/audio bytes.
   * This method is only available via the gRPC API (not REST).
   *
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which is both readable and writable. It accepts objects
   *   representing [StreamingAnnotateVideoRequest]{@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoRequest} for write() method, and
   *   will emit objects representing [StreamingAnnotateVideoResponse]{@link google.cloud.videointelligence.v1p3beta1.StreamingAnnotateVideoResponse} on 'data' event asynchronously.
   *
   * @example
   *
   * const videoIntelligence = require('@google-cloud/video-intelligence');
   *
   * const client = new videoIntelligence.v1p3beta1.StreamingVideoIntelligenceServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const stream = client.streamingAnnotateVideo().on('data', response => {
   *   // doThingsWith(response)
   * });
   * const request = {};
   * // Write request objects.
   * stream.write(request);
   */
  streamingAnnotateVideo(options) {
    options = options || {};

    return this._innerApiCalls.streamingAnnotateVideo(options);
  }
}

module.exports = StreamingVideoIntelligenceServiceClient;
