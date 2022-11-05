import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

import HomePage from 'pages/homePage/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
