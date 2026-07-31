import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'AI를 활용한 업무 생산성 향상',
      descriptions: [
        {
          content:
            'Antigravity IDE / Gemini, GPT 사용으로 깔끔한 프롬포트를 통해 솔루션 커스텀 작업 속도 향상',
        },
        {
          content:
            'Gemini Gem을 이용해 레퍼런스 github 분석, 구글 워크스페이스 컨트롤 등 다양한 작업 간편화',
        },
      ],
    },
    {
      title: '대용량 결재 및 조회 성능 최적화',
      descriptions: [
        {
          content:
            'N+1 SQL 조회 현상 개선: 루프 내 Lazy Entity 접근 방식을 WHERE IN 절을 활용한 일괄 조회로 변경하여 1,000건 이상의 대용량 데이터 로딩 속도 90% 이상 개선',
        },
        {
          content:
            'Querydsl 기반 DTO 선택적 조회 도입: Entity 전체 로드 대신 Projections.constructor()를 사용하여 필요한 컬럼만 추출, DB 및 메모리 부하 최적화',
        },
      ],
    },
    {
      title: '네트워크/보안 환경 대응 및 취약점 개선',
      descriptions: [
        {
          content:
            'VPN 환경 WebSocket 단절 이슈 해결: CSRF 필터 예외 경로 설정을 통해 보안 장비 우회 트래픽의 안정적 처리 보장',
        },
        {
          content:
            '웹 보안 강화: Chart.js 버전 업그레이드, 쿠키 보안 속성(SameSite=Lax, Secure) 적용 및 Content-Security-Policy(CSP) 도입',
        },
        {
          content:
            'DBMS 보안 조치: MSSQL 불필요 계정 정리, 권한 체크 및 Log4j 보안 취약점 JAR 파일 교체',
        },
      ],
    },
    {
      title: '데이터 무결성 보장 및 비즈니스 로직 버그 수정',
      descriptions: [
        {
          content:
            '결재자 순서 변경 알고리즘 오류 수정: 트랜잭션 시점의 물리적 인덱스 기반 apprSeq 재할당으로 DB 저장 순서 뒤틀림 해결',
        },
        {
          content:
            '다중자산 삭제 오류 해결: URL 길이 제한 문제 해결을 위해 파라미터 방식을 @RequestBody JSON 전송 방식으로 전환',
        },
      ],
    },
    {
      title: '비즈니스 편의성 고도화',
      descriptions: [
        {
          content:
            '엑셀 복사-붙여넣기 다중 검색 구현: 탭 문자를 정규식으로 자동 치환 처리하여 대량 자산 코드 검색 편의성 증대',
        },
        {
          content:
            '인사 정보 동기화 자동화: 사원 변경 시 부서 정보 자동 갱신 옵션 및 검증 로직 구현',
        },
        { content: 'UX 개선: YYYYMMDD 직접 입력 방식 도입 및 ISO 8601 표준 포맷 변환 필터 적용' },
        {
          content:
            '결재선 대직자 자동 매칭: 부재 여부 체크 및 지정 기간 내 대직자 스위칭 비즈니스 로직 구축',
        },
      ],
    },
    {
      title: '개발 환경 고도화 및 개선',
      descriptions: [
        {
          content:
            'Grunt 자동 빌드 프로세스 개선: grunt-contrib-watch 및 절대 경로 docBase 설정을 통한 실시간 소스 반영 환경 구축',
        },
        {
          content:
            'WAS 및 런타임 업그레이드: Tomcat 9.0 전환 및 JNI 라이브러리 호환성 검증, Node.js 버전업 대응(@use 문법 전환)',
        },
        {
          content:
            'PDA 앱 유지보수: Android Studio 기반 AuditProSmart 앱 개발 환경 재구축 및 신규 UI 컴포넌트 추가',
        },
      ],
    },
  ],
};

export default openSource;
