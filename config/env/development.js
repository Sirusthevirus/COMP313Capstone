//Development configuration options
//To sign the session identifier, use a secret string
//pfc
module.exports = {
    db: 'mongodb://localhost/pfc',
    sessionSecret: 'developmentSessionSecret',
    secretKey: 'real_secret'
};
