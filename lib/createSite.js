export default name => {
  const slug = name.toLowerCase();
  return {
    slug,
    cssUrl: `/static/css/${slug}.css`,
    logo: `/static/images/${slug}logo.svg`,
    title: `Make ${name}`,
    url: `/${slug}`,
  };
};
