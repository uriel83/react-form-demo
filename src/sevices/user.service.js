class UserSevice {
    constructor(){
        this.url = 'https://academeez-login-ex.herokuapp.com/api/users/';
    }

    createResponse = (values, url) => {
        
        return fetch(url,{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(values)
        }).then((response)=>{
            console.log("createResponse is up",response);
            if (response.status >= 300 || response.status < 200) {
                const loginFailed = new Error();
                loginFailed.response = response;
                throw loginFailed;
            }
            return response.json();
        }).then(json => json.token)
    }
    

    login = (values) => {
        return this.createResponse(values, `${this.url}login`)
    }

    register = (values) => {
        return this.createResponse(values, `${this.url}register`)
    }
}
export default new UserSevice();