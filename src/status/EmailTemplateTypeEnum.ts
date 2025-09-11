export enum EmailTemplateTypeEnum {
  EMAIL_VERIFICATION = "ETT001", // 이메일 인증
  TEMP_PASSWORD = "ETT002", // 임시 비밀번호 발송
  CPU_USAGE_ALERT = "ETT003", // CPU 사용률 경고 알림
  MEMORY_USAGE_ALERT = "ETT004", // 메모리 사용량 경고 알림
  STORAGE_USAGE_ALERT = "ETT005", // EC2 스토리지 사용량 경고 알림
  USER_SIGNUP = "ETT006", // 회원가입 알림
  USER_WITHDRAWAL = "ETT007", // 회원 탈퇴 알림
}
