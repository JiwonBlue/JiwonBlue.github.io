import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '안양대학교',
      subTitle: '컴퓨터공학 전공',
      startedAt: '2021-03',
      endedAt: '2023-02',
    },
    {
      title: '연성대학교',
      subTitle: '마케팅경영학 전공',
      startedAt: '2016-03',
      endedAt: '2018-02',
    },
    {
      title: '서서울 생활과학 고등학교',
      subTitle: '졸업',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
