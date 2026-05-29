import './compStyles/Header.css'
import logo from '../favicon.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="✓" />
            <h1>THE TO DO'S LIST</h1>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item">Action</button></li>
                    <li><button class="dropdown-item">Another action</button></li>
                    <li><button class="dropdown-item">Something else here</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
