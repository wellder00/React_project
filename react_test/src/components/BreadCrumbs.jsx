import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import CurrentNeedsPage from './CurrentNeedsPage';
import SuccessfulStoriesPage from './SuccessfulStoriesPage';
import OurGoal from './OurGoal';
import OurTeams from './OurTeams';
import DocumentPage from './DocumentPage';
import Contacts from './Contacts';

const Breadcrumbs = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      breadcrumb: 'Головна сторінка',
    },
    {
      path: '/CurrentNeedsPage',
      element: <CurrentNeedsPage />,
      breadcrumb: 'Поточні потреби',
    },
    {
      path: '/DocumentPage',
      element: <DocumentPage />,
      breadcrumb: 'Документація та звітність',
    },
    {
      path: '/OurGoal',
      element: <OurGoal />,
      breadcrumb: 'Мета та історія фонду',
    },
    {
      path: '/OurTeams',
      element: <OurTeams />,
      breadcrumb: 'Команда та партнери',
    },
    {
      path: '/SuccessfulStoriesPage',
      element: <SuccessfulStoriesPage />,
      breadcrumb: 'Успішні історії',
    },
    {
      path: '/Contacts',
      element: <Contacts />,
      breadcrumb: 'Контакти',
    },
  ];
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div key={`${match}-${match}`} >
          <Link className='bredcrumbs_link' to={match.url || ''}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
