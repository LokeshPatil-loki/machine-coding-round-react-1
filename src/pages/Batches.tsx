import React, { ChangeEvent, useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import SearchInput from '../components/SearchInput';

const Batches = () => {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = () => {
    console.log(searchText);
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
          <div className="flex flex-col max-w-4xl gap-2 xl:mr-16">
            <SearchInput
              value={searchText}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default Batches;
