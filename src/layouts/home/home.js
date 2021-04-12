import React from 'react';
import './home.css';
import Slider from '../../components/slider/slider'

function Home(props) {

    return (
        <main className="home">
            <section className="container">
                <Slider />
                <span className="line"></span>
                <section className="framwork"></section>
            </section>
        </main>
    )
}

export default Home
