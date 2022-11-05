import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { EditContactModal } from './EditContactModal/EditContactModal';
import HomePage from 'pages/homePage/Homepage';
function App() {
  return (
    <>
      <Routes>
        <Route end path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/:contactId" element={<EditContactModal />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
