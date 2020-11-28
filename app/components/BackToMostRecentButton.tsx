import React from 'react';
import simpleGit from 'simple-git';

const BackToMostRecentButton = ({
  checkBackTo,
  repo,
}: {
  checkBackTo: string;
  repo: string;
}) => {
  const handleClick = () => {
    const git = simpleGit(repo);
    git
      .checkout(checkBackTo)
      .then(() => {
        return true;
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
  return (
    <button type="button" onClick={() => handleClick()}>
      Checkout back to current timeline
    </button>
  );
};

export default BackToMostRecentButton;
