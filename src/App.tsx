import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { GlobalStyles, PagesWrapper } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PagesWrapper>
          <RoutesComponent />
        </PagesWrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App
