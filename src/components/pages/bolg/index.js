import React, {Component} from 'react';
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import BlogPostBody from "./blogPostBody";
import {SearchBox} from "./searchBox";
import axios from "axios";


const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts/`
})

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            searchField: '',
        }
    }
    componentDidMount() {

        api.get('/').then(res =>{
            // console.log(res.data);
            this.setState({blogPosts: res.data})
        })
    }
    render() {

        return (
            <div className={'aboutPageWrap'}>
                <InnerBanner title={'Classic Blog'} />
                {/*<SearchBox*/}
                {/*    placeholder="search by name"*/}
                {/*    searchHandelar={searchHandelar => { this.setState({ searchField: searchHandelar.target.value }) }}*/}
                {/*/>*/}
                <BlogPostBody items={this.state.blogPosts}/>
            </div>
        );
    }
}

export default Blog;