const base = "https://www.stateofmindhealth.com";

export default function sitemap() {
  const routes = ["", "/services", "/about", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
