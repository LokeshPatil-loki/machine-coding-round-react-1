import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import OtpForm from '../pages/OtpForm';
import DragAndDropCard from '../pages/DragAndDropCard';
import DataTable from '../pages/DataTable';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <OtpForm />,
      },
      {
        path: 'dragndrop',
        element: <DragAndDropCard />,
      },
      {
        path: 'table',
        element: <DataTable />,
      },
    ],
  },
]);
