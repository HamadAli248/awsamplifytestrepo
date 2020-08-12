import React, { Component } from 'react';

class LogIn extends Component {
    submit(e) {
        e.preventDefault() ;   
        var result = document.querySelector('.response'); 
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/login";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("User",userName)
        xhr.setRequestHeader("User",password)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result.innerHTML = this.responseText;
            }else{
                return result.innerHTML = "ERROR";
            }
        };
        var data = JSON.stringify({});
        xhr.send(data);
    }
    render() {
        return( 
            <div id="landingPage">
                <h1>Please Login In</h1>       
                    <div id="userInput">
                        <form onSubmit={this.submit}>
                        <label htmlFor="userName">UserName: </label>
                            <input type="text" id="userName" required/> 
                            <label htmlFor="password">password: </label>
                            <input type="text" id="password" required/> 
                        <br/>
                        <input id="login" type="submit" value="login"/>
                        </form>
                    </div>
                    <p className="response"></p>

            </div>
        )
    }
}
export default LogIn;