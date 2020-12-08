import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import PageTop from '../components/PageTop';
import Blog from '../components/Blog';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Exclusive Blogs" description="Lorem Ipsum Dummy Text"/>
                <Blog/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
