// Import Layouts
import { HeaderOnly } from '~/components/Layout';

// Import Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

export const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/following',
        element: Following,
        layout: null,
    },
    {
        path: '/upload',
        element: Upload,
        layout: HeaderOnly,
    },
];
