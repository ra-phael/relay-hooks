import graphql from 'babel-plugin-relay/macro';

const QueryPlanets = graphql`
    query QueryPlanets_Query($first: Int) {
        allPlanets(first: $first) {
            ...Planets_planets
        }
    }
`;

export default QueryPlanets;
