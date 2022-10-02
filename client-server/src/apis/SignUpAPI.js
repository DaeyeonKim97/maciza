import axios from 'axios';

export function SignUpAPI(values, setSignUpErr, navigate){
    const requestURL = 'http://localhost:8888/signup'
    
    axios.post(requestURL,{
        userName: values.userName,
        password : values.password,
        name : values.name,
        email : values.email,
    })
    .then((res)=>{
        console.log(res)
        alert('성공적으로 회원 가입이 되었습니다.\n 로그인 해 주세요')
        navigate('/');
    })
    .catch((err)=>{
        console.log('err! ' , err)
        setSignUpErr(true);
    })
}