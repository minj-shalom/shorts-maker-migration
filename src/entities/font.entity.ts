import { Entity, Enum, PrimaryKey, Property } from "@mikro-orm/core";
import { FontTypeEnum } from "../status/FontTypeEnum";

@Entity({
  tableName: "font",
})
export class Font {
  @PrimaryKey({
    nullable: false,
    columnType: "int4",
    autoincrement: true,
    unsigned: true,
  })
  id!: number;

  @Property({ nullable: false, columnType: "varchar", comment: "이름" })
  title: string;

  @Property({ nullable: false, columnType: "varchar", comment: "저자" })
  author: string;

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "타입",
    items: () => FontTypeEnum,
  })
  type: FontTypeEnum;

  @Property({ nullable: false, columnType: "varchar", comment: "폰트 URL" })
  font_family_url: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "폰트 다운로드 URL",
  })
  download_url: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "폰트 파일 경로",
  })
  font_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "수정 일시" })
  updated_at?: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    title: string;
    author: string;
    type: FontTypeEnum;
    font_family_url: string;
    download_url: string;
    font_file_path: string;
  }) {
    this.title = data.title;
    this.author = data.author;
    this.type = data.type;
    this.font_family_url = data.font_family_url;
    this.download_url = data.download_url;
    this.font_file_path = data.font_file_path;
    this.created_at = new Date();
  }
}
