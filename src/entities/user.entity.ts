import { Entity, Enum, PrimaryKey, Property } from "@mikro-orm/core";
import { UserAccountStatusEnum } from "../status/UserAccountStatusEnum";
import { UserAccountRoleEnum } from "../status/UserAccountRoleEnum";

@Entity({
  tableName: "user",
})
export class User {
  @PrimaryKey({
    nullable: false,
    columnType: "int4",
    autoincrement: true,
    unsigned: true,
  })
  id!: number;

  @Property({ nullable: false, columnType: "varchar", comment: "아이디" })
  email: string;

  @Property({ nullable: false, columnType: "varchar", comment: "이름" })
  name: string;

  @Property({ nullable: false, columnType: "varchar", comment: "비밀번호" })
  password: string;

  @Enum({
    fieldName: "role",
    nullable: false,
    comment: "권한",
    items: () => UserAccountRoleEnum,
  })
  role: UserAccountRoleEnum;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => UserAccountStatusEnum,
  })
  status: UserAccountStatusEnum;

  @Property({
    nullable: true,
    columnType: "varchar",
    comment: "프로필 이미지 파일 경로",
  })
  profile_image_file_path?: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "수정 일시" })
  updated_at?: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    email: string;
    name: string;
    password: string;
    role: UserAccountRoleEnum;
    status: UserAccountStatusEnum;
    profile_image_file_path?: string;
  }) {
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.role = data.role;
    this.status = data.status;
    this.created_at = new Date();
  }
}
