import { defineConfig } from "@mikro-orm/postgresql";
import * as dotenv from "dotenv";
import { User } from "./src/entities/user.entity";
import { Project } from "./src/entities/project.entity";
import { ProjectInfo } from "./src/entities/project-info.entity";
import { ProjectIntro } from "./src/entities/project-intro.entity";
import { ProjectScene } from "./src/entities/project-scene.entity";
import { ProjectStyle } from "./src/entities/project-style.entity";
import { Font } from "./src/entities/font.entity";
import { TtsModel } from "./src/entities/tts-model.entity";
import { Tts } from "./src/entities/tts.entity";
import { Image } from "./src/entities/image.entity";
import { Bgm } from "./src/entities/bgm.entity";
import { Logo } from "./src/entities/logo.entity";
import { ProjectFootage } from "./src/entities/project-footage.entity";
import { SystemMetrics } from "./src/entities/system-metrics.entity";
import { NotificationSettings } from "./src/entities/notification-settings.entity";
import { AuthLog } from "./src/entities/auth-log.entity";
import { ProjectTrimLog } from "./src/entities/project-trim-log.entity";
import { ProjectRenderingLog } from "./src/entities/project-rendering-log.entity";
import { ProjectDownloadLog } from "./src/entities/project-download-log.entity";
import { GenerateVoiceLog } from "./src/entities/generate-voice-log.entity";
import { GenerateImageLog } from "./src/entities/generate-image-log.entity";
import { EmailLog } from "./src/entities/email-log.entity";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "local"}` });

const MikroOrmConfig = defineConfig({
  entities: [
    User,
    Project,
    ProjectInfo,
    ProjectIntro,
    ProjectScene,
    ProjectStyle,
    Font,
    TtsModel,
    Tts,
    Image,
    Bgm,
    Logo,
    ProjectFootage,
    SystemMetrics,
    NotificationSettings,
    AuthLog,
    ProjectTrimLog,
    ProjectRenderingLog,
    ProjectDownloadLog,
    GenerateVoiceLog,
    GenerateImageLog,
    EmailLog,
  ],
  dbName: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  migrations: {
    path: "./migrations",
  },
});

export default MikroOrmConfig;
