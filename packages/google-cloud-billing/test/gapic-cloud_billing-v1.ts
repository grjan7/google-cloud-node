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
const cloudbillingModule = require('../src');

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
describe('v1.CloudBillingClient', () => {
  it('has servicePath', () => {
    const servicePath = cloudbillingModule.v1.CloudBillingClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint = cloudbillingModule.v1.CloudBillingClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = cloudbillingModule.v1.CloudBillingClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new cloudbillingModule.v1.CloudBillingClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new cloudbillingModule.v1.CloudBillingClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new cloudbillingModule.v1.CloudBillingClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.cloudBillingStub, undefined);
    await client.initialize();
    assert(client.cloudBillingStub);
  });
  it('has close method', () => {
    const client = new cloudbillingModule.v1.CloudBillingClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('getBillingAccount', () => {
    it('invokes getBillingAccount without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IGetBillingAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getBillingAccount = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getBillingAccount(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getBillingAccount with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IGetBillingAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getBillingAccount = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getBillingAccount(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateBillingAccount', () => {
    it('invokes updateBillingAccount without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IUpdateBillingAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateBillingAccount = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateBillingAccount(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateBillingAccount with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IUpdateBillingAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateBillingAccount = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateBillingAccount(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createBillingAccount', () => {
    it('invokes createBillingAccount without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.ICreateBillingAccountRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createBillingAccount = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createBillingAccount(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createBillingAccount with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.ICreateBillingAccountRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createBillingAccount = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createBillingAccount(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getProjectBillingInfo', () => {
    it('invokes getProjectBillingInfo without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IGetProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProjectBillingInfo = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getProjectBillingInfo(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProjectBillingInfo with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IGetProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProjectBillingInfo = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getProjectBillingInfo(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateProjectBillingInfo', () => {
    it('invokes updateProjectBillingInfo without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IUpdateProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProjectBillingInfo = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateProjectBillingInfo(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProjectBillingInfo with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IUpdateProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProjectBillingInfo = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateProjectBillingInfo(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIamPolicy with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.setIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setIamPolicy with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.setIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.testIamPermissions(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes testIamPermissions with error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.testIamPermissions(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('listBillingAccounts', () => {
    it('invokes listBillingAccounts without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IListBillingAccountsRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listBillingAccounts = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listBillingAccounts(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listBillingAccountsStream', () => {
    it('invokes listBillingAccountsStream without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IListBillingAccountsRequest = {};
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listBillingAccounts = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listBillingAccountsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listProjectBillingInfo', () => {
    it('invokes listProjectBillingInfo without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IListProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listProjectBillingInfo = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listProjectBillingInfo(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listProjectBillingInfoStream', () => {
    it('invokes listProjectBillingInfoStream without error', done => {
      const client = new cloudbillingModule.v1.CloudBillingClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.billing.v1.IListProjectBillingInfoRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listProjectBillingInfo = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listProjectBillingInfoStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
