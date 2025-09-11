import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { TtsModel } from "./tts-model.entity";
import { TtsStatusEnum } from "../status/TtsStatusEnum";

@Entity({
  tableName: "tts",
})
export class Tts {
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
    fieldName: "tts_model_id",
    nullable: false,
    columnType: "int4",
    comment: "TTS 모델 고유 식별자",
    unsigned: true,
    entity: () => TtsModel,
  })
  tts_model: TtsModel;

  @Property({ nullable: false, columnType: "varchar", comment: "프롬프트" })
  prompt: string;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => TtsStatusEnum,
  })
  status: TtsStatusEnum;

  @Property({
    nullable: false,
    columnType: "bigint",
    comment: "TTS 파일 용량 (bytes)",
  })
  tts_file_size: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "TTS 파일 경로",
  })
  tts_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    tts_model: TtsModel;
    prompt: string;
    status: TtsStatusEnum;
    tts_file_size: string;
    tts_file_path: string;
  }) {
    this.user = data.user;
    this.tts_model = data.tts_model;
    this.prompt = data.prompt;
    this.status = data.status;
    this.tts_file_size = data.tts_file_size;
    this.tts_file_path = data.tts_file_path;
    this.created_at = new Date();
  }
}
