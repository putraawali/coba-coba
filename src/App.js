// import logo from './logo.svg';
import './App.css';
import React from 'react'

// const inputs = document.querySelectorAll('input')

// function focusFunc(){
//   let parent = this.parentNode.parentNode;
//   parent.classList.add('focus')
// }

// function blurFunc(){
//   let parent = this.parentNode.parentNode;
//   if(this.value===""){
//     parent.classList.remove('focus')
//   }
// }

// inputs.forEach(input =>{
//   input.addEventListener('focus', focusFunc)
//   input.addEventListener('blur', blurFunc)
// })

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classUsername : 'input-div one',
      classPassword : 'input-div two',
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <>
        <img src="/svgLib/wave.svg" alt="" class="wave"/>
        <div class="container">
          <div class="img">
            <img src="/svgLib/undraw_unlock_24mb.svg" alt=""/>
          </div>
          <div class="login-container">
            <form action="">
              <img class="lap" src="/svgLib/undraw_secure_login_pdn4.svg" alt=""/>
              <h2>site name</h2>
              <div class={this.state.classUsername}
                onFocus={() =>{
                  this.setState({classUsername: 'input-div one focus'});
                }}
                onBlur={() =>{
                  if (this.state.username) {
                    this.setState({classUsername: 'input-div one focus'});
                  }else if(this.state.user===''){
                    this.setState({classUsername: 'input-div one'});
                  }else{
                    this.setState({classUsername: 'input-div one'});
                  }
                }}
                value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}
              >
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h5>Username</h5>
                  <input class="input" type="text"/>
                </div>
              </div>
              <div class={this.state.classPassword}
                onFocus={() =>{
                  this.setState({classPassword: 'input-div two focus'});
                }}
                onBlur={() =>{
                  if (this.state.password) {
                    this.setState({classPassword: 'input-div two focus'});
                  }else if(this.state.user===''){
                    this.setState({classPassword: 'input-div two'});
                  }else{
                    this.setState({classPassword: 'input-div two'});
                  }
                }}
                value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}
              >
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div>
                  <h5>Password</h5>
                  <input class="input" type="password"/>
                </div>
              </div>
              <test>Forgot Password?</test>
              <input type="submit" class="btn" value="Login"/>
            </form>
          </div>
        </div>
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
