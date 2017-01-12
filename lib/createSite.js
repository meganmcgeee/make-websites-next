export default name => {
  const slug = name.toLowerCase();
  return {
    slug,
    logo: `/static/images/${slug}logo.svg`,
    title: `Make ${name}`,
    url: `/${slug}`,
  };
};
