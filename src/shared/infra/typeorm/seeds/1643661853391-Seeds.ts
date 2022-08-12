/* eslint-disable no-await-in-loop */
/* eslint-disable for-direction */
import { getRepository, MigrationInterface } from 'typeorm';
import products from './products.seed';
import CategoriesSeed from './categories.seed';

export default class Seeds1639606728077 implements MigrationInterface {
  public async up(): Promise<void> {
    const category = await getRepository('category').save(CategoriesSeed);

    const productsWithCategory = products.map((product) => ({
      ...product,
      categoryId: category.id,
    }));

    for (let i = 0; i <= productsWithCategory.length; i++) {
      await getRepository('product').save(productsWithCategory[i]);
    }
  }

  public async down(): Promise<void> {
    // do nothing
  }
}
