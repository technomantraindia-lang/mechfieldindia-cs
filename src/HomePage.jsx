/**
 * Homepage component.
 * Renders static HTML from pageMarkup.js (hero, about, products, FAQ, etc.).
 */
import pageMarkup from "./pageMarkup.js";

function HomePage() {
  return <div className="app-shell" dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}

export default HomePage;
