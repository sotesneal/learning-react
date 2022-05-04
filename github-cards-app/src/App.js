import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const axios = require('axios').default;





class CardList extends React.Component {
  render() {

    return (
      <div>
        {this.props.profiles.map(profile=> <Card key={profile.id} {...profile}/>)}
      </div>
    )
  }
}

class Form extends React.Component {
  state = {userName: ''};
  handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName: ""})
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userName}
         onChange={e => this.setState({userName: e.target.value})} 
         placeholder="GitHub username"/>
        <button>Add card</button>
      </form>
    )
  }
}


class Card extends React.Component{
  

  render() {
  const profile = this.props;
   return (
    <div className='github-profile'>
      <img  src={profile.avatar_url} alt='image'/>
      <div className='info'>
        <div className='name'>{profile.name}</div>
        <div className='company'>{profile.company}</div>
      </div>
    </div>
   )
  }
}



class App extends React.Component {

  state = {
    profiles: []
  }
  addNewProfile = (profileData) =>{
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileData]
    }))
  }
  render() {
    return (
      <div className='App'>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}




export default App;
