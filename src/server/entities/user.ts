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

  @Column("string")
  username: string;

  @Column("string")
  password: string;
}
