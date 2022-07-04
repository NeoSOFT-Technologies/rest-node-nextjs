import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column("string")
  firstName: string;

  @Column("string")
  lastName: string;

  @Column({ type: "string", unique: true })
  userName: string;

  @Column("string")
  password: string;

  // @Column({ type: "string", nullable: false })
  // imagePath: string;
}
