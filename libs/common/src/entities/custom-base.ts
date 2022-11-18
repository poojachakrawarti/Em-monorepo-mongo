import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CustomBaseEntity2 } from './custom-base-2';

/**
 * @class CustomBaseEntity
 */
export class CustomBaseEntity extends CustomBaseEntity2 {
  /**
   * @column id
   */
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  /**
   * @column name
   */
  @Column({ name: 'name', nullable: false })
  name: string;

  /**
   * @column active
   */
  @Column({ name: 'active', type: 'boolean', default: true })
  active: boolean;
}
