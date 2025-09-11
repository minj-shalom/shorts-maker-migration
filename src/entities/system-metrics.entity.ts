import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({
  tableName: "system_metrics",
})
export class SystemMetrics {
  @PrimaryKey({
    nullable: false,
    columnType: "int4",
    autoincrement: true,
    unsigned: true,
  })
  id!: number;

  @Property({
    nullable: true,
    columnType: "numeric",
    comment: "CPU 사용률 (%)",
  })
  cpu_usage_percent?: number;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "메모리 총량 (bytes)",
  })
  memory_total_bytes?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "메모리 사용량 (bytes)",
  })
  memory_used_bytes?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "EC2 스토리지 총량 (bytes)",
  })
  ec2_storage_total_bytes?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "EC2 스토리지 사용량 (bytes)",
  })
  ec2_storage_used_bytes?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "네트워크 송신 속도 (bytes/s)",
  })
  network_tx_bytes_per_sec?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "네트워크 수신 속도 (bytes/s)",
  })
  network_rx_bytes_per_sec?: string;

  @Property({
    nullable: true,
    columnType: "bigint",
    comment: "S3 사용량 (bytes)",
  })
  s3_used_bytes?: string;

  @Property({ nullable: false, comment: "생성 일시" })
  created_at: Date;

  constructor(data: {
    cpu_usage_percent?: number;
    memory_total_bytes?: string;
    memory_used_bytes?: string;
    ec2_storage_total_bytes?: string;
    ec2_storage_used_bytes?: string;
    network_tx_bytes_per_sec?: string;
    network_rx_bytes_per_sec?: string;
    s3_used_bytes?: string;
  }) {
    this.cpu_usage_percent = data.cpu_usage_percent;
    this.memory_total_bytes = data.memory_total_bytes;
    this.memory_used_bytes = data.memory_used_bytes;
    this.ec2_storage_total_bytes = data.ec2_storage_total_bytes;
    this.ec2_storage_used_bytes = data.ec2_storage_used_bytes;
    this.network_tx_bytes_per_sec = data.network_tx_bytes_per_sec;
    this.network_rx_bytes_per_sec = data.network_rx_bytes_per_sec;
    this.s3_used_bytes = data.s3_used_bytes;
    this.created_at = new Date();
  }
}
