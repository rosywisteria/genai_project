import './app.css';

import Main from './main';

function app() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;