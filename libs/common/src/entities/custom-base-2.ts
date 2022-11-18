import {
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeUpdate
} from 'typeorm';

/**
 * @class CustomBaseEntity2
 */
export class CustomBaseEntity2 {
  /**
   * @column createdAt
   */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp', select: false })
  createdAt: Date;

  /**
   * @column updatedAt
   */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', select: false })
  updatedAt: Date;

  /**
   * @column deletedAt
   */
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', select: false })
  deletedAt: Date;

  /**
   * @trigger populate updatedAt before every insertion
   */
  @BeforeUpdate() async beforeUpdateQueryExecution() {
    this.updatedAt = new Date();
  }
}
