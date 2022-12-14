import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/login/Login';
import PrivateRouter from '../Authentication/privateRoute/PrivateRouter';
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
                path: '/services/:id',
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({params}) => fetch(`https://eleven-server.vercel.app/services/${params.id}`)
            }
        ]
    }
])
export default router;