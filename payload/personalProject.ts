import { IPersonalProject } from '../component/personalProject/IPersonalProject';

const personalProject: IPersonalProject.Payload = {
  disable: false,
  list: [
    {
      title: 'VACODE - Cafe24 스킨 개발',
      startedAt: '2026-06',
      endedAt: '2026-07',
      where: '외주',
      descriptions: [
        {
          content: 'VACODE 쇼핑몰 홈페이지: ',
          postHref: 'https://vacode00.cafe24.com/',
        },
        {
          content:
            '디자이너와 협업하며 로컬 개발용 파일과 카페24 업로드용 스킨 파일 두 가지 버전으로 관리',
        },
        {
          content:
            '순수 HTML/CSS/JS 로컬 환경에서 빠른 퍼블리싱 작업, UI/UX 검토, 브라우저 호환성 테스트 진행',
        },
        {
          content:
            '로컬 퍼블리싱 완료 코드를 바탕으로 카페24 스마트디자인 전용 태그와 모듈 코드 결합',
        },
        {
          content: 'GitHub 레포지토리: ',
          postHref: 'https://github.com/JiwonBlue/vacode',
        },
      ],
    },
    {
      title: 'ERP 시스템 개발',
      startedAt: '2023-09',
      endedAt: '2023-11',
      where: '토이 팀프로젝트',
      descriptions: [
        {
          content: '프로젝트 팀장(총괄 진행), 기획, DB설계',
        },
        {
          content: '백엔드 폴더구조 세팅 (도메인형 구조, global 폴더 생성)',
        },
        {
          content: '깃허브 브랜치 세팅, 브랜치 보호 세팅',
        },
        {
          content: '기본적인 CRUD 기능들 세팅 (Postman을 활용해 테스트까지)',
        },
        {
          content: '게시판, 영화 페이지 구현',
        },
        {
          content: 'Spring Security Config Url 나누기',
        },
        {
          content: 'AWS와 인텔리제이 연결',
        },
        {
          content: 'TMDB API 사용, Json 형태 데이터를 파싱 후 DB에 저장해서 활용',
        },
        {
          content: 'GitHub 레포지토리: ',
          postHref: 'https://github.com/JiwonBlue/erp',
        },
      ],
    },
    {
      title: '웹 크롤링을 이용한 영어단어 퀴즈',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: '토이 개인프로젝트',
      descriptions: [
        {
          content: '해외 뉴스 사이트 기사 크롤링 및 네이버 사전 크롤링',
        },
        {
          content: '뉴스 기사 단어와 네이버 사전 뜻 매칭 후 CSV 파일 생성',
        },
        {
          content: 'CSV 파일을 사용한 영어 단어 퀴즈',
        },
        {
          content: '사용 기술: Python, Requests (네이버 사전 데이터), BeautifulSoup (뉴스 크롤링)',
        },
        {
          content: 'GitHub 레포지토리: ',
          postHref: 'https://github.com/JiwonBlue/python_crawling_word_quiz',
        },
      ],
    },
  ],
};

export default personalProject;
