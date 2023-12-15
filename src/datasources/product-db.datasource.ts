import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'product_db',
  connector: 'postgresql',
  url: 'postgres://postgres:postgres@localhost/product_db',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'product_db'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProductDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'product_db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.product_db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
