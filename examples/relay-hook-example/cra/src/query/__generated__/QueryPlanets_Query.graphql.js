/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Planets_planets$ref = any;
export type QueryPlanets_QueryVariables = {|
  first?: ?number
|};
export type QueryPlanets_QueryResponse = {|
  +allPlanets: ?{|
    +$fragmentRefs: Planets_planets$ref
  |}
|};
export type QueryPlanets_Query = {|
  variables: QueryPlanets_QueryVariables,
  response: QueryPlanets_QueryResponse,
|};
*/


/*
query QueryPlanets_Query(
  $first: Int
) {
  allPlanets(first: $first) {
    ...Planets_planets
  }
}

fragment Planets_planets on PlanetsConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryPlanets_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PlanetsConnection",
        "kind": "LinkedField",
        "name": "allPlanets",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Planets_planets"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QueryPlanets_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PlanetsConnection",
        "kind": "LinkedField",
        "name": "allPlanets",
        "plural": false,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "QueryPlanets_Query",
    "operationKind": "query",
    "text": "query QueryPlanets_Query(\n  $first: Int\n) {\n  allPlanets(first: $first) {\n    ...Planets_planets\n  }\n}\n\nfragment Planets_planets on PlanetsConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0fc03fcee876f1f6211455747c45897';

module.exports = node;
