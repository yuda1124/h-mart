import { IProduct } from '../interfaces';
import { generateHash } from '../utils';
import { getConnection } from 'typeorm';
import { Product } from '../entities/Product';

const createBulk = async (products: IProduct[]): Promise<any> => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Product)
    .values(products)
    .execute();
};

export default { createBulk };
