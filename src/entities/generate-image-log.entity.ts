import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Image } from "./image.entity";
import { GenerateImageLogTypeEnum } from "../status/GenerateImageLogTypeEnum";

@Entity({
  tableName: "generate_image_log",
})
export class GenerateImageLog {
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

  @ManyToOne({
    fieldName: "image_id",
    nullable: true,
    columnType: "int4",
    comment: "이미지 고유 식별자",
    unsigned: true,
    entity: () => Image,
  })
  image?: Image;

  @Enum({
    fieldName: "type",
    nullable: true,
    comment: "이미지 생성 로그 타입",
    items: () => GenerateImageLogTypeEnum,
  })
  type?: GenerateImageLogTypeEnum;

  @Property({ nullable: false, columnType: "varchar", comment: "접속 ip 주소" })
  ip_address: string;

  @Property({
    nullable: true,
    columnType: "jsonb",
    comment: "접속 기기 핑거프린트",
  })
  fingerprint?: object;

  @Property({ nullable: true, columnType: "numeric", comment: "소요 시간" })
  duration?: number;

  @Property({ nullable: false, comment: "시작 일시" })
  started_at: Date;

  @Property({ nullable: true, comment: "종료 일시" })
  ended_at?: Date;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "수정 일시" })
  updated_at?: Date;

  constructor(data: {
    user: User;
    image?: Image;
    type?: GenerateImageLogTypeEnum;
    ip_address: string;
    fingerprint?: object;
    duration?: number;
  }) {
    this.user = data.user;
    this.image = data.image;
    this.type = data.type;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.duration = data.duration;
    this.started_at = new Date();
    this.created_at = new Date();
  }
}
