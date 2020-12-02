import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product, User } from '.';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  content!: string;

  @Column({ type: 'tinyint', unsigned: true, default: 1 })
  activation!: boolean;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'edited_at' })
  editedAt!: Date;

  @ManyToOne(() => Product, (product) => product.reviews, {
    onDelete: 'RESTRICT',
    nullable: false,
  })
  products!: Product;

  @ManyToOne(() => User, (user) => user.reviews, {
    onDelete: 'RESTRICT',
    nullable: false,
  })
  user!: User;
}
