import * as React from 'react';

import { useQuery, RelayEnvironmentProvider } from 'relay-hooks';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import QueryPlanets from './query/QueryPlanets';
import Planets from './components/Planets';

let firstCall = true;

async function fetchQuery(operation, variables) {
    const response = await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    });
    const json = response.json();
    return json.then((data) => {
        let changedData = data;

        if (!firstCall) {
            changedData = data.data.allPlanets.edges.slice(0, 2);
        }
        firstCall = false;

        return changedData;
    });
}

const modernEnvironment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

const Main = (propsApp) => {
    const { props, error } = useQuery(
        QueryPlanets,
        { first: 4 },
        {
            fetchPolicy: 'store-or-network',
        },
    );

    if (props && props.allPlanets) {
        return (
            <React.Fragment>
                <Planets allPlanets={props.allPlanets} />
            </React.Fragment>
        );
    } else if (error) {
        console.log('error', error);
        return <div />;
    }
    return <div>loading</div>;
};

const App = (
    <RelayEnvironmentProvider environment={modernEnvironment}>
        <Main />
    </RelayEnvironmentProvider>
);

export default App;
