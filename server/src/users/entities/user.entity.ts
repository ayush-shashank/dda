import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column()
  username: string;
  @Column({})
  name: string;
  @Column()
  dateOfBirth: Date;
  @Column()
  phoneNumber: number;
  @Column()
  emailId: string;
  @Column()
  password: string;
  @Column({ default: new Date() })
  createTime: Date;
  @Column({ default: new Date() })
  updateTime: Date;
}
