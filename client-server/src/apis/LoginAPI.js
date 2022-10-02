import axios from 'axios';


export function LoginAPI(userName, password, setAuthErr, handleClose, navigate){
    const requestURL = 'http://localhost:8888/login'
    const infoURL = 'http://localhost:8888/info'
    axios.post(requestURL,{
        userName : userName,
        password : password
    })
    .then((res)=>{
        localStorage.setItem('token',res.data);
        const token = localStorage.getItem('token');
        axios.get(infoURL,{
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then((res)=>{
            localStorage.setItem('email',res.data.email);
            localStorage.setItem('id',res.data.id);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('userName', res.data.userName);
            localStorage.setItem('isLogged',true);
            handleClose();
            alert('로그인 되었습니다.');
            navigate('/');
        })
    })
    .catch((err)=>{
        console.log('err! ' , err)
        setAuthErr(true);
    })
}