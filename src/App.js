// import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classUsernameLogin : 'input-div user',
      classPasswordLogin : 'input-div password',
      classEmailRegis : 'input-div email',
      classUsernameRegis : 'input-div user',
      classPasswordRegis : 'input-div password',
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
          {/* image to move */}
          <div class="img" id="move">
            <img src="/svgLib/undraw_unlock_24mb.svg" alt=""/>
          </div>
          {/* form container */}
          <div class="form-container">
            <div class="login-container">
              <form action="sign-in">
                <img class="lap" src="/svgLib/undraw_secure_login_pdn4.svg" alt=""/>
                <h2>site name</h2>
                <h5 class="quote">Not registered yet?</h5>
                <a class="toggle">Sign Up</a>
                
                <div class={this.state.classUsernameLogin}
                  onFocus={() =>{
                    this.setState({classUsernameLogin: 'input-div user focus'});
                  }}
                  onBlur={() =>{
                    if (this.state.loginUsername) {
                      this.setState({classUsernameLogin: 'input-div user focus'});
                    }else if(this.state.loginUsername===''){
                      this.setState({classUsernameLogin: 'input-div user'});
                    }else{
                      this.setState({classUsernameLogin: 'input-div user'});
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
                <div class={this.state.classPasswordLogin}
                  onFocus={() =>{
                    this.setState({classPasswordLogin: 'input-div password focus'});
                  }}
                  onBlur={() =>{
                    if (this.state.loginPassword) {
                      this.setState({classPasswordLogin: 'input-div password focus'});
                    }else if(this.state.loginPassword===''){
                      this.setState({classPasswordLogin: 'input-div password'});
                    }else{
                      this.setState({classPasswordLogin: 'input-div password'});
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
            {/* ----------- */}
            <div class="register-container">
              <form action="sign-up">
                <img class="lap" src="/svgLib/undraw_security_o890.svg" alt=""/>
                <h2>Get Started</h2>
                <h5 class="quote">Already have an account?</h5>
                <a class="toggle">Sign In</a>
                
                <div class={this.state.classUsernameRegis}
                  onFocus={() =>{
                    this.setState({classUsernameRegis: 'input-div user focus'});
                  }}
                  onBlur={() =>{
                    if (this.state.regisUsername) {
                      this.setState({classUsernameRegis: 'input-div user focus'});
                    }else if(this.state.regisUsername===''){
                      this.setState({classUsernameRegis: 'input-div user'});
                    }else{
                      this.setState({classUsernameRegis: 'input-div user'});
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
                
                <div class={this.state.classEmailRegis}
                  onFocus={() =>{
                    this.setState({classEmailRegis: 'input-div three focus'});
                  }}
                  onBlur={() =>{
                    if (this.state.regisEmail) {
                      this.setState({classEmailRegis: 'input-div three focus'});
                    }else if(this.state.regisEmail===''){
                      this.setState({classEmailRegis: 'input-div three'});
                    }else{
                      this.setState({classEmailRegis: 'input-div three'});
                    }
                  }}
                  type="email"
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

                <div class={this.state.classPasswordRegis}
                  onFocus={() =>{
                    this.setState({classPasswordRegis: 'input-div password focus'});
                  }}
                  onBlur={() =>{
                    if (this.state.regisPassword) {
                      this.setState({classPasswordRegis: 'input-div password focus'});
                    }else if(this.state.regisPassword===''){
                      this.setState({classPasswordRegis: 'input-div password'});
                    }else{
                      this.setState({classPasswordRegis: 'input-div password'});
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
