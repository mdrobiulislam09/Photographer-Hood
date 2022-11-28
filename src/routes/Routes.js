import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/login/Login';
import SignUp from '../Authentication/signup/SignUp';
import Blog from '../pages/blog/Blog';
import Details from '../pages/Details/Details';
import Home from '../pages/home/Home';
import Main from '../pages/main/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
    }
])
export default router;