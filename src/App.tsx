import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppRoutes } from './routes';
import { Layout } from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
      <Toaster position="top-center" theme="dark" />
    </Router>
  );
}

export default App;