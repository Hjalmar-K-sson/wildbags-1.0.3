import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import Navigation from './components/navigation/navigation.comp';
import Home from './routes/Home.page';
import Shop from './routes/Shop.page';
import About from './routes/About.page';
import Custom from './routes/Custom.page';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="custom" element={<Custom />} />
      </Route>
    </Routes>
  );
};

export default App;

// import { selectCurrentUser } from "./store/user/user.selector";
// const currentUser = selectCurrentUser();
// <Route
//   path="admin"
//   element={currentUser.isAdmin ? <AdminAuth /> : <AdminPanel />}
// />;
