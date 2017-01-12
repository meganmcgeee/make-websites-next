import createSite from '../../lib/createSite';
import navbarProvider from '../../hocs/navbarProvider';
import siteLayout from '../../hocs/siteLayout';

const site = createSite(`Bots`);
const sisterSite = createSite(`Apps`);

const BotsView = siteLayout(site, sisterSite);

export default navbarProvider(BotsView);
