import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <header>
      <Navigation />
      {<AuthNav />}
    </header>
  );
};
