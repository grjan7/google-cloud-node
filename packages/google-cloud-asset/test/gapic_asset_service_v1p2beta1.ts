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
import * as assetserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

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

describe('v1p2beta1.AssetServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        assetserviceModule.v1p2beta1.AssetServiceClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        assetserviceModule.v1p2beta1.AssetServiceClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = assetserviceModule.v1p2beta1.AssetServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.assetServiceStub, undefined);
      await client.initialize();
      assert(client.assetServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.assetServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.assetServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
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
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
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
  });

  describe('createFeed', () => {
    it('invokes createFeed without error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.CreateFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.CreateFeedRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.createFeed = stubSimpleCall(expectedResponse);
      const [response] = await client.createFeed(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createFeed without error using callback', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.CreateFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.CreateFeedRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.createFeed =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createFeed(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.asset.v1p2beta1.IFeed | null
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
      const actualRequest = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createFeed with error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.CreateFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.CreateFeedRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.createFeed = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createFeed(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.createFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes createFeed with closed client', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.CreateFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.CreateFeedRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.createFeed(request), expectedError);
    });
  });

  describe('getFeed', () => {
    it('invokes getFeed without error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.GetFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.GetFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.getFeed = stubSimpleCall(expectedResponse);
      const [response] = await client.getFeed(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.getFeed as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFeed without error using callback', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.GetFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.GetFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.getFeed =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getFeed(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.asset.v1p2beta1.IFeed | null
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
      const actualRequest = (client.innerApiCalls.getFeed as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFeed with error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.GetFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.GetFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getFeed = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.getFeed(request), expectedError);
      const actualRequest = (client.innerApiCalls.getFeed as SinonStub).getCall(
        0
      ).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getFeed with closed client', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.GetFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.GetFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getFeed(request), expectedError);
    });
  });

  describe('listFeeds', () => {
    it('invokes listFeeds without error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.ListFeedsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsResponse()
      );
      client.innerApiCalls.listFeeds = stubSimpleCall(expectedResponse);
      const [response] = await client.listFeeds(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listFeeds without error using callback', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.ListFeedsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsResponse()
      );
      client.innerApiCalls.listFeeds =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listFeeds(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.asset.v1p2beta1.IListFeedsResponse | null
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
      const actualRequest = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listFeeds with error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.ListFeedsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listFeeds = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.listFeeds(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listFeeds as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listFeeds with closed client', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.ListFeedsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.ListFeedsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.listFeeds(request), expectedError);
    });
  });

  describe('updateFeed', () => {
    it('invokes updateFeed without error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.UpdateFeedRequest()
      );
      request.feed ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.UpdateFeedRequest',
        ['feed', 'name']
      );
      request.feed.name = defaultValue1;
      const expectedHeaderRequestParams = `feed.name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.updateFeed = stubSimpleCall(expectedResponse);
      const [response] = await client.updateFeed(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateFeed without error using callback', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.UpdateFeedRequest()
      );
      request.feed ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.UpdateFeedRequest',
        ['feed', 'name']
      );
      request.feed.name = defaultValue1;
      const expectedHeaderRequestParams = `feed.name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.Feed()
      );
      client.innerApiCalls.updateFeed =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.updateFeed(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.asset.v1p2beta1.IFeed | null
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
      const actualRequest = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateFeed with error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.UpdateFeedRequest()
      );
      request.feed ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.UpdateFeedRequest',
        ['feed', 'name']
      );
      request.feed.name = defaultValue1;
      const expectedHeaderRequestParams = `feed.name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.updateFeed = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateFeed(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateFeed with closed client', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.UpdateFeedRequest()
      );
      request.feed ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.UpdateFeedRequest',
        ['feed', 'name']
      );
      request.feed.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.updateFeed(request), expectedError);
    });
  });

  describe('deleteFeed', () => {
    it('invokes deleteFeed without error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.DeleteFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.DeleteFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteFeed = stubSimpleCall(expectedResponse);
      const [response] = await client.deleteFeed(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteFeed without error using callback', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.DeleteFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.DeleteFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteFeed =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteFeed(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
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
      const actualRequest = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteFeed with error', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.DeleteFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.DeleteFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteFeed = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteFeed(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.deleteFeed as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes deleteFeed with closed client', async () => {
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.asset.v1p2beta1.DeleteFeedRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.asset.v1p2beta1.DeleteFeedRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.deleteFeed(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('folderFeed', () => {
      const fakePath = '/rendered/path/folderFeed';
      const expectedParameters = {
        folder: 'folderValue',
        feed: 'feedValue',
      };
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.folderFeedPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.folderFeedPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('folderFeedPath', () => {
        const result = client.folderFeedPath('folderValue', 'feedValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.folderFeedPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchFolderFromFolderFeedName', () => {
        const result = client.matchFolderFromFolderFeedName(fakePath);
        assert.strictEqual(result, 'folderValue');
        assert(
          (client.pathTemplates.folderFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchFeedFromFolderFeedName', () => {
        const result = client.matchFeedFromFolderFeedName(fakePath);
        assert.strictEqual(result, 'feedValue');
        assert(
          (client.pathTemplates.folderFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('organizationFeed', () => {
      const fakePath = '/rendered/path/organizationFeed';
      const expectedParameters = {
        organization: 'organizationValue',
        feed: 'feedValue',
      };
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.organizationFeedPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.organizationFeedPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('organizationFeedPath', () => {
        const result = client.organizationFeedPath(
          'organizationValue',
          'feedValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.organizationFeedPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchOrganizationFromOrganizationFeedName', () => {
        const result =
          client.matchOrganizationFromOrganizationFeedName(fakePath);
        assert.strictEqual(result, 'organizationValue');
        assert(
          (client.pathTemplates.organizationFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchFeedFromOrganizationFeedName', () => {
        const result = client.matchFeedFromOrganizationFeedName(fakePath);
        assert.strictEqual(result, 'feedValue');
        assert(
          (client.pathTemplates.organizationFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectFeed', () => {
      const fakePath = '/rendered/path/projectFeed';
      const expectedParameters = {
        project: 'projectValue',
        feed: 'feedValue',
      };
      const client = new assetserviceModule.v1p2beta1.AssetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectFeedPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectFeedPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectFeedPath', () => {
        const result = client.projectFeedPath('projectValue', 'feedValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectFeedPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectFeedName', () => {
        const result = client.matchProjectFromProjectFeedName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchFeedFromProjectFeedName', () => {
        const result = client.matchFeedFromProjectFeedName(fakePath);
        assert.strictEqual(result, 'feedValue');
        assert(
          (client.pathTemplates.projectFeedPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
