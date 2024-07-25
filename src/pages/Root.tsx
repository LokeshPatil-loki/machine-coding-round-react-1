import { Outlet } from 'react-router';

const Root = () => {
  return (
    <>
      <Outlet />
      <a href="https://chaicode.com" className="fixed w-24 right-5 bottom-5">
        <img src="images/chaicode.png" />
      </a>
    </>
  );
};

export default Root;
