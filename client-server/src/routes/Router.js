import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SignUp from '../pages/SignUp';
import ChangeInfoPage from '../pages/ChangeInfoPage';
import ChangePassword from '../pages/ChagePassword';
import { Home } from '../pages/Main';
import { Create } from '../pages/Create';
import { VideoDone } from '../pages/VideoDone';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='signup' element={<SignUp/>}/>
                    <Route path='info' element={<ChangeInfoPage/>}/>
                    <Route path='password' element={<ChangePassword/>}/>
                    <Route path='create' element={<Create/>}/>
                    <Route path='video' element={<VideoDone/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}