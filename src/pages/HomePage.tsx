import React from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import { Link } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="w-full min-h-full overflow-hidden bg-[#DBE2EF]">
      <Header className="text-slate-700" />
      <Panel
        title="Home Page"
        subtitle="Select page you want to visit"
        className="max-w-2xl"
      >
        <div className="space-y-3">
          <Link
            className="flex gap-4 p-4 bg-gray-100 text-[#3F72AF] text-3xl font-bold border rounded shadow-lg cursor-pointer "
            to={'/otp-form'}
          >
            <FaHandPointRight className="text-[#3F72AF]" />
            <div>OTP Form</div>
          </Link>
          <Link
            className="flex gap-4 p-4 text-3xl font-bold bg-gray-100 border rounded shadow-lg cursor-pointer text-forest-green "
            to={'/course-list'}
          >
            <FaHandPointRight className="text-forest-green" />
            <div>Course List</div>
          </Link>
          <Link
            className="flex gap-4 p-4 text-3xl font-bold bg-gray-100 border rounded shadow-lg cursor-pointer text-deep-navy "
            to={'/otp-form'}
          >
            <FaHandPointRight className="text-deep-navy" />
            <div>OTP Form</div>
          </Link>
        </div>
      </Panel>
    </div>
  );
};

export default HomePage;
