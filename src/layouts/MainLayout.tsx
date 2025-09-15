import { Button } from '@/components/ui/button';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Button>Navbar</Button>
            <Outlet />
            <h1>Footer</h1>
        </div>
    );
};

export default MainLayout;