import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import Category from './Category';

@Entity()
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @Column()
  imageUrl: string;

  @Column()
  size: number;

  @Column()
  measure: 'cm' | 'g';

  @Column({ select: false })
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.name)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}

export default Product;
