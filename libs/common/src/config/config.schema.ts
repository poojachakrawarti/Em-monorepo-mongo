import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  /* application(prod / dev) */
  APP_NAME: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  NODE_ENV: Joi.string().required().default('development'),
  API_DOMAIN: Joi.string().required(),
  CORS_ORIGIN: Joi.string().required().default('*'),

  /* db */
  // DB_HOST: Joi.string().required(),
  // DB_PORT: Joi.number().required(),
  // DB_USERNAME: Joi.string().required(),
  // DB_PASSWORD: Joi.string().required(),
  // DB_SCHEMA: Joi.string().required(),

  /* jwt */
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required().default('1d'),

  /* timezone */
  TZ: Joi.string().required().default('UTC'),

  /* throttle */
  THROTTLE_TTL: Joi.number().required().default(60),
  THROTTLE_LIMIT: Joi.number().required().default(3),

  /* redis */
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required().default(6379),

  /* rabbitmq */
  RABBITMQ_HOST: Joi.string().required(),
  RABBITMQ_PORT: Joi.number().required().default(5672),

  /* docker */
  IMG_RABBITMQ: Joi.string().required().default('rabbitmq'),
  IMG_TAG_RABBITMQ: Joi.string().required().default('management'),
  GENERATED_CNTR_RABBITMQ: Joi.string().required().default('cntr-rabbitmq'),
  RABBITMQ_DEFAULT_USER: Joi.string().required(),
  RABBITMQ_DEFAULT_PASS: Joi.string().required(),
  HOST_PORT_APP_RABBITMQ: Joi.number().required().default(5672),
  HOST_PORT_UI_RABBITMQ: Joi.number().required().default(15672),

  IMG_REDIS: Joi.string().required().default('redis'),
  IMG_TAG_REDIS: Joi.string().required().default('latest'),
  GENERATED_CNTR_REDIS: Joi.string().required().default('cntr-redis'),
  HOST_PORT_REDIS: Joi.number().required().default(6379),

  // IMG_MYSQL: Joi.string().required().default('mysql'),
  // IMG_TAG_MYSQL: Joi.string().required().default('latest'),
  // GENERATED_CNTR_MYSQL: Joi.string().required().default('cntr-mysql'),
  // HOST_PORT_MYSQL: Joi.number().required().default(3306),

  IMG_NODE: Joi.string().required().default('node'),
  IMG_TAG_NODE: Joi.string().required().default('14'),
  GENERATED_IMG_NODE: Joi.string().required(),
  GENERATED_CNTR_NODE: Joi.string().required(),
  HOST_PORT_NODE: Joi.number().required().default(3000),
  NODE_ENV_TARGET: Joi.string().required().default('dev'),

  GENERATED_IMG_AUTH: Joi.string().required(),
  GENERATED_CNTR_AUTH: Joi.string().required(),

  NETWORK_NAME: Joi.string().required()
});
