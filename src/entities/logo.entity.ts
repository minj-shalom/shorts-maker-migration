import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { LogoStatusEnum } from "../status/LogoStatusEnum";

@Entity({
  tableName: "logo",
})
export class Logo {
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

  @Property({ nullable: false, columnType: "varchar", comment: "이름" })
  name: string;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => LogoStatusEnum,
  })
  status: LogoStatusEnum;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 이름",
  })
  logo_file_name: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 확장자",
  })
  logo_file_extension: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 규격",
  })
  logo_file_dimensions: string;

  @Property({
    nullable: false,
    columnType: "bigint",
    comment: "로고 파일 용량 (bytes)",
  })
  logo_file_size: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 경로",
  })
  logo_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    name: string;
    status: LogoStatusEnum;
    logo_file_name: string;
    logo_file_extension: string;
    logo_file_dimensions: string;
    logo_file_size: string;
    logo_file_path: string;
  }) {
    this.user = data.user;
    this.name = data.name;
    this.status = data.status;
    this.logo_file_name = data.logo_file_name;
    this.logo_file_extension = data.logo_file_extension;
    this.logo_file_dimensions = data.logo_file_dimensions;
    this.logo_file_size = data.logo_file_size;
    this.logo_file_path = data.logo_file_path;
    this.created_at = new Date();
  }
}
