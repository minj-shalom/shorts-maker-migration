import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { Tts } from "./tts.entity";
import { Image } from "./image.entity";
import { ProjectIntroStatusEnum } from "../status/ProjectIntroStatusEnum";

@Entity({
  tableName: "project_intro",
})
export class ProjectIntro {
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

  @Property({
    nullable: true,
    columnType: "varchar",
    comment: "첫번째 라인 텍스트",
  })
  first_line_text?: string;

  @Property({
    nullable: true,
    columnType: "varchar",
    comment: "두번째 라인 텍스트",
  })
  second_line_text?: string;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ProjectIntroStatusEnum,
  })
  status: ProjectIntroStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    project: Project;
    tts?: Tts;
    image?: Image;
    first_line_text?: string;
    second_line_text?: string;
    status: ProjectIntroStatusEnum;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.tts = data.tts;
    this.image = data.image;
    this.first_line_text = data.first_line_text;
    this.second_line_text = data.second_line_text;
    this.status = data.status;
    this.created_at = new Date();
  }
}
