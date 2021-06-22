import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './hooks/PrivateRoute';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/RegisterPage'));

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
