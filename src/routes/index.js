import { HeaderOnly } from '~/Component/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/UpLoad';
import Search from '~/pages/Search';
// khong can dang nhap
export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upLoad',
        component: UpLoad,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
// yeu cau log in
export const privateRoutes = [];
