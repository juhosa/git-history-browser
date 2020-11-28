import React from 'react';

const { dialog } = require('electron').remote;

const SelectRepo = ({ asetaRepo }: { asetaRepo: (r: string) => void }) => {
  const handleClick = () => {
    const value: string[] | undefined = dialog.showOpenDialogSync({
      properties: ['openDirectory'],
    });
    asetaRepo(value[0] ?? '');
  };
  return (
    <div>
      <button type="button" onClick={() => handleClick()}>
        Select repo
      </button>
    </div>
  );
};

export default SelectRepo;
