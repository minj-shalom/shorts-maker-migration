import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { BgmStatusEnum } from "../status/BgmStatusEnum";

@Entity({
  tableName: "bgm",
})
export class Bgm {
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
    items: () => BgmStatusEnum,
  })
  status: BgmStatusEnum;

  @Property({
    nullable: false,
    columnType: "bigint",
    comment: "BGM 파일 용량 (bytes)",
  })
  bgm_file_size: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "BGM 파일 경로",
  })
  bgm_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    name: string;
    status: BgmStatusEnum;
    bgm_file_size: string;
    bgm_file_path: string;
  }) {
    this.user = data.user;
    this.name = data.name;
    this.status = data.status;
    this.bgm_file_size = data.bgm_file_size;
    this.bgm_file_path = data.bgm_file_path;
    this.created_at = new Date();
  }
}
