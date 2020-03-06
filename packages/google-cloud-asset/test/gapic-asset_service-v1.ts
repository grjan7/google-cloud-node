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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const assetserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
describe('v1.AssetServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = assetserviceModule.v1.AssetServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint = assetserviceModule.v1.AssetServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = assetserviceModule.v1.AssetServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new assetserviceModule.v1.AssetServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new assetserviceModule.v1.AssetServiceClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new assetserviceModule.v1.AssetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.assetServiceStub, undefined);
    await client.initialize();
    assert(client.assetServiceStub);
  });
  it('has close method', () => {
    const client = new assetserviceModule.v1.AssetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('batchGetAssetsHistory', () => {
    it('invokes batchGetAssetsHistory without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IBatchGetAssetsHistoryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.batchGetAssetsHistory(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes batchGetAssetsHistory with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IBatchGetAssetsHistoryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.batchGetAssetsHistory = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.batchGetAssetsHistory(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createFeed', () => {
    it('invokes createFeed without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.ICreateFeedRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createFeed(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createFeed with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.ICreateFeedRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createFeed(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getFeed', () => {
    it('invokes getFeed without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IGetFeedRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getFeed(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getFeed with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IGetFeedRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getFeed(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listFeeds', () => {
    it('invokes listFeeds without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IListFeedsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listFeeds = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listFeeds(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listFeeds with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IListFeedsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listFeeds = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listFeeds(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateFeed', () => {
    it('invokes updateFeed without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IUpdateFeedRequest = {};
      request.feed = {};
      request.feed.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateFeed(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateFeed with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IUpdateFeedRequest = {};
      request.feed = {};
      request.feed.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateFeed(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteFeed', () => {
    it('invokes deleteFeed without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IDeleteFeedRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteFeed = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteFeed(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteFeed with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IDeleteFeedRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteFeed = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteFeed(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('exportAssets', () => {
    it('invokes exportAssets without error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IExportAssetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .exportAssets(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes exportAssets with error', done => {
      const client = new assetserviceModule.v1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.asset.v1.IExportAssetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.exportAssets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .exportAssets(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
});
