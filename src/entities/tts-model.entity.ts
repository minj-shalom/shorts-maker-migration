import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({
  tableName: "tts_model",
})
export class TtsModel {
  @PrimaryKey({
    nullable: false,
    columnType: "int4",
    autoincrement: true,
    unsigned: true,
  })
  id!: number;

  @Property({ nullable: false, columnType: "varchar", comment: "언어" })
  language: string;

  @Property({ nullable: false, columnType: "varchar", comment: "음성 유형" })
  voice_type: string;

  @Property({ nullable: false, columnType: "varchar", comment: "언어 코드" })
  language_code: string;

  @Property({ nullable: false, columnType: "varchar", comment: "음성 이름" })
  voice_name: string;

  @Property({ nullable: false, columnType: "varchar", comment: "SSML 성별" })
  ssml_gender: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "샘플 파일 경로",
  })
  sample_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "수정 일시" })
  updated_at?: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    language: string;
    voice_type: string;
    language_code: string;
    voice_name: string;
    ssml_gender: string;
    sample_file_path: string;
  }) {
    this.language = data.language;
    this.voice_type = data.voice_type;
    this.language_code = data.language_code;
    this.voice_name = data.voice_name;
    this.ssml_gender = data.ssml_gender;
    this.sample_file_path = data.sample_file_path;
    this.created_at = new Date();
  }
}
