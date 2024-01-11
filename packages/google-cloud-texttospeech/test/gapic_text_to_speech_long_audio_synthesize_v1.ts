// Copyright 2024 Google LLC
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
import * as texttospeechlongaudiosynthesizeModule from '../src';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

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

function stubLongRunningCall<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().rejects(callError)
    : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().callsArgWith(2, callError)
    : sinon.stub().callsArgWith(2, null, mockOperation);
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

describe('v1.TextToSpeechLongAudioSynthesizeClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        texttospeechlongaudiosynthesizeModule.v1
          .TextToSpeechLongAudioSynthesizeClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        texttospeechlongaudiosynthesizeModule.v1
          .TextToSpeechLongAudioSynthesizeClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port =
        texttospeechlongaudiosynthesizeModule.v1
          .TextToSpeechLongAudioSynthesizeClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            fallback: true,
          }
        );
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.textToSpeechLongAudioSynthesizeStub, undefined);
      await client.initialize();
      assert(client.textToSpeechLongAudioSynthesizeStub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      assert(client.textToSpeechLongAudioSynthesizeStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.textToSpeechLongAudioSynthesizeStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
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

  describe('synthesizeLongAudio', () => {
    it('invokes synthesizeLongAudio without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.synthesizeLongAudio =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.synthesizeLongAudio(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes synthesizeLongAudio without error using callback', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.synthesizeLongAudio =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.synthesizeLongAudio(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.texttospeech.v1.ISynthesizeLongAudioResponse,
              protos.google.cloud.texttospeech.v1.ISynthesizeLongAudioMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.texttospeech.v1.ISynthesizeLongAudioResponse,
        protos.google.cloud.texttospeech.v1.ISynthesizeLongAudioMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes synthesizeLongAudio with call error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.synthesizeLongAudio = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.synthesizeLongAudio(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes synthesizeLongAudio with LRO error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.texttospeech.v1.SynthesizeLongAudioRequest',
        ['parent']
      );
      request.parent = defaultValue1;
      const expectedHeaderRequestParams = `parent=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.synthesizeLongAudio = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.synthesizeLongAudio(request);
      await assert.rejects(operation.promise(), expectedError);
      const actualRequest = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.synthesizeLongAudio as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes checkSynthesizeLongAudioProgress without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkSynthesizeLongAudioProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkSynthesizeLongAudioProgress with error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkSynthesizeLongAudioProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });
  describe('getOperation', () => {
    it('invokes getOperation without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.GetOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const response = await client.getOperation(request);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.operationsClient.getOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
    it('invokes getOperation without error using callback', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.GetOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      client.operationsClient.getOperation = sinon
        .stub()
        .callsArgWith(2, null, expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.operationsClient.getOperation(
          request,
          undefined,
          (
            err?: Error | null,
            result?: operationsProtos.google.longrunning.Operation | null
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
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
    it('invokes getOperation with error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.GetOperationRequest()
      );
      const expectedError = new Error('expected');
      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(async () => {
        await client.getOperation(request);
      }, expectedError);
      assert(
        (client.operationsClient.getOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
  });
  describe('cancelOperation', () => {
    it('invokes cancelOperation without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.CancelOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.operationsClient.cancelOperation =
        stubSimpleCall(expectedResponse);
      const response = await client.cancelOperation(request);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.operationsClient.cancelOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
    it('invokes cancelOperation without error using callback', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.CancelOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.operationsClient.cancelOperation = sinon
        .stub()
        .callsArgWith(2, null, expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.operationsClient.cancelOperation(
          request,
          undefined,
          (
            err?: Error | null,
            result?: protos.google.protobuf.Empty | null
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
      assert((client.operationsClient.cancelOperation as SinonStub).getCall(0));
    });
    it('invokes cancelOperation with error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.CancelOperationRequest()
      );
      const expectedError = new Error('expected');
      client.operationsClient.cancelOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(async () => {
        await client.cancelOperation(request);
      }, expectedError);
      assert(
        (client.operationsClient.cancelOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
  });
  describe('deleteOperation', () => {
    it('invokes deleteOperation without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.DeleteOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.operationsClient.deleteOperation =
        stubSimpleCall(expectedResponse);
      const response = await client.deleteOperation(request);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.operationsClient.deleteOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
    it('invokes deleteOperation without error using callback', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.DeleteOperationRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.operationsClient.deleteOperation = sinon
        .stub()
        .callsArgWith(2, null, expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.operationsClient.deleteOperation(
          request,
          undefined,
          (
            err?: Error | null,
            result?: protos.google.protobuf.Empty | null
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
      assert((client.operationsClient.deleteOperation as SinonStub).getCall(0));
    });
    it('invokes deleteOperation with error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.DeleteOperationRequest()
      );
      const expectedError = new Error('expected');
      client.operationsClient.deleteOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(async () => {
        await client.deleteOperation(request);
      }, expectedError);
      assert(
        (client.operationsClient.deleteOperation as SinonStub)
          .getCall(0)
          .calledWith(request)
      );
    });
  });
  describe('listOperationsAsync', () => {
    it('uses async iteration with listOperations without error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.ListOperationsRequest()
      );
      const expectedResponse = [
        generateSampleMessage(
          new operationsProtos.google.longrunning.ListOperationsResponse()
        ),
        generateSampleMessage(
          new operationsProtos.google.longrunning.ListOperationsResponse()
        ),
        generateSampleMessage(
          new operationsProtos.google.longrunning.ListOperationsResponse()
        ),
      ];
      client.operationsClient.descriptor.listOperations.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: operationsProtos.google.longrunning.ListOperationsResponse[] =
        [];
      const iterable = client.operationsClient.listOperationsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.operationsClient.descriptor.listOperations
            .asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
    });
    it('uses async iteration with listOperations with error', async () => {
      const client =
        new texttospeechlongaudiosynthesizeModule.v1.TextToSpeechLongAudioSynthesizeClient(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new operationsProtos.google.longrunning.ListOperationsRequest()
      );
      const expectedError = new Error('expected');
      client.operationsClient.descriptor.listOperations.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.operationsClient.listOperationsAsync(request);
      await assert.rejects(async () => {
        const responses: operationsProtos.google.longrunning.ListOperationsResponse[] =
          [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.operationsClient.descriptor.listOperations
            .asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
    });
  });
});
