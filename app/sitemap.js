const base = "https://www.stateofmindhealth.com";
export default function sitemap() {
  const routes = ["", "/about", "/services", "/resources", "/blog", "/contact", "/intake"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
