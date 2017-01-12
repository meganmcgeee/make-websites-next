const blue = `#007ee5`;
const darkBlue = `#0160ae`;
const darkPurple = `#183463`;
const lightBlue = `#b2d8f7`;
const lightGreen = `#a2df64`;
const tangerine = `#f8906f`;
const veryDarkBlue = `#003561`;
const white = `#fff`;

const appColors = {
  caseStudyDetails: veryDarkBlue,
  caseStudyHeading: darkBlue,
  contactBackground: `initial`,
  contactHeading: blue,
  navbarBackground: blue,
  navbarLink: white,
  navbarLinkHover: veryDarkBlue,
  projectCardBorder: lightBlue,
  projectCardDetails: lightBlue,
  projectCardLink: veryDarkBlue,
  projectCardName: white,
  sisterSiteButton: lightGreen,
  teamBackground: `initial`,
};

const botColors = {
  caseStudyDetails: white,
  caseStudyHeading: lightBlue,
  contactBackground: lightBlue,
  contactHeading: darkPurple,
  navbarBackground: lightBlue,
  navbarLink: darkPurple,
  navbarLinkHover: white,
  projectCardBorder: lightBlue,
  projectCardDetails: white,
  projectCardLink: lightBlue,
  projectCardName: lightBlue,
  sisterSiteButton: tangerine,
  teamBackground: lightBlue,
};

const sectionBackgroundImage = slug => section =>
  `url('/static/images/${section}-background-${slug}.svg')`;

export default slug => ({
  colors: {
    blue,
    darkBlue,
    darkPurple,
    lightBlue,
    lightGreen,
    tangerine,
    veryDarkBlue,
    white,
    ...(slug === `apps` ? appColors : botColors),
  },
  fontWeight: {
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
  sectionBackgroundImage: sectionBackgroundImage(slug),
});
