import React from 'react';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(type){
    return(e) => (this.setState({[type]: e.target.value}))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
    this.setState({username: "", email: "", password: ""})
  }

  render(){
    return(
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
        <label>
          Display Name:
          <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
        </label>
        <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    )

  }

}

export default Signup;