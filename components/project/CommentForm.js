import React from 'react';

const CommentForm = () => (
  <>
    <h2 className="font-semibold text-2xl text-custom-2-gray">
      0 Comments
    </h2>
    <textarea className="mt-6 mx-4 p-2 text-lg w-11/12 rounded-md text-black focus:outline-none" placeholder="Write something nice..." />
  </>
);

export default CommentForm;
