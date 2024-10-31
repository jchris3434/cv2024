import "../css/Navbar.css";

export default function Navbar() {
    return (
        <header className="header">
            {/* <!-- navigation --> */}
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Formation</a>
                    </li>
                    <li className="nav-item">
                        <a href="">CV</a>
                    </li>
                    <li className="nav-item">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}