import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="wrapper-outlet">
        <Outlet />
      </div>
      <div className="layout-wrapper__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
