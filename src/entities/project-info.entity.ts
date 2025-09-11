import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { Bgm } from "./bgm.entity";
import { Logo } from "./logo.entity";
import { ProjectInfoStatusEnum } from "../status/ProjectInfoStatusEnum";

@Entity({
  tableName: "project_info",
})
export class ProjectInfo {
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
    fieldName: "project_id",
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 고유 식별자",
    unsigned: true,
    entity: () => Project,
  })
  project: Project;

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
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ProjectInfoStatusEnum,
  })
  status: ProjectInfoStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    project: Project;
    bgm?: Bgm;
    logo?: Logo;
    name: string;
    description?: string;
    status: ProjectInfoStatusEnum;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.bgm = data.bgm;
    this.logo = data.logo;
    this.name = data.name;
    this.description = data.description;
    this.status = data.status;
    this.created_at = new Date();
  }
}
