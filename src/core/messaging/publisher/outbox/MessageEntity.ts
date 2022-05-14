import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Message')
export class MessageEntity {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string;

  @Column({ type: 'varchar', length: 255 })
  subject: string;

  @Column({ type: 'text' })
  body: string;
}
