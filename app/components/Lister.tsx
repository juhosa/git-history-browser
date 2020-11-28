import React, { useEffect, useState } from 'react';
import simpleGit, { DefaultLogFields, ListLogSummary } from 'simple-git';
import BackToMostRecentButton from './BackToMostRecentButton';
import Commit from './Commit';

export default function Lister({ repo }: { repo: string }) {
  const [commits, setCommits] = useState<
    Array<DefaultLogFields | DefaultLogFields>
  >([]);
  const [startBranch, setStartBranch] = useState<string>('');

  useEffect(() => {
    const git = simpleGit(repo);
    git
      .status()
      .then((status) => {
        const current: string = status.current ?? '';
        setStartBranch(current);
        return status;
      })
      .catch((e) => {
        throw new Error(e);
      });
    git
      .log()
      .then((log: ListLogSummary<DefaultLogFields>) => {
        setCommits([...log.all]);
        return true;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, [repo]);
  return (
    <div>
      <h2>Commits</h2>
      <BackToMostRecentButton repo={repo} checkBackTo={startBranch} />
      {commits.map((c: DefaultLogFields) => {
        return <Commit repo={repo} data={c} key={c.hash} />;
      })}
    </div>
  );
}
