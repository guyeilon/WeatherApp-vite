import Providers from 'app/Providers';
import Clouds from 'components/Clouds/Clouds';
import Routes from 'routes';

const App = () => (
  <Providers withReactQueryDevTools>
    <Routes />
    <Clouds amount={10} />
  </Providers>
);

export default App;
