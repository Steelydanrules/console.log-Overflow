import React from 'react';

class User extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
    debugger
  }

  render(){
    if (this.props.user === undefined){
      return(
        <div>

        </div>
      )
    } else{
    return(
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        {this.props.user.id}

        This is working i think!     


      </div>
    )
    }


  }
}



export default User;