import axios from "axios";

export function GetVideoListAPI(setList){
    const requestURL = 'http://localhost:3001/videos';

    axios.get(requestURL)
    .then((res)=>{
        setList(res.data)
    })
}