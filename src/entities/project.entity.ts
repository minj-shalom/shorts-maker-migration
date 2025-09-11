import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { ProjectRenderingStatusEnum } from "../status/ProjectRenderingStatusEnum";
import { Bgm } from "./bgm.entity";
import { Logo } from "./logo.entity";

@Entity({
  tableName: "project",
})
export class Project {
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
    fieldName: "bgm_id",
    nullable: true,
    columnType: "int4",
    comment: "BGM 고유 식별자",
    unsigned: true,
    entity: () => Bgm,
  })
  bgm?: Bgm;

  @ManyToOne({
    fieldName: "logo_id",
    nullable: true,
    columnType: "int4",
    comment: "로고 고유 식별자",
    unsigned: true,
    entity: () => Logo,
  })
  logo?: Logo;

  @Property({ nullable: false, columnType: "varchar", comment: "이름" })
  name: string;

  @Property({ nullable: true, columnType: "varchar", comment: "설명" })
  description?: string;

  @Enum({
    fieldName: "rendering_status",
    nullable: false,
    comment: "렌더링 상태",
    items: () => ProjectRenderingStatusEnum,
  })
  rendering_status: ProjectRenderingStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "수정 일시" })
  updated_at?: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    bgm?: Bgm;
    logo?: Logo;
    name: string;
    description?: string;
    rendering_status: ProjectRenderingStatusEnum;
  }) {
    this.user = data.user;
    this.bgm = data.bgm;
    this.logo = data.logo;
    this.name = data.name;
    this.description = data.description;
    this.rendering_status = data.rendering_status;
    this.created_at = new Date();
  }
}
