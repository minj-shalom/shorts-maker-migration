# Shorts Maker Migration

이 레포지트리는 Shorts Maker 데이터베이스의 마이그레이션 관리를 위한 프로젝트입니다.

---

## 주요 기능

- 엔티티(Entity) 변경사항 기반 마이그레이션 자동 생성.
- 환경별(local, prod) 마이그레이션 실행 지원.
- PostgreSQL 데이터베이스 스키마 버전 관리.

---

## 프로젝트 구조

- `src/entities` : 엔티티 클래스 정의 폴더.
- `migrations` : 생성된 마이그레이션 파일 저장 폴더.
- `package.json` : 스크립트 및 의존성 관리.
- `mikro-orm.config.ts` : MikroORM 설정 파일.

---

## 사용 방법

### 1. 의존성 설치

```bash
yarn install
```

### 2. 엔티티 수정

`src/entities` 폴더 내 원하는 엔티티 클래스를 수정하거나 새로 만듭니다.

### 3. 환경 변수 수정

`.env.template` 파일을 복사하여 환경 변수를 수정합니다.

```bash
# local 환경용
cp .env.template .env.local

# prod 환경용
cp .env.template .env.prod
```

### 4. 마이그레이션 파일 생성

```bash
# local 환경용
yarn migration:create:local

# prod 환경용
yarn migration:create:prod
```

### 5. 마이그레이션 적용

```bash
# local 환경용
yarn migration:up:local

# prod 환경용
yarn migration:up:prod
```

---

## 주의사항

- 마이그레이션 적용 시 기본적으로 기존 데이터는 유지됩니다.
- 다만, 컬럼 삭제나 테이블 삭제가 포함된 경우 해당 데이터는 삭제될 수 있으니 반드시 주의하세요.
- 중요한 데이터는 사전에 백업해두는 것을 권장합니다.

---

## 환경 설정

- `NODE_ENV` 값에 따라 `mikro-orm.config.ts` 내 DB 연결 정보가 다르게 설정됩니다.
- 환경별 DB 설정을 확인하고 맞게 실행해 주세요.
