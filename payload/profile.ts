import { faEnvelope, faPhone, faBell } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image: 'asset/김지원.jpg',
  name: {
    title: '김지원',
    small: '(Full-Stack Developer)',
  },
  contact: [
    {
      title: 'power852456@naver.com',
      link: 'mailto:power852456@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9822-9409',
      icon: faPhone,
    },
    {
      link: 'https://github.com/JiwonBlue',
      icon: faGithub,
    },
  ],
  notice: {
    title: '솔루션 개발 및 유지보수를 진행해 온 주니어 개발자입니다.',
    icon: faBell,
  },
};
export default profile;
