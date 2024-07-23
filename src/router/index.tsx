import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import OtpForm from '../pages/OtpForm';
import CourseList from '../pages/CourseList';
import Batches from '../pages/Batches';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/otp-form',
        element: <OtpForm />,
      },
      {
        path: '/course-list',
        element: <CourseList />,
      },
      {
        // path: 'batches',
        index: true,
        element: <Batches />,
      },
    ],
  },
]);
