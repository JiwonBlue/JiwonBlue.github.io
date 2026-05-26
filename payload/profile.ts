import { faEnvelope, faPhone, faBell } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image: '',
  name: {
    title: '김지원',
    small: '(Full-Stack Developer)',
  },
  contact: [
    {
      title: 'jiwon.blue@example.com',
      link: 'mailto:jiwon.blue@example.com',
      icon: faEnvelope,
    },
    {
      title: '010-1234-5678',
      icon: faPhone,
    },
    {
      link: 'https://github.com/JiwonBlue',
      icon: faGithub,
    },
  ],
  notice: {
    title: '자사 솔루션 고도화 및 고객사 특화 개발 전문가입니다.',
    icon: faBell,
  },
};
export default profile;
