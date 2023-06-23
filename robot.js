import React from 'react';
import '../style/hello.css';

function Hello() {
    const worthImage = "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/9d37c6553465529cafa82304/circlegradient2.png";
    const bankArea = "	https://images01.nicepage.com/c461c07a441a5d220e8feb1a/78325435de7e5b8f82cfa241/bubbles2.png";
    return (
        <>

            <header>
                <div className='navportion'>
                    <div className='nav-logo'>
                        <img className='nav-img' src='logo192.png'></img>
                    </div>
                    <nav className='navbar'>


                        <a href='#' className='home'>Home</a>
                        <a href='#' className='home'>About</a>
                        <a href='#' className='home'>Services</a>
                        <a href='#' className='home'>Career</a>
                        <a href='#' className='home'>Contact us</a>
                    </nav>
                </div>
            </header>

            <section >
                <div className='robot-img' >

                    <div className='worth'>
                        <img className='worth-img' src={worthImage} alt='randomImages'></img>
                    </div>

                    <div className='worth-txt'>
                        <h2 className='worth-head'>Humans for </h2> <h2 className='worth-head' id='ident'>  the Future</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit nullam nunc justo sagittis suscipit ultrices.</p>

                    </div>
                </div>

            </section>




            <section className='blank'>
            <div></div>
            <div></div>
            <div></div>
            
             </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </>
    )
}
export default Hello;