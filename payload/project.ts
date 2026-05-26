import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '고양도시관리공사 AssetCop Lite 패키지 마이그레이션 및 납품',
      startedAt: '2026-01',
      endedAt: '2026-04',
      where: '(주)소프트체인',
      descriptions: [
        {
          content:
            'Spring Boot 전환: 독립 실행형 구동을 위해 기존 레거시 Spring 프로젝트를 내장형 Tomcat 기반으로 마이그레이션',
        },
        {
          content:
            'InstallShield 패키징: exe 형태 빌드를 위한 경로 변경, 레지스트리 자동 등록/삭제 스크립트 작성',
        },
        {
          content:
            '하드웨어 제어 연동: 바코드/라벨 프린터 통신용 Windows 헬퍼 프로그램을 OS 서비스로 자동 등록 및 검수',
        },
      ],
    },
    {
      title: '한국원자력통제기술원 (KINAC) 자산관리 고도화 및 연구장비 관리 시스템',
      startedAt: '2025-08',
      endedAt: '2025-10',
      where: '(주)소프트체인',
      descriptions: [
        {
          content: 'DB 설계 및 확장: 연구장비-연구자산 간 1:N 관계 매칭을 위한 신규 DB 테이블 설계',
        },
        {
          content:
            '복합키 기반 파일 시스템: 연구장비 ID와 파일 ID를 결합한 복합 PK 구조의 안정적인 관리 기능 구현',
        },
        {
          content:
            '전 계층 주도적 개발: 고객 피드백 기반 백엔드 API부터 프론트엔드 UI/UX까지 기획 및 구현',
        },
      ],
    },
    {
      title: '동양생명 자산관리 시스템 구축 및 JEUS 인프라 전환',
      startedAt: '2024-11',
      endedAt: '2025-03',
      where: '(주)소프트체인',
      descriptions: [
        {
          content:
            'Enterprise WAS 최적화: 고객사 표준인 Tmax JEUS 환경에 맞춘 설정 및 성능 최적화 수행',
        },
        {
          content:
            '연동 아키텍처 구현: 구매 신청 흐름 및 ERP 자산 등록 프로세스 분석을 통한 전용 트랜잭션 처리 및 그리드 구현',
        },
      ],
    },
    {
      title: '영남대학교의료원 OCS 연동 자산관리 솔루션 구축',
      startedAt: '2024-07',
      endedAt: '2024-10',
      where: '(주)소프트체인',
      descriptions: [
        {
          content:
            '이기종 DB 인터페이스: Oracle(OCS)과 MS-SQL(자산관리) 간 배치 스케줄러 및 데이터 연동 구축',
        },
        {
          content:
            '자동화 프로시저 기획: 신규/폐기/이동 자산 이력을 자동으로 판별하고 트랜잭션을 보장하는 마이그레이션 로직 개발',
        },
        {
          content:
            '모니터링 UI 개발: 연동 데이터 가공 및 모니터링을 위한 백엔드 API 및 웹 UI 전체 구현',
        },
      ],
    },
  ],
};

export default project;
