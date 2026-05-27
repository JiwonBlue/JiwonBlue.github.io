import { faEnvelope, faPhone, faBell } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image: 'asset/김지원.jpg',
  name: {
    title: '김지원',
    small: '(Backend Developer)',
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
    title: '메일, 전화 편하신 곳으로 연락 부탁드립니다.',
    icon: faBell,
  },
};
export default profile;
