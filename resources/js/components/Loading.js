import React from 'react';

const Loading = () => {
  return (
    <div className='py-10 w-auto h-10 flex justify-center items-center'>
      <img src={require(`../../../resources/assets/loading.gif`).default} alt="Loading GIF" />
    </div>
  );
};

export default Loading;
