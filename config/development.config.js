module.exports = {
  port: process.env.NODE_PORT || process.env.PORT || 9875,
  host: 'localhost',
  mongodb: {
    host: process.env.MONGODB_HOST || '$(host)',
    name: process.env.MONGODB_NAME || 'dhhb-fortune-dev',
    port: process.env.MONGODB_PORT || 27017,
    connection: 'mongodb://$(mongodb.host):$(mongodb.port)/$(mongodb.name)',
    options: {}
  }
};
