import { IGlobal } from '../component/common/IGlobal';

const title = '김지원 이력서 (Backend Developer)';
const description = '자산관리 솔루션 고도화 및 성능 최적화 전문가 김지원입니다.';

export const _global: IGlobal.Payload = {
  favicon: '',
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: '지원',
        lastName: '김',
        username: 'JiwonBlue',
        gender: 'male',
      },
    },
  },
};
