import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import PortfolioPage from '../pages/PortfolioPage'
import BlogPage from '../pages/BlogPage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import SingleBlogPage from '../pages/SingleBlogPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/services" component={ServicesPage}/>
                <Route exact path="/portfolio" component={PortfolioPage}/>
                <Route exact path="/blog" component={BlogPage}/>
                <Route exact path="/gallery" component={GalleryPage}/>
                <Route exact path="/contact" component={ContactPage}/>
                <Route exact path="/single-blog" component={SingleBlogPage}/>
            </Switch>
        )
    }
}
