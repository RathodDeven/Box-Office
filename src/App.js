import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';
import { ThemeProvider } from 'styled-components'; 


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/starred">
      <Starred />
      </Route>
      <Route path="/shows/:id">
        <Show />
      </Route>
    <Route>
      <h1> Not found</h1>
    </Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
