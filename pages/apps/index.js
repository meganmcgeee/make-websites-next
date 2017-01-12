import createSite from '../../lib/createSite';
import navbarProvider from '../../hocs/navbarProvider';
import siteLayout from '../../hocs/siteLayout';

const site = createSite(`Apps`);
const sisterSite = createSite(`Bots`);

const AppsView = siteLayout(site, sisterSite);

export default navbarProvider(AppsView);
