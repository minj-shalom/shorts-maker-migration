import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { ProjectRenderingLog } from "./project-rendering-log.entity";
import { ProjectFootageStatusEnum } from "../status/ProjectFootageStatusEnum";

@Entity({
  tableName: "project_footage",
})
export class ProjectFootage {
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
    fieldName: "project_rendering_log_id",
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 렌더링 로그 고유 식별자",
    unsigned: true,
    entity: () => ProjectRenderingLog,
  })
  project_rendering_log: ProjectRenderingLog;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ProjectFootageStatusEnum,
  })
  status: ProjectFootageStatusEnum;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 이름",
  })
  project_footage_file_name: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 확장자",
  })
  project_footage_file_extension: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 규격",
  })
  project_footage_file_dimensions: string;

  @Property({
    nullable: false,
    columnType: "bigint",
    comment: "로고 파일 용량 (bytes)",
  })
  project_footage_file_size: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "로고 파일 경로",
  })
  project_footage_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    project: Project;
    project_rendering_log: ProjectRenderingLog;
    status: ProjectFootageStatusEnum;
    project_footage_file_name: string;
    project_footage_file_extension: string;
    project_footage_file_dimensions: string;
    project_footage_file_size: string;
    project_footage_file_path: string;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.project_rendering_log = data.project_rendering_log;
    this.status = data.status;
    this.project_footage_file_name = data.project_footage_file_name;
    this.project_footage_file_extension = data.project_footage_file_extension;
    this.project_footage_file_dimensions = data.project_footage_file_dimensions;
    this.project_footage_file_size = data.project_footage_file_size;
    this.project_footage_file_path = data.project_footage_file_path;
    this.created_at = new Date();
  }
}
