import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import { GlobalStyles } from './styles/global'
import { MemoryRouter as Router } from "react-router-dom";
import { RoutesComponent } from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
            <RoutesComponent />
        </ThemeProvider>
    </Router>
  )
}

export default App
