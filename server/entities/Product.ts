import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Review } from '.';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 45 })
  name!: string;

  @Column({ type: 'varchar', length: 45 })
  model!: string;

  @Column({ type: 'varchar', length: 45 })
  maker!: string;

  @Column({ type: 'int' })
  price!: number;

  @Column({ type: 'json' })
  colors!: JSON;

  @Column({ name: 'thumb_url', type: 'varchar', length: 256 })
  thumbUrl!: string;

  @Column({ name: 'info_url', type: 'varchar', length: 256 })
  infoUrl!: string;

  @Column({ type: 'tinyint', unsigned: true, default: 1 })
  activation!: boolean;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'edited_at' })
  editedAt!: Date;

  @OneToMany(() => Review, (review) => review.products)
  reviews!: Review;
}
