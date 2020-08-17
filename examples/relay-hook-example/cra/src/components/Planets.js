import React from 'react';
import { useRefetch } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import QueryPlanets from '../query/QueryPlanets';

const fragmentSpec = graphql`
    fragment Planets_planets on PlanetsConnection {
        edges {
            node {
                id
                name
            }
        }
    }
`;

const Planets = (props) => {
    const [liveContent, fetchLiveContent] = useRefetch(fragmentSpec, props.allPlanets);

    const refreshVariables = { first: 4 };
    const refreshContent = () => {
        fetchLiveContent(QueryPlanets, refreshVariables, null, () => {}, { force: true });
    };

    console.log('liveContent.edges.length', liveContent.edges.length);

    return (
        <>
            {liveContent.edges.map(({ node }) => (
                <div key={node.id}>
                    <span>
                        {node.id} : {node.name}
                    </span>
                </div>
            ))}
            <button style={{ marginTop: '20px' }} onClick={refreshContent}>
                Refresh
            </button>
        </>
    );
};

export default Planets;
