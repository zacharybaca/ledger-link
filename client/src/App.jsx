import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './components/Layout/NavBar/NavBar';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';
import DataTable from './components/DataTable/DataTable';


const Layout = () => (
  <div className="app-container">
    <NavBar />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="datatable" element={<DataTable />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
