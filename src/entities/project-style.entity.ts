import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { TtsModel } from "./tts-model.entity";
import { Style } from "../status/Style";
import { ProjectStyleStatusEnum } from "../status/ProjectStyleStatusEnum";

@Entity({
  tableName: "project_style",
})
export class ProjectStyle {
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
    fieldName: "tts_model_id",
    nullable: false,
    columnType: "int4",
    comment: "TTS 모델 고유 식별자",
    unsigned: true,
    entity: () => TtsModel,
  })
  tts_model: TtsModel;

  @Property({
    nullable: false,
    columnType: "jsonb",
    comment: "인트로 첫번째 라인 스타일",
  })
  intro_first_line_style: Style;

  @Property({
    nullable: true,
    columnType: "jsonb",
    comment: "인트로 두번째 라인 스타일",
  })
  intro_second_line_style?: Style;

  @Property({ nullable: false, columnType: "jsonb", comment: "씬 스타일" })
  scene_style: Style;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ProjectStyleStatusEnum,
  })
  status: ProjectStyleStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    project: Project;
    tts_model: TtsModel;
    intro_first_line_style: Style;
    intro_second_line_style: Style;
    scene_style: Style;
    status: ProjectStyleStatusEnum;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.tts_model = data.tts_model;
    this.intro_first_line_style = data.intro_first_line_style;
    this.intro_second_line_style = data.intro_second_line_style;
    this.scene_style = data.scene_style;
    this.status = data.status;
    this.created_at = new Date();
  }
}
