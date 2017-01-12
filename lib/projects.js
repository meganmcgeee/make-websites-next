import appProjects from '../data/appProjects';
import botProjects from '../data/botProjects';

export default slug => slug === `apps` ?
  appProjects :
  botProjects;
