import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';
import { LoadingProvider } from './contexts/LoadingContext';
import { Loading } from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';
import { ListProvider } from './contexts/ListContext';
import { StyledToaster } from './components/StyledToaster';

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AuthProvider>
          <ListProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <PagesWrapper>
                <StyledToaster />
                <Loading />
                <RoutesComponent />
              </PagesWrapper>
            </ThemeProvider>
          </ListProvider>
        </AuthProvider>
      </LoadingProvider>
    </Router>
  )
}

export default App
