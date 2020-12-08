import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Bannar from '../components/Bannar'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services';
import Counter from '../components/Counter';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Bannar/>
                <About/>
                <Skills/>
                <Services/>
                <Counter/>
                <Team/>
                <Testimonials/>
                <Blog/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
