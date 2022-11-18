const ormconfig = {
  ssl: process.env.NODE_ENV == 'production',
  extra: {
    ssl:
      process.env.NODE_ENV == 'production'
        ? { rejectUnauthorized: false }
        : null
  },
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  entities: [`dist/apps/em-api-layer/libs/**/src/entities/*.entity.js`],
  synchronize: false,
  logging: 'all',
  migrations: [
    `dist/apps/em-api-layer/apps/em-api-layer/src/db/migrations/*.js`
  ],
  subscribers: [
    `dist/apps/em-api-layer/apps/em-api-layer/src/db/subscribers/*.subscriber.js`
  ],
  seeds: [`dist/apps/em-api-layer/apps/em-api-layer/src/db/seeders/*.js`],
  factories: [`dist/apps/em-api-layer/apps/em-api-layer/src/db/factories/*.js`],
  cli: {
    migrationsDir: 'apps/em-api-layer/src/db/migrations',
    seedsDir: 'apps/em-api-layer/src/db/seeders',
    factoriesDir: 'apps/em-api-layer/src/db/factories'
  }
};
switch (process.env.NODE_ENV) {
  case 'development':
    break;
  case 'production':
    Object.assign(ormconfig, { migrationsRun: true });
    break;
  default:
    throw new Error('Unknown environment');
}
module.exports = ormconfig;
