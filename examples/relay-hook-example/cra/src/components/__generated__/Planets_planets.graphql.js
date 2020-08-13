/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Planets_planets$ref: FragmentReference;
declare export opaque type Planets_planets$fragmentType: Planets_planets$ref;
export type Planets_planets = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +name: ?string,
    |}
  |}>,
  +$refType: Planets_planets$ref,
|};
export type Planets_planets$data = Planets_planets;
export type Planets_planets$key = {
  +$data?: Planets_planets$data,
  +$fragmentRefs: Planets_planets$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Planets_planets",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PlanetsEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Planet",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PlanetsConnection"
};
// prettier-ignore
(node/*: any*/).hash = '004c9e63545fc5481dfeb76a7c5444ee';

module.exports = node;
