import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Theme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Toaster position='top-right' reverseOrder />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
