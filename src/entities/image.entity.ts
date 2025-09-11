import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { ImageTypeEnum } from "../status/ImageTypeEnum";
import { ImageStatusEnum } from "../status/ImageStatusEnum";

@Entity({
  tableName: "image",
})
export class Image {
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

  @Property({ nullable: false, columnType: "varchar", comment: "프롬프트" })
  prompt: string;

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "타입",
    items: () => ImageTypeEnum,
  })
  type: ImageTypeEnum;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => ImageStatusEnum,
  })
  status: ImageStatusEnum;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "이미지 파일 이름",
  })
  image_file_name: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "이미지 파일 확장자",
  })
  image_file_extension: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "이미지 파일 규격",
  })
  image_file_dimensions: string;

  @Property({
    nullable: false,
    columnType: "bigint",
    comment: "이미지 파일 용량 (bytes)",
  })
  image_file_size: string;

  @Property({
    nullable: false,
    columnType: "varchar",
    comment: "이미지 파일 경로",
  })
  image_file_path: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    prompt: string;
    type: ImageTypeEnum;
    status: ImageStatusEnum;
    image_file_name: string;
    image_file_extension: string;
    image_file_dimensions: string;
    image_file_size: string;
    image_file_path: string;
  }) {
    this.user = data.user;
    this.prompt = data.prompt;
    this.type = data.type;
    this.status = data.status;
    this.image_file_name = data.image_file_name;
    this.image_file_extension = data.image_file_extension;
    this.image_file_dimensions = data.image_file_dimensions;
    this.image_file_size = data.image_file_size;
    this.image_file_path = data.image_file_path;
    this.created_at = new Date();
  }
}
