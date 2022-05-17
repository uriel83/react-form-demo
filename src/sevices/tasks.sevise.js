class TasksSevice {
    constructor(){
        this.url = 'https://academeez-login-ex.herokuapp.com/api/tasks/';
    }

    fetcTasks = (token) =>{
        return  fetch(this.url, {
            headers:{
                'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }
        }).then((response) =>{
            if (response.status !== 200) {
                const error = new Error('request error');
                error.response = response;
                throw error;
            }
            return response.json();
        })
    }
    

  
}
export default new TasksSevice();