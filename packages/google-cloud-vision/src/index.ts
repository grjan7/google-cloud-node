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

import * as v1 from './v1';
import * as v1p1beta1 from './v1p1beta1';
import * as v1p2beta1 from './v1p2beta1';
import * as v1p3beta1 from './v1p3beta1';
import * as v1p4beta1 from './v1p4beta1';
import * as helpers from './helpers';
Object.assign(v1.ImageAnnotatorClient.prototype, helpers.call('v1'));
Object.assign(
  v1p1beta1.ImageAnnotatorClient.prototype,
  helpers.call('v1p1beta1')
);
Object.assign(
  v1p2beta1.ImageAnnotatorClient.prototype,
  helpers.call('v1p2beta1')
);
Object.assign(
  v1p3beta1.ImageAnnotatorClient.prototype,
  helpers.call('v1p3beta1')
);
Object.assign(
  v1p4beta1.ImageAnnotatorClient.prototype,
  helpers.call('v1p4beta1')
);
const ImageAnnotatorClient = v1.ImageAnnotatorClient;
type ImageAnnotatorClient = v1.ImageAnnotatorClient;
const ProductSearchClient = v1.ProductSearchClient;
type ProductSearchClient = v1.ProductSearchClient;
export {
  v1,
  v1p1beta1,
  v1p2beta1,
  v1p3beta1,
  v1p4beta1,
  ImageAnnotatorClient,
  ProductSearchClient,
};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {
  v1,
  v1p1beta1,
  v1p2beta1,
  v1p3beta1,
  v1p4beta1,
  ImageAnnotatorClient,
  ProductSearchClient,
};
import * as protos from '../protos/protos';
export {protos};
