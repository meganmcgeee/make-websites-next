import appNavItems from '../data/appNavItems';
import botNavItems from '../data/botNavItems';

export default slug => slug === `apps` ?
  appNavItems :
  botNavItems;
