import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rows')
export class Row {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cell: string;

  @Column({ nullable: true })
  oldValue: string;

  @Column()
  newValue: string;

  @Column()
  sheetName: string;

  @CreateDateColumn()
  timestamp: Date;

  @Column()
  editedBy: string;
}
