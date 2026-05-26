import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)소프트체인 (Softchain)',
      positions: [
        {
          title: 'Web 백엔드 및 프론트엔드 개발자',
          startedAt: '2024-05',
          descriptions: [
            '자산관리 솔루션(AssetCop) 코어 기능 유지보수 및 고도화',
            '레거시 청산 및 솔루션 고도화: Spring 기반 솔루션을 Spring Boot로 마이그레이션하여 배포 구조 개선',
            '프론트엔드 현대화 준비: Git 형상관리 표준화 및 Docker 기반 개발 환경 구축',
            '데이터베이스 최적화: Oracle 및 MS-SQL 기반 대용량 자산 데이터 처리 최적화 및 프로시저 개발',
            '인프라 고도화: 고객사 환경(JEUS 등)에 맞춘 WAS 최적화 및 보안 취약점 개선',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'JavaScript',
            'AngularJS',
            'Vue.js',
            'Oracle',
            'MS-SQL',
            'Docker',
          ],
        },
      ],
    },
  ],
};

export default experience;
