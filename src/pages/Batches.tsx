import React, { ChangeEvent, useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import SearchInput from '../components/SearchInput';
import Table from '../components/Table';
import batchData from '../data/batches.json';
import { Batch } from '../types/Batch';

const Batches = () => {
  const [data, setData] = useState<Batch[] | []>(batchData || []);
  const [searchText, setSearchText] = useState('');
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

  return (
    <div className="w-full min-h-full overflow-hidden bg-light-lavendar">
      <Header className="text-deep-navy" />
      <div className="w-full h-full p-10 pt-0">
        <Panel
          title="Batches"
          subtitle="Create learner’s batch and share information at the same time."
          className="max-w-5xl "
        >
          <div className="flex flex-col gap-2 ">
            <SearchInput
              value={searchText}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <Table data={data} />
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Batches;
