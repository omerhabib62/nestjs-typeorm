import { AbstractEntity } from './../../database/abstract.entity';
import { Column, Entity } from 'typeorm';
@Entity({ name: 'listings' })
export class Listing extends AbstractEntity<Listing> {
  @Column()
  description: string;

  @Column()
  rating: number;
}
