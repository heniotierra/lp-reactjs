import { ApolloManager } from './contexts/apollo';
import Navigation from './navigation';

function App() {
  return (
    <ApolloManager>
      <Navigation />
    </ApolloManager>
  );
}

export default App;
