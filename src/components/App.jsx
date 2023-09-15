import { CardsList } from './CardsList/CardsList';
import cars from '../advertsCars';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <CardsList cars={cars} />
    </Layout>
  );
};
