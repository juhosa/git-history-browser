import React from 'react';
import simpleGit from 'simple-git';

const styles = {
  div: {
    border: '2px solid #eee',
    borderRadius: '5px',
    marginBottom: '1em',
    padding: '0.5em',
  },
};

const Commit = ({ data, repo }: { data: { hash: string }; repo: string }) => {
  const handleClick = () => {
    const git = simpleGit(repo);
    git
      .checkout(data.hash)
      .then(() => {
        return true;
      })
      .catch((e) => {
        throw new Error(e);
      });
  };
  return (
    <div
      onClick={() => handleClick()}
      onKeyPress={() => {
        return true;
      }}
      role="button"
      tabIndex={0}
      style={styles.div}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Commit;
