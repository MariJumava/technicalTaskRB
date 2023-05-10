import { Notifications } from '@mantine/notifications';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Notifications position="top-center" />
      <Home />
    </>
  );
};
