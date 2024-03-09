import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1709787056731 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1709787056731.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE items set public = true');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
    // await queryRunner.query('UPDATE item set public = 0');
  }
}
