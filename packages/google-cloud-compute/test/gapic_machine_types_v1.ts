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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as machinetypesModule from '../src';

import {PassThrough} from 'stream';

import {GoogleAuth, protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.MachineTypesClient', () => {
  let googleAuth: GoogleAuth;
  beforeEach(() => {
    googleAuth = {
      getClient: sinon.stub().resolves({
        getRequestHeaders: sinon
          .stub()
          .resolves({Authorization: 'Bearer SOME_TOKEN'}),
      }),
    } as unknown as GoogleAuth;
  });
  afterEach(() => {
    sinon.restore();
  });
  it('has servicePath', () => {
    const servicePath = machinetypesModule.v1.MachineTypesClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = machinetypesModule.v1.MachineTypesClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = machinetypesModule.v1.MachineTypesClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new machinetypesModule.v1.MachineTypesClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new machinetypesModule.v1.MachineTypesClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new machinetypesModule.v1.MachineTypesClient({
      auth: googleAuth,
      projectId: 'bogus',
    });
    assert.strictEqual(client.machineTypesStub, undefined);
    await client.initialize();
    assert(client.machineTypesStub);
  });

  it('has close method for the initialized client', done => {
    const client = new machinetypesModule.v1.MachineTypesClient({
      auth: googleAuth,
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.machineTypesStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new machinetypesModule.v1.MachineTypesClient({
      auth: googleAuth,
      projectId: 'bogus',
    });
    assert.strictEqual(client.machineTypesStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new machinetypesModule.v1.MachineTypesClient({
      auth: googleAuth,
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new machinetypesModule.v1.MachineTypesClient({
      auth: googleAuth,
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('get', () => {
    it('invokes get without error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetMachineTypeRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.compute.v1.MachineType()
      );
      client.innerApiCalls.get = stubSimpleCall(expectedResponse);
      const [response] = await client.get(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.get as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes get without error using callback', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetMachineTypeRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.compute.v1.MachineType()
      );
      client.innerApiCalls.get = stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.get(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.compute.v1.IMachineType | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.get as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes get with error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetMachineTypeRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.get = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.get(request), expectedError);
      assert(
        (client.innerApiCalls.get as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes get with closed client', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetMachineTypeRequest()
      );
      request.project = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.get(request), expectedError);
    });
  });

  describe('aggregatedList', () => {
    it('uses async iteration with aggregatedList without error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.AggregatedListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedResponse = [
        [
          'tuple_key_1',
          generateSampleMessage(
            new protos.google.cloud.compute.v1.MachineTypesScopedList()
          ),
        ],
        [
          'tuple_key_2',
          generateSampleMessage(
            new protos.google.cloud.compute.v1.MachineTypesScopedList()
          ),
        ],
        [
          'tuple_key_3',
          generateSampleMessage(
            new protos.google.cloud.compute.v1.MachineTypesScopedList()
          ),
        ],
      ];
      client.descriptors.page.aggregatedList.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: Array<
        [string, protos.google.cloud.compute.v1.IMachineTypesScopedList]
      > = [];
      const iterable = client.aggregatedListAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.aggregatedList.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.aggregatedList.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with aggregatedList with error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.AggregatedListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedError = new Error('expected');
      client.descriptors.page.aggregatedList.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.aggregatedListAsync(request);
      await assert.rejects(async () => {
        const responses: Array<
          [string, protos.google.cloud.compute.v1.IMachineTypesScopedList]
        > = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.aggregatedList.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.aggregatedList.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('list', () => {
    it('invokes list without error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
      ];
      client.innerApiCalls.list = stubSimpleCall(expectedResponse);
      const [response] = await client.list(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.list as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes list without error using callback', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
      ];
      client.innerApiCalls.list = stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.list(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.compute.v1.IMachineType[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.list as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes list with error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.list = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.list(request), expectedError);
      assert(
        (client.innerApiCalls.list as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listStream without error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
      ];
      client.descriptors.page.list.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.compute.v1.MachineType[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.compute.v1.MachineType) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.list, request)
      );
      assert.strictEqual(
        (client.descriptors.page.list.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listStream with error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedError = new Error('expected');
      client.descriptors.page.list.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.compute.v1.MachineType[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.compute.v1.MachineType) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.list, request)
      );
      assert.strictEqual(
        (client.descriptors.page.list.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with list without error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
        generateSampleMessage(new protos.google.cloud.compute.v1.MachineType()),
      ];
      client.descriptors.page.list.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.compute.v1.IMachineType[] = [];
      const iterable = client.listAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with list with error', async () => {
      const client = new machinetypesModule.v1.MachineTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListMachineTypesRequest()
      );
      request.project = '';
      const expectedHeaderRequestParams = 'project=';
      const expectedError = new Error('expected');
      client.descriptors.page.list.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.compute.v1.IMachineType[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });
});
