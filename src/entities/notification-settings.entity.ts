import { Entity, Enum, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { NotificationSettingTypeEnum } from "../status/NotificationSettingTypeEnum";
import { NotificationSettingStatusEnum } from "../status/NotificationSettingStatusEnum";

@Entity({
  tableName: "notification_settings",
})
export class NotificationSettings {
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

  @Enum({
    fieldName: "type",
    nullable: false,
    comment: "알림 설정 타입",
    items: () => NotificationSettingTypeEnum,
  })
  type: NotificationSettingTypeEnum;

  @Property({
    nullable: false,
    columnType: "boolean",
    comment: "알림 여부",
  })
  enable_notification: boolean;

  @Enum({
    fieldName: "status",
    nullable: false,
    comment: "상태",
    items: () => NotificationSettingStatusEnum,
  })
  status: NotificationSettingStatusEnum;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  @Property({ nullable: true, comment: "삭제 일시" })
  deleted_at?: Date;

  constructor(data: {
    user: User;
    type: NotificationSettingTypeEnum;
    enable_notification: boolean;
    status: NotificationSettingStatusEnum;
  }) {
    this.user = data.user;
    this.type = data.type;
    this.enable_notification = data.enable_notification;
    this.status = data.status;
    this.created_at = new Date();
  }
}
