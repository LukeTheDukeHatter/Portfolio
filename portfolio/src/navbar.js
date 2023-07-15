import './Navbar.css';

function NavOption({name, link}) {
    return (
        <a href={link} className="NavOption">{"// " + name}</a>
    )
}

function Navbar() {
    return (
        <div id="navbar">
            <NavOption name="home"      link="#Hero"/>
            <NavOption name="skills"    link="#"/>
            <NavOption name="projects"  link="#"/>
            <NavOption name="education" link="#"/>
            <NavOption name="contact"   link="#"/>
        </div>
    );
}

export default Navbar;
