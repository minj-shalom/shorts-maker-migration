import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { Project } from "./project.entity";
import { ProjectFootage } from "./project-footage.entity";

@Entity({
  tableName: "project_download_log",
})
export class ProjectDownloadLog {
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
    fieldName: "project_footage_id",
    nullable: false,
    columnType: "int4",
    comment: "프로젝트 푸티지 고유 식별자",
    unsigned: true,
    entity: () => ProjectFootage,
  })
  project_footage: ProjectFootage;

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
    project_footage: ProjectFootage;
    ip_address: string;
    fingerprint?: object;
  }) {
    this.user = data.user;
    this.project = data.project;
    this.project_footage = data.project_footage;
    this.ip_address = data.ip_address;
    this.fingerprint = data.fingerprint;
    this.created_at = new Date();
  }
}
