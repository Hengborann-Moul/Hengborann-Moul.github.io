import React, { Component } from 'react';
import Profile from './Profile';
class Content extends Component {
    render() {
        return (
            <div className='container'>
                <Profile />
                <h1 className='name' aria-label='My name is Moul Hengborann'>Moul Hengborann</h1>
                <h2 className='title' aria-label='I am a software engineer'>Software Engineer</h2>
            </div>
        )
    }
}

export default Content;
