import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { EmailLogTypeEnum } from "../status/EmailLogTypeEnum";
import { EmailTemplateTypeEnum } from "../status/EmailTemplateTypeEnum";

@Entity({
  tableName: "email_log",
})
export class EmailLog {
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

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "발신자 이메일",
  })
  sender_email: string;

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "이메일 로그 타입",
    items: () => EmailLogTypeEnum,
  })
  type: EmailLogTypeEnum;

  @Enum({
    fieldName: "template",
    nullable: false,
    comment: "이메일 템플릿",
    items: () => EmailTemplateTypeEnum,
  })
  template: EmailTemplateTypeEnum;

  @Property({ nullable: false, columnType: "varchar", comment: "제목" })
  subject: string;

  @Property({ nullable: false, columnType: "varchar", comment: "내용" })
  body: string;

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
    sender_email: string;
    type: EmailLogTypeEnum;
    template: EmailTemplateTypeEnum;
    subject: string;
    body: string;
    ip_address: string;
    fingerprint?: object;
  }) {
    this.user = data.user;
    this.sender_email = data.sender_email;
    this.type = data.type;
    this.template = data.template;
    this.subject = data.subject;
    this.body = data.body;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.created_at = new Date();
  }
}
