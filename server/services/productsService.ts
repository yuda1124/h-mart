import { IProduct } from '../interfaces';
import { getConnection, getRepository } from 'typeorm';
import { Product } from '../entities/Product';

const createBulk = async (products: IProduct[]): Promise<void> => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Product)
    .values(products)
    .execute();
};

const find = async (): Promise<IProduct[]> => {
  const repository = getRepository(Product);
  const products = await repository.find({
    select: ['id', 'name', 'price', 'thumbUrl'],
    order: {
      id: 'ASC',
    },
    skip: 0,
    take: 8,
    cache: true,
  });
  return products;
};

export default { createBulk, find };
