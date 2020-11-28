import React, { useState } from 'react';
import Lister from './Lister';
import SelectRepo from './SelectRepo';

export default function Home(): JSX.Element {
  const [repo, setRepo] = useState<string | undefined>(undefined);

  return (
    <div data-tid="container">
      <h2>Git history browser</h2>
      <SelectRepo asetaRepo={(r: string) => setRepo(r)} />
      {repo}
      {repo !== undefined && <Lister repo={repo} />}
    </div>
  );
}
