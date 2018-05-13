const userUrl = 'http://206.189.175.34:8000/api/v1/';

export function signin(credentials) {  
    return (dispatch) => {
        axios.post(userUrl + "auth/login", credentials)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err);

            })
    }
}