import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  readonly username: string;

  @Column()
  readonly password: string;
}