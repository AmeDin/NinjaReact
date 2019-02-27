import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {


    // state = {
    //     posts: []
    // }
    
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res)
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //     })
    // }

    render(){
        console.log(this.props)
        // const { posts } = this.state;
        const { posts } = this.props;
        const postList = posts.length 
        ? (posts.map(post => {
            return (
                <Link to={'/' + [post.id]} >
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </Link>
            )
         })
        ) : (<div className="center">No post yet</div>   )
        return(
            <div className="container home">
                <h4 className="center">Homepage</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// export default Home
export default connect(mapStateToProps)(Home)