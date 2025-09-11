import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { ProjectInfo } from "./project-info.entity";
import { ProjectIntro } from "./project-intro.entity";
import { ProjectStyle } from "./project-style.entity";
import { RenderingLogTypeEnum } from "../status/RenderingLogTypeEnum";

@Entity({
  tableName: "project_rendering_log",
})
export class ProjectRenderingLog {
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
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 정보 고유 식별자",
    unsigned: true,
    entity: () => ProjectInfo,
  })
  project_info: ProjectInfo;

  @ManyToOne({
    fieldName: "project_intro_id",
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 인트로 고유 식별자",
    unsigned: true,
    entity: () => ProjectIntro,
  })
  project_intro: ProjectIntro;

  @ManyToOne({
    fieldName: "project_style_id",
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 스타일 고유 식별자",
    unsigned: true,
    entity: () => ProjectStyle,
  })
  project_style: ProjectStyle;

  @Property({
    nullable: false,
    columnType: "integer[]",
    comment: "프로젝트 씬",
  })
  project_scene: number[];

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "렌더링 로그 타입",
    items: () => RenderingLogTypeEnum,
  })
  type: RenderingLogTypeEnum;

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
    project: Project;
    project_info: ProjectInfo;
    project_intro: ProjectIntro;
    project_style: ProjectStyle;
    project_scene: number[];
    type: RenderingLogTypeEnum;
    ip_address: string;
    fingerprint?: object;
    duration?: number;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.project_info = data.project_info;
    this.project_intro = data.project_intro;
    this.project_style = data.project_style;
    this.project_scene = data.project_scene;
    this.type = data.type;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.duration = data.duration;
    this.started_at = new Date();
    this.created_at = new Date();
  }
}
