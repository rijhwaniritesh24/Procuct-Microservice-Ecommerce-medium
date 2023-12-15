import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProductDbDataSource} from '../datasources';
import {ProductModel, ProductModelRelations} from '../models';

export class ProductModelRepository extends DefaultCrudRepository<
  ProductModel,
  typeof ProductModel.prototype.id,
  ProductModelRelations
> {
  constructor(
    @inject('datasources.product_db') dataSource: ProductDbDataSource,
  ) {
    super(ProductModel, dataSource);
  }
}
