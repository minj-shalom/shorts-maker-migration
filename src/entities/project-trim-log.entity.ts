import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { ProjectInfo } from "./project-info.entity";
import { ProjectIntro } from "./project-intro.entity";
import { ProjectScene } from "./project-scene.entity";
import { ProjectStyle } from "./project-style.entity";
import { TrimLogTypeEnum } from "../status/TrimLogTypeEnum";

@Entity({
  tableName: "project_trim_log",
})
export class ProjectTrimLog {
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
    fieldName: "project_info_id",
    nullable: true,
    columnType: "int4",
    comment: "프로젝트 정보 고유 식별자",
    unsigned: true,
    entity: () => ProjectInfo,
  })
  project_info?: ProjectInfo;

  @ManyToOne({
    fieldName: "project_intro_id",
    nullable: true,
    columnType: "int4",
    comment: "프로젝트 인트로 고유 식별자",
    unsigned: true,
    entity: () => ProjectIntro,
  })
  project_intro?: ProjectIntro;

  @ManyToOne({
    fieldName: "project_scene_id",
    nullable: true,
    columnType: "int4",
    comment: "프로젝트 씬 고유 식별자",
    unsigned: true,
    entity: () => ProjectScene,
  })
  project_scene?: ProjectScene;

  @ManyToOne({
    fieldName: "project_style_id",
    nullable: true,
    columnType: "int4",
    comment: "프로젝트 스타일 고유 식별자",
    unsigned: true,
    entity: () => ProjectStyle,
  })
  project_style?: ProjectStyle;

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "편집 로그 타입",
    items: () => TrimLogTypeEnum,
  })
  type: TrimLogTypeEnum;

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
    project: Project;
    project_info?: ProjectInfo;
    project_intro?: ProjectIntro;
    project_scene?: ProjectScene;
    project_style?: ProjectStyle;
    type: TrimLogTypeEnum;
    ip_address: string;
    fingerprint?: object;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.project_info = data.project_info;
    this.project_intro = data.project_intro;
    this.project_scene = data.project_scene;
    this.project_style = data.project_style;
    this.type = data.type;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.created_at = new Date();
  }
}
