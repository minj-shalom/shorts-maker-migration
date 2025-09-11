import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { Tts } from "./tts.entity";
import { Image } from "./image.entity";
import { ProjectSceneStatusEnum } from "../status/ProjectSceneStatusEnum";

@Entity({
  tableName: "project_scene",
})
export class ProjectScene {
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
    fieldName: "tts_id",
    nullable: true,
    columnType: "int4",
    comment: "TTS 고유 식별자",
    unsigned: true,
    entity: () => Tts,
  })
  tts?: Tts;

  @ManyToOne({
    fieldName: "image_id",
    nullable: true,
    columnType: "int4",
    comment: "이미지 고유 식별자",
    unsigned: true,
    entity: () => Image,
  })
  image?: Image;

  @Property({ nullable: false, columnType: "int4", comment: "씬 넘버" })
  scene_number: number;

  @Property({ nullable: true, columnType: "varchar", comment: "텍스트" })
  text?: string;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ProjectSceneStatusEnum,
  })
  status: ProjectSceneStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    project: Project;
    tts?: Tts;
    image?: Image;
    scene_number: number;
    text?: string;
    status: ProjectSceneStatusEnum;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.tts = data.tts;
    this.image = data.image;
    this.scene_number = data.scene_number;
    this.text = data.text;
    this.status = data.status;
    this.created_at = new Date();
  }
}
