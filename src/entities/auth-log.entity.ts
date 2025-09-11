import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { AuthLogTypeEnum } from "../status/AuthLogTypeEnum";

@Entity({
  tableName: "auth_log",
})
export class AuthLog {
  @PrimaryKey({
    nullable: false,
    columnType: "int4",
    autoincrement: true,
    unsigned: true,
  })
  id!: number;

  @ManyToOne({
    fieldName: "user_id",
    nullable: false,
    columnType: "int4",
    comment: "사용자 고유 식별자",
    unsigned: true,
    entity: () => User,
  })
  user: User;

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "사용자 로그 타입",
    items: () => AuthLogTypeEnum,
  })
  type: AuthLogTypeEnum;

  @Property({ nullable: false, columnType: "varchar", comment: "접속 ip 주소" })
  ip_address: string;

  @Property({
    nullable: true,
    columnType: "jsonb",
    comment: "접속 기기 핑거프린트",
  })
  fingerprint?: object;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  constructor(data: {
    user: User;
    type: AuthLogTypeEnum;
    ip_address: string;
    fingerprint?: object;
  }) {
    this.user = data.user;
    this.type = data.type;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.created_at = new Date();
  }
}
