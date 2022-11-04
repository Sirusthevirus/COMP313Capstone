//Development configuration options
//To sign the session identifier, use a secret string
//pfc
module.exports = {
    db: 'mongodb://localhost/pfc',
    sessionSecret: 'developmentSessionSecret',
    secretKey: 'real_secret'
};
//Development configuration options
//To sign the session identifier, use a secret string
module.exports = {
    db: 'mongodb://localhost/fcb-db',
    sessionSecret: 'developmentSessionSecret',
    secretKey: 'real_secret'
};
