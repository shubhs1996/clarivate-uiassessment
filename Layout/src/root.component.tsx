

import { Link } from "react-router-dom"

export default function Root(): JSX.Element {
  return <section>

    <header className="header">
      <h1>Clarivate</h1>
    </header>

    <aside className="layout_side_navbar">
      <Link to="/"><div className="side_nav_link"><p className="side_nav_link_icon">A1</p>  <span className="side_nav_link_title"> Application 1</span></div></Link>
      <Link to="/app2"><div className="side_nav_link"><p className="side_nav_link_icon">A2</p>  <span className="side_nav_link_title"> Application 2</span></div></Link>
    </aside>

    <footer className="layout_footer">
      <p>&copy; 2025 Your Website</p>
    </footer>

  </section>;
}
