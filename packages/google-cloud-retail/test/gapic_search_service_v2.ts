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
import {describe, it} from 'mocha';
import * as searchserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

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

describe('v2.SearchServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = searchserviceModule.v2.SearchServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = searchserviceModule.v2.SearchServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = searchserviceModule.v2.SearchServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new searchserviceModule.v2.SearchServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new searchserviceModule.v2.SearchServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new searchserviceModule.v2.SearchServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.searchServiceStub, undefined);
    await client.initialize();
    assert(client.searchServiceStub);
  });

  it('has close method for the initialized client', done => {
    const client = new searchserviceModule.v2.SearchServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.searchServiceStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new searchserviceModule.v2.SearchServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.searchServiceStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new searchserviceModule.v2.SearchServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new searchserviceModule.v2.SearchServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
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

  describe('search', () => {
    it('invokes search without error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
      ];
      client.innerApiCalls.search = stubSimpleCall(expectedResponse);
      const [response] = await client.search(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.search as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes search without error using callback', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
      ];
      client.innerApiCalls.search =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.search(
          request,
          (
            err?: Error | null,
            result?:
              | protos.google.cloud.retail.v2.SearchResponse.ISearchResult[]
              | null
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
        (client.innerApiCalls.search as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes search with error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.search = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.search(request), expectedError);
      assert(
        (client.innerApiCalls.search as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes searchStream without error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
      ];
      client.descriptors.page.search.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.searchStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.retail.v2.SearchResponse.SearchResult[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.retail.v2.SearchResponse.SearchResult
          ) => {
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
        (client.descriptors.page.search.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.search, request)
      );
      assert.strictEqual(
        (client.descriptors.page.search.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes searchStream with error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedError = new Error('expected');
      client.descriptors.page.search.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.searchStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.retail.v2.SearchResponse.SearchResult[] =
          [];
        stream.on(
          'data',
          (
            response: protos.google.cloud.retail.v2.SearchResponse.SearchResult
          ) => {
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
        (client.descriptors.page.search.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.search, request)
      );
      assert.strictEqual(
        (client.descriptors.page.search.createStream as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with search without error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
        generateSampleMessage(
          new protos.google.cloud.retail.v2.SearchResponse.SearchResult()
        ),
      ];
      client.descriptors.page.search.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.retail.v2.SearchResponse.ISearchResult[] =
        [];
      const iterable = client.searchAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.search.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.search.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with search with error', async () => {
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.retail.v2.SearchRequest()
      );
      request.placement = '';
      const expectedHeaderRequestParams = 'placement=';
      const expectedError = new Error('expected');
      client.descriptors.page.search.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.searchAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.retail.v2.SearchResponse.ISearchResult[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.search.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.search.asyncIterate as SinonStub).getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('branch', () => {
      const fakePath = '/rendered/path/branch';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        catalog: 'catalogValue',
        branch: 'branchValue',
      };
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.branchPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.branchPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('branchPath', () => {
        const result = client.branchPath(
          'projectValue',
          'locationValue',
          'catalogValue',
          'branchValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.branchPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromBranchName', () => {
        const result = client.matchProjectFromBranchName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.branchPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromBranchName', () => {
        const result = client.matchLocationFromBranchName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.branchPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCatalogFromBranchName', () => {
        const result = client.matchCatalogFromBranchName(fakePath);
        assert.strictEqual(result, 'catalogValue');
        assert(
          (client.pathTemplates.branchPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchBranchFromBranchName', () => {
        const result = client.matchBranchFromBranchName(fakePath);
        assert.strictEqual(result, 'branchValue');
        assert(
          (client.pathTemplates.branchPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('catalog', () => {
      const fakePath = '/rendered/path/catalog';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        catalog: 'catalogValue',
      };
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.catalogPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.catalogPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('catalogPath', () => {
        const result = client.catalogPath(
          'projectValue',
          'locationValue',
          'catalogValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.catalogPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromCatalogName', () => {
        const result = client.matchProjectFromCatalogName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.catalogPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromCatalogName', () => {
        const result = client.matchLocationFromCatalogName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.catalogPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCatalogFromCatalogName', () => {
        const result = client.matchCatalogFromCatalogName(fakePath);
        assert.strictEqual(result, 'catalogValue');
        assert(
          (client.pathTemplates.catalogPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('product', () => {
      const fakePath = '/rendered/path/product';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        catalog: 'catalogValue',
        branch: 'branchValue',
        product: 'productValue',
      };
      const client = new searchserviceModule.v2.SearchServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.productPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.productPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('productPath', () => {
        const result = client.productPath(
          'projectValue',
          'locationValue',
          'catalogValue',
          'branchValue',
          'productValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.productPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProductName', () => {
        const result = client.matchProjectFromProductName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProductName', () => {
        const result = client.matchLocationFromProductName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCatalogFromProductName', () => {
        const result = client.matchCatalogFromProductName(fakePath);
        assert.strictEqual(result, 'catalogValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchBranchFromProductName', () => {
        const result = client.matchBranchFromProductName(fakePath);
        assert.strictEqual(result, 'branchValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchProductFromProductName', () => {
        const result = client.matchProductFromProductName(fakePath);
        assert.strictEqual(result, 'productValue');
        assert(
          (client.pathTemplates.productPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
