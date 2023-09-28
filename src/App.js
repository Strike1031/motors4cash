import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { AdminLayout, MainLayout } from './components/layouts/layout';
import FaqPage from './pages/FaqPage';
import AppointmentPage from './pages/AppointmentPage';
import DetailPage from './pages/DetailPage';
import SubDetailPage from './pages/SubdetailPage';
import { AppointmentDetailPage } from './pages/AppointmentDetailPage';
import VehicleContextProvider from './context/context';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import AdminLogin from './pages/AdminLogin';
import AdminTable from './pages/AdminTable';

function App() {
  return (
    <div className="App">
      <VehicleContextProvider>
      <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/faq' element={<FaqPage />} />
              <Route path='/appointment' element={<AppointmentPage />} />
              <Route path='/appointment/:id' element={<AppointmentDetailPage />} />
              <Route path='/detail/:id' element={<DetailPage />} />
              <Route path='/detail/:id/subdetail' element={<SubDetailPage />} />
              <Route path="/book/:id" element={<BookPage/>}/>
            </Route>
          <Route element={<AdminLayout/>}>
            <Route path='/admin' element={<AdminLogin/>}/>
            <Route path='/admin/table' element={<AdminTable/>}/>
            <Route path="/contact/:id" element={<ContactPage/>}/>
          </Route>
          </Routes>
        </BrowserRouter>
      </VehicleContextProvider>
    </div>
  );
}

export default App;
