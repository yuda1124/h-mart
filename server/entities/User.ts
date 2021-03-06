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
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 45 })
  name!: string;

  @Column({ type: 'varchar', length: 45 })
  email!: string;

  @Column({ type: 'varchar', length: 256 })
  password!: string;

  @Column({ type: 'tinyint', unsigned: true, default: 1 })
  activation!: boolean;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'edited_at' })
  editedAt!: Date;

  @OneToMany(() => Review, (review) => review.user)
  reviews!: Review[];
}
