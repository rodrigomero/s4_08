import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
