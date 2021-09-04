// import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classUsername : 'input-div user',
      classPassword : 'input-div password',
      classEmail : 'input-div email',
      loginUsername: '',
      loginPassword: '',
      regisEmail: '',
      regisUsername: '',
      regisPassword: '',
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
            <form action="sign-in">
              <img class="lap" src="/svgLib/undraw_secure_login_pdn4.svg" alt=""/>
              <h2>site name</h2>
              <h5 class="quote">Not registered yet?</h5>
              <a class="toggle">Sign Up</a>
              
              <div class={this.state.classUsername}
                onFocus={() =>{
                  this.setState({classUsername: 'input-div one focus'});
                }}
                onBlur={() =>{
                  if (this.state.loginUsername) {
                    this.setState({classUsername: 'input-div one focus'});
                  }else if(this.state.loginUsername===''){
                    this.setState({classUsername: 'input-div one'});
                  }else{
                    this.setState({classUsername: 'input-div one'});
                  }
                }}
                value={this.state.loginUsername} onChange={(event) => this.setState({loginUsername: event.target.value})}
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
                  if (this.state.loginPassword) {
                    this.setState({classPassword: 'input-div two focus'});
                  }else if(this.state.user===''){
                    this.setState({classPassword: 'input-div two'});
                  }else{
                    this.setState({classPassword: 'input-div two'});
                  }
                }}
                value={this.state.loginPassword} onChange={(event) => this.setState({loginPassword: event.target.value})}
              >
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div>
                  <h5>Password</h5>
                  <input class="input" type="password"/>
                </div>
              </div>
              <a>Forgot Password?</a>
              <input type="submit" class="btn" value="Login"/>
            </form>
          </div>
          <div class="register-container">
            <form action="sign-up">
              <img class="lap" src="/svgLib/undraw_security_o890.svg" alt=""/>
              <h2>site name</h2>
              <h5 class="quote">Already have an account?</h5>
              <a class="toggle">Sign In</a>
              
              <div class={this.state.classUsername}
                onFocus={() =>{
                  this.setState({classUsername: 'input-div one focus'});
                }}
                onBlur={() =>{
                  if (this.state.regisUsername) {
                    this.setState({classUsername: 'input-div one focus'});
                  }else if(this.state.regisUsername===''){
                    this.setState({classUsername: 'input-div one'});
                  }else{
                    this.setState({classUsername: 'input-div one'});
                  }
                }}
                value={this.state.regisUsername} onChange={(event) => this.setState({regisUsername: event.target.value})}
              >
                <div class="i">
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h5>Username</h5>
                  <input class="input" type="text"/>
                </div>
              </div>
              
              <div class={this.state.classEmail}
                onFocus={() =>{
                  this.setState({classEmail: 'input-div three focus'});
                }}
                onBlur={() =>{
                  if (this.state.regisEmail) {
                    this.setState({classEmail: 'input-div three focus'});
                  }else if(this.state.regisEmail===''){
                    this.setState({classEmail: 'input-div three'});
                  }else{
                    this.setState({classEmail: 'input-div three'});
                  }
                }}
                value={this.state.regisEmail} onChange={(event) => this.setState({regisEmail: event.target.value})}
              >
                <div class="i">
                <i class="fas fa-envelope"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <input class="input" type="password"/>
                </div>
              </div>

              <div class={this.state.classPassword}
                onFocus={() =>{
                  this.setState({classPassword: 'input-div two focus'});
                }}
                onBlur={() =>{
                  if (this.state.regisPassword) {
                    this.setState({classPassword: 'input-div two focus'});
                  }else if(this.state.regisPassword===''){
                    this.setState({classPassword: 'input-div two'});
                  }else{
                    this.setState({classPassword: 'input-div two'});
                  }
                }}
                value={this.state.regisPassword} onChange={(event) => this.setState({regisPassword: event.target.value})}
              >
                <div class="i">
                  <i class="fas fa-lock"></i>
                </div>
                <div>
                  <h5>Password</h5>
                  <input class="input" type="password"/>
                </div>
              </div>
              
              <input type="submit" class="btn" id="register" value="Register"/>
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
