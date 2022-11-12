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
import * as resourcesettingsserviceModule from '../src';

import {PassThrough} from 'stream';

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

describe('v1.ResourceSettingsServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        resourcesettingsserviceModule.v1.ResourceSettingsServiceClient
          .servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        resourcesettingsserviceModule.v1.ResourceSettingsServiceClient
          .apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port =
        resourcesettingsserviceModule.v1.ResourceSettingsServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          fallback: true,
        });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.resourceSettingsServiceStub, undefined);
      await client.initialize();
      assert(client.resourceSettingsServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      assert(client.resourceSettingsServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.resourceSettingsServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
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
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
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

  describe('getSetting', () => {
    it('invokes getSetting without error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.GetSettingRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.GetSettingRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.Setting()
      );
      client.innerApiCalls.getSetting = stubSimpleCall(expectedResponse);
      const [response] = await client.getSetting(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSetting without error using callback', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.GetSettingRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.GetSettingRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.Setting()
      );
      client.innerApiCalls.getSetting =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getSetting(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.resourcesettings.v1.ISetting | null
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
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSetting with error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.GetSettingRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.GetSettingRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getSetting = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getSetting(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSetting with closed client', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.GetSettingRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.GetSettingRequest',
        ['name']
      );
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getSetting(request), expectedError);
    });
  });

  describe('updateSetting', () => {
    it('invokes updateSetting without error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.UpdateSettingRequest()
      );
      request.setting ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.UpdateSettingRequest',
        ['setting', 'name']
      );
      request.setting.name = defaultValue1;
      const expectedHeaderRequestParams = `setting.name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.Setting()
      );
      client.innerApiCalls.updateSetting = stubSimpleCall(expectedResponse);
      const [response] = await client.updateSetting(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateSetting without error using callback', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.UpdateSettingRequest()
      );
      request.setting ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.UpdateSettingRequest',
        ['setting', 'name']
      );
      request.setting.name = defaultValue1;
      const expectedHeaderRequestParams = `setting.name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.Setting()
      );
      client.innerApiCalls.updateSetting =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.updateSetting(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.resourcesettings.v1.ISetting | null
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
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateSetting with error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.UpdateSettingRequest()
      );
      request.setting ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.UpdateSettingRequest',
        ['setting', 'name']
      );
      request.setting.name = defaultValue1;
      const expectedHeaderRequestParams = `setting.name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.updateSetting = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateSetting(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.updateSetting as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes updateSetting with closed client', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.UpdateSettingRequest()
      );
      request.setting ??= {};
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.UpdateSettingRequest',
        ['setting', 'name']
      );
      request.setting.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.updateSetting(request), expectedError);
    });
  });

  describe('listSettings', () => {
    it('invokes listSettings without error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
      ];
      client.innerApiCalls.listSettings = stubSimpleCall(expectedResponse);
      const [response] = await client.listSettings(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listSettings without error using callback', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
      ];
      client.innerApiCalls.listSettings =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listSettings(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.resourcesettings.v1.ISetting[] | null
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
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listSettings with error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.listSettings = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listSettings(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.listSettings as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listSettingsStream without error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
      ];
      client.descriptors.page.listSettings.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listSettingsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.resourcesettings.v1.Setting[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.resourcesettings.v1.Setting) => {
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
        (client.descriptors.page.listSettings.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listSettings, request)
      );
      assert(
        (client.descriptors.page.listSettings.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes listSettingsStream with error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listSettings.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listSettingsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.resourcesettings.v1.Setting[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.resourcesettings.v1.Setting) => {
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
        (client.descriptors.page.listSettings.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listSettings, request)
      );
      assert(
        (client.descriptors.page.listSettings.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listSettings without error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
        generateSampleMessage(
          new protos.google.cloud.resourcesettings.v1.Setting()
        ),
      ];
      client.descriptors.page.listSettings.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.resourcesettings.v1.ISetting[] = [];
      const iterable = client.listSettingsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listSettings.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listSettings.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with listSettings with error', async () => {
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.resourcesettings.v1.ListSettingsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.resourcesettings.v1.ListSettingsRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.listSettings.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listSettingsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.resourcesettings.v1.ISetting[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listSettings.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert(
        (client.descriptors.page.listSettings.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });

  describe('Path templates', () => {
    describe('folderSettingName', () => {
      const fakePath = '/rendered/path/folderSettingName';
      const expectedParameters = {
        folder: 'folderValue',
        setting_name: 'settingNameValue',
      };
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.folderSettingNamePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.folderSettingNamePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('folderSettingNamePath', () => {
        const result = client.folderSettingNamePath(
          'folderValue',
          'settingNameValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.folderSettingNamePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchFolderFromFolderSettingNameName', () => {
        const result = client.matchFolderFromFolderSettingNameName(fakePath);
        assert.strictEqual(result, 'folderValue');
        assert(
          (
            client.pathTemplates.folderSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSettingNameFromFolderSettingNameName', () => {
        const result =
          client.matchSettingNameFromFolderSettingNameName(fakePath);
        assert.strictEqual(result, 'settingNameValue');
        assert(
          (
            client.pathTemplates.folderSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('organizationSettingName', () => {
      const fakePath = '/rendered/path/organizationSettingName';
      const expectedParameters = {
        organization: 'organizationValue',
        setting_name: 'settingNameValue',
      };
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.organizationSettingNamePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.organizationSettingNamePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('organizationSettingNamePath', () => {
        const result = client.organizationSettingNamePath(
          'organizationValue',
          'settingNameValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.organizationSettingNamePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchOrganizationFromOrganizationSettingNameName', () => {
        const result =
          client.matchOrganizationFromOrganizationSettingNameName(fakePath);
        assert.strictEqual(result, 'organizationValue');
        assert(
          (
            client.pathTemplates.organizationSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSettingNameFromOrganizationSettingNameName', () => {
        const result =
          client.matchSettingNameFromOrganizationSettingNameName(fakePath);
        assert.strictEqual(result, 'settingNameValue');
        assert(
          (
            client.pathTemplates.organizationSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectNumberSettingName', () => {
      const fakePath = '/rendered/path/projectNumberSettingName';
      const expectedParameters = {
        project_number: 'projectNumberValue',
        setting_name: 'settingNameValue',
      };
      const client =
        new resourcesettingsserviceModule.v1.ResourceSettingsServiceClient({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.projectNumberSettingNamePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectNumberSettingNamePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectNumberSettingNamePath', () => {
        const result = client.projectNumberSettingNamePath(
          'projectNumberValue',
          'settingNameValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectNumberSettingNamePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectNumberFromProjectNumberSettingNameName', () => {
        const result =
          client.matchProjectNumberFromProjectNumberSettingNameName(fakePath);
        assert.strictEqual(result, 'projectNumberValue');
        assert(
          (
            client.pathTemplates.projectNumberSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSettingNameFromProjectNumberSettingNameName', () => {
        const result =
          client.matchSettingNameFromProjectNumberSettingNameName(fakePath);
        assert.strictEqual(result, 'settingNameValue');
        assert(
          (
            client.pathTemplates.projectNumberSettingNamePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
