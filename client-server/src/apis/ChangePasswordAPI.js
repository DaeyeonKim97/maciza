import axios from 'axios';

export function ChangePasswordAPI(oldPassword, newPassword, setPassErr, navigate){
    const requestURL = 'http://localhost:8888/info/password';
    axios.put(requestURL,{
            oldPassword:oldPassword,
            newPassword:newPassword,
        },
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
    )
    .then((res)=>{
        alert('비밀번호가 변경되었습니다.');
        navigate('/');
    })
    .catch((err)=>{
        console.log('err! ' , err);
        setPassErr(true);
    })
}