const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'bkmehta',
                mongodb_password: '3opN2pckMfG3t87A',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'myDev',
            },
        };
    }

    return {
        env: {
            mongodb_username: 'bkmehta',
            mongodb_password: '3opN2pckMfG3t87A',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'myProduction',
        },
    };
};