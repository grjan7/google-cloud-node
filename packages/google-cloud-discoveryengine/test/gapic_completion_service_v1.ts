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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as completionserviceModule from '../src';

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

describe('v1.CompletionServiceClient', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        completionserviceModule.v1.CompletionServiceClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        completionserviceModule.v1.CompletionServiceClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = completionserviceModule.v1.CompletionServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new completionserviceModule.v1.CompletionServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.completionServiceStub, undefined);
      await client.initialize();
      assert(client.completionServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.completionServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.completionServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new completionserviceModule.v1.CompletionServiceClient({
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
      const client = new completionserviceModule.v1.CompletionServiceClient({
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

  describe('completeQuery', () => {
    it('invokes completeQuery without error', async () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.discoveryengine.v1.CompleteQueryRequest',
        ['dataStore']
      );
      request.dataStore = defaultValue1;
      const expectedHeaderRequestParams = `data_store=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryResponse()
      );
      client.innerApiCalls.completeQuery = stubSimpleCall(expectedResponse);
      const [response] = await client.completeQuery(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes completeQuery without error using callback', async () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.discoveryengine.v1.CompleteQueryRequest',
        ['dataStore']
      );
      request.dataStore = defaultValue1;
      const expectedHeaderRequestParams = `data_store=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryResponse()
      );
      client.innerApiCalls.completeQuery =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.completeQuery(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.discoveryengine.v1.ICompleteQueryResponse | null
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
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes completeQuery with error', async () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.discoveryengine.v1.CompleteQueryRequest',
        ['dataStore']
      );
      request.dataStore = defaultValue1;
      const expectedHeaderRequestParams = `data_store=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.completeQuery = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.completeQuery(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.completeQuery as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes completeQuery with closed client', async () => {
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.discoveryengine.v1.CompleteQueryRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.discoveryengine.v1.CompleteQueryRequest',
        ['dataStore']
      );
      request.dataStore = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.completeQuery(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('projectLocationCollectionDataStore', () => {
      const fakePath = '/rendered/path/projectLocationCollectionDataStore';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        collection: 'collectionValue',
        data_store: 'dataStoreValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationCollectionDataStorePathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.projectLocationCollectionDataStorePathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('projectLocationCollectionDataStorePath', () => {
        const result = client.projectLocationCollectionDataStorePath(
          'projectValue',
          'locationValue',
          'collectionValue',
          'dataStoreValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectLocationCollectionDataStorePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationCollectionDataStoreName', () => {
        const result =
          client.matchProjectFromProjectLocationCollectionDataStoreName(
            fakePath
          );
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.projectLocationCollectionDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationCollectionDataStoreName', () => {
        const result =
          client.matchLocationFromProjectLocationCollectionDataStoreName(
            fakePath
          );
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates.projectLocationCollectionDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCollectionFromProjectLocationCollectionDataStoreName', () => {
        const result =
          client.matchCollectionFromProjectLocationCollectionDataStoreName(
            fakePath
          );
        assert.strictEqual(result, 'collectionValue');
        assert(
          (
            client.pathTemplates.projectLocationCollectionDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationCollectionDataStoreName', () => {
        const result =
          client.matchDataStoreFromProjectLocationCollectionDataStoreName(
            fakePath
          );
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates.projectLocationCollectionDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectLocationCollectionDataStoreBranchDocument', () => {
      const fakePath =
        '/rendered/path/projectLocationCollectionDataStoreBranchDocument';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        collection: 'collectionValue',
        data_store: 'dataStoreValue',
        branch: 'branchValue',
        document: 'documentValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationCollectionDataStoreBranchDocumentPathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.projectLocationCollectionDataStoreBranchDocumentPathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('projectLocationCollectionDataStoreBranchDocumentPath', () => {
        const result =
          client.projectLocationCollectionDataStoreBranchDocumentPath(
            'projectValue',
            'locationValue',
            'collectionValue',
            'dataStoreValue',
            'branchValue',
            'documentValue'
          );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchProjectFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchLocationFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCollectionFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchCollectionFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'collectionValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchDataStoreFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchBranchFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchBranchFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'branchValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDocumentFromProjectLocationCollectionDataStoreBranchDocumentName', () => {
        const result =
          client.matchDocumentFromProjectLocationCollectionDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'documentValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectLocationCollectionDataStoreSchema', () => {
      const fakePath =
        '/rendered/path/projectLocationCollectionDataStoreSchema';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        collection: 'collectionValue',
        data_store: 'dataStoreValue',
        schema: 'schemaValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationCollectionDataStoreSchemaPathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.projectLocationCollectionDataStoreSchemaPathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('projectLocationCollectionDataStoreSchemaPath', () => {
        const result = client.projectLocationCollectionDataStoreSchemaPath(
          'projectValue',
          'locationValue',
          'collectionValue',
          'dataStoreValue',
          'schemaValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationCollectionDataStoreSchemaName', () => {
        const result =
          client.matchProjectFromProjectLocationCollectionDataStoreSchemaName(
            fakePath
          );
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationCollectionDataStoreSchemaName', () => {
        const result =
          client.matchLocationFromProjectLocationCollectionDataStoreSchemaName(
            fakePath
          );
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchCollectionFromProjectLocationCollectionDataStoreSchemaName', () => {
        const result =
          client.matchCollectionFromProjectLocationCollectionDataStoreSchemaName(
            fakePath
          );
        assert.strictEqual(result, 'collectionValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationCollectionDataStoreSchemaName', () => {
        const result =
          client.matchDataStoreFromProjectLocationCollectionDataStoreSchemaName(
            fakePath
          );
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSchemaFromProjectLocationCollectionDataStoreSchemaName', () => {
        const result =
          client.matchSchemaFromProjectLocationCollectionDataStoreSchemaName(
            fakePath
          );
        assert.strictEqual(result, 'schemaValue');
        assert(
          (
            client.pathTemplates
              .projectLocationCollectionDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectLocationDataStore', () => {
      const fakePath = '/rendered/path/projectLocationDataStore';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        data_store: 'dataStoreValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationDataStorePathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectLocationDataStorePathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectLocationDataStorePath', () => {
        const result = client.projectLocationDataStorePath(
          'projectValue',
          'locationValue',
          'dataStoreValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectLocationDataStorePathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationDataStoreName', () => {
        const result =
          client.matchProjectFromProjectLocationDataStoreName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationDataStoreName', () => {
        const result =
          client.matchLocationFromProjectLocationDataStoreName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationDataStoreName', () => {
        const result =
          client.matchDataStoreFromProjectLocationDataStoreName(fakePath);
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStorePathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectLocationDataStoreBranchDocument', () => {
      const fakePath = '/rendered/path/projectLocationDataStoreBranchDocument';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        data_store: 'dataStoreValue',
        branch: 'branchValue',
        document: 'documentValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationDataStoreBranchDocumentPathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.projectLocationDataStoreBranchDocumentPathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('projectLocationDataStoreBranchDocumentPath', () => {
        const result = client.projectLocationDataStoreBranchDocumentPath(
          'projectValue',
          'locationValue',
          'dataStoreValue',
          'branchValue',
          'documentValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationDataStoreBranchDocumentName', () => {
        const result =
          client.matchProjectFromProjectLocationDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationDataStoreBranchDocumentName', () => {
        const result =
          client.matchLocationFromProjectLocationDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationDataStoreBranchDocumentName', () => {
        const result =
          client.matchDataStoreFromProjectLocationDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchBranchFromProjectLocationDataStoreBranchDocumentName', () => {
        const result =
          client.matchBranchFromProjectLocationDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'branchValue');
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDocumentFromProjectLocationDataStoreBranchDocumentName', () => {
        const result =
          client.matchDocumentFromProjectLocationDataStoreBranchDocumentName(
            fakePath
          );
        assert.strictEqual(result, 'documentValue');
        assert(
          (
            client.pathTemplates
              .projectLocationDataStoreBranchDocumentPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectLocationDataStoreSchema', () => {
      const fakePath = '/rendered/path/projectLocationDataStoreSchema';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        data_store: 'dataStoreValue',
        schema: 'schemaValue',
      };
      const client = new completionserviceModule.v1.CompletionServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectLocationDataStoreSchemaPathTemplate.render =
        sinon.stub().returns(fakePath);
      client.pathTemplates.projectLocationDataStoreSchemaPathTemplate.match =
        sinon.stub().returns(expectedParameters);

      it('projectLocationDataStoreSchemaPath', () => {
        const result = client.projectLocationDataStoreSchemaPath(
          'projectValue',
          'locationValue',
          'dataStoreValue',
          'schemaValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (
            client.pathTemplates.projectLocationDataStoreSchemaPathTemplate
              .render as SinonStub
          )
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectLocationDataStoreSchemaName', () => {
        const result =
          client.matchProjectFromProjectLocationDataStoreSchemaName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromProjectLocationDataStoreSchemaName', () => {
        const result =
          client.matchLocationFromProjectLocationDataStoreSchemaName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchDataStoreFromProjectLocationDataStoreSchemaName', () => {
        const result =
          client.matchDataStoreFromProjectLocationDataStoreSchemaName(fakePath);
        assert.strictEqual(result, 'dataStoreValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchSchemaFromProjectLocationDataStoreSchemaName', () => {
        const result =
          client.matchSchemaFromProjectLocationDataStoreSchemaName(fakePath);
        assert.strictEqual(result, 'schemaValue');
        assert(
          (
            client.pathTemplates.projectLocationDataStoreSchemaPathTemplate
              .match as SinonStub
          )
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
