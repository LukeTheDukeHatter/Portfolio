import Navbar from './navbar';
import './Styles/Desktop/App.css';
import './Styles/Mobile/App.css';
import './Styles/Both/App.css';

function App() {
    return (
        <div id="snapper">
            <main id="Hero" className="page">
                <Navbar/>
                <div id="HeroContent">
                    <h3 id="NameIntroText">Hi, my name is</h3>
                    <h1 id="NameText">Luke Harrison.</h1>
                    <h1 id="Subtext">I build things for the web.</h1>
                    <p id="IntroPara">I'm a frontend developer specializing in responsive HTML, CSS and JavaScript, currently dedicated to making my way through the <a href="http://react.com">React</a> documentation.</p>
                </div>
            </main>
            <main className='page'>

            </main>
        </div>
    );
}

export default App;
