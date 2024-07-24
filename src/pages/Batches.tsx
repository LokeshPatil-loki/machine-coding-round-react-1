import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import batchData from '../data/batches.json';
import { Batch } from '../types/Batch';
import DropDown from '../components/DropDown';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import classNames from 'classnames';

const Batches = () => {
  const [data, setData] = useState<Batch[] | []>(batchData);
  const [searchText, setSearchText] = useState('');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Paginated Data
  const records = data.slice(firstIndex, lastIndex);

  // Number of Pages
  const numberOfPages = Math.ceil(data.length / recordsPerPage);

  // Page Change
  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChangeDropDown = (page: number) => {
    setCurrentPage(page);
  };

  // Handle Events
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = () => {
    if (searchText) {
      let filteredData = batchData.filter((batch) => {
        let title = batch.title.toLowerCase();
        return title.includes(searchText.toLowerCase());
      });
      setData(filteredData);
    } else {
      setData(batchData);
    }
  };

  const dropDownConfig = Array(numberOfPages)
    .fill(0)
    .map((_, index) => {
      return { label: index + 1, value: index + 1 };
    });

  console.log(dropDownConfig);

  return (
    <div className="w-full min-h-full overflow-hidden bg-light-lavendar">
      <Header className="text-deep-navy" />
      <div className="w-full h-full p-10 pt-0">
        <Panel
          title="Batches"
          subtitle="Create learner’s batch and share information at the same time."
          className="max-w-5xl "
        >
          <div className="flex flex-col gap-5 ">
            <SearchInput
              value={searchText}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <Table data={records} />
          </div>
          <div className="flex items-center justify-end gap-2 mt-4">
            <div className="text-xs">Rows Per Page</div>
            <DropDown
              onChange={handleChangeDropDown}
              value={currentPage}
              config={dropDownConfig}
            />
            <div className="flex ">
              <MdArrowBackIos
                onClick={previousPage}
                className={classNames('text-lg', {
                  'text-gray-400': currentPage === 1,
                })}
              />

              <MdArrowForwardIos
                onClick={nextPage}
                className={classNames('text-lg', {
                  'text-gray-400': currentPage === numberOfPages,
                })}
              />
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Batches;
