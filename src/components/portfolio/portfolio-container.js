import React, {Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio.",
            isLoading: false,
            data: [
                {title: "Nintendo", category: "Mario", slug: 'Nintendo'},
                {title: "Bethesda", category: "Fallout", slug: 'Bethesda'},
                {title: "Mojang", category: "Minecraft", slug: 'Mojang'},
                {title: "Rockstar", category: "GTA", slug: 'Rockstar'}
             ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter (item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems(){
        

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
        });
    }

    

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>


                <button onClick={() => this.handleFilter('Mario')}>Mario</button>
                <button onClick={() => this.handleFilter('Fallout')}>Fallout</button>
                <button onClick={() => this.handleFilter('Minecraft')}>Minecraft</button>
                <button onClick={() => this.handleFilter('GTA')}>GTA</button>

                {this.portfolioItems()}

                
            </div>
        );
    }
}