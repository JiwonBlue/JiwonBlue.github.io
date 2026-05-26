import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Java', level: 3 },
    { title: 'Spring / Spring Boot', level: 3 },
    { title: 'JPA / Hibernate', level: 3 },
    { title: 'Querydsl', level: 3 },
    { title: 'MyBatis', level: 3 },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    { title: 'JavaScript (ES6+)', level: 3 },
    { title: 'AngularJS', level: 3 },
    { title: 'Vue.js', level: 2 },
    { title: 'Grunt', level: 2 },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'Oracle', level: 3 },
    { title: 'MS-SQL', level: 3 },
    { title: 'SQLite', level: 2 },
  ],
};

const devopsAndEtc: ISkill.Skill = {
  category: 'Build & DevOps & Tools',
  items: [
    { title: 'Git', level: 3 },
    { title: 'Docker / Docker-Compose', level: 2 },
    { title: 'Tomcat / JEUS', level: 3 },
    { title: 'Maven', level: 2 },
    { title: 'InstallShield', level: 2 },
    { title: 'Android Studio', level: 2 },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, database, devopsAndEtc],
  tooltip: '1: 기초 수준\n2: 숙련된 활용 가능\n3: Production 수준 최적화 및 리드 가능',
};

export default skill;
