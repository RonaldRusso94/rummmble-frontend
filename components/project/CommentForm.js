import React from 'react';
import { useForm } from 'react-hook-form';

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    // handle data
    reset();
  };

  return (
    <>
      <h2 className="font-semibold text-2xl text-custom-2-gray">
        0 Comments
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-6">
        <textarea
          ref={register}
          rows={3}
          name="comment"
          className="p-2 text-lg w-full resize-none rounded-t-md text-black focus:outline-none"
          placeholder="Write something nice..."
        />
        <div className="w-full flex">
          <button type="submit" className="flex items-center justify-center w-1/2 rounded-bl-md bg-blue-400 transition duration-150 hover:bg-blue-300 focus:outline-none">
            <img src="https://static.thenounproject.com/png/3546626-200.png" alt="post" className="m-2 w-6 h-auto" />
          </button>
          <button type="button" onClick={reset} className="flex items-center justify-center w-1/2 rounded-br-md bg-red-700 transition duration-150 hover:bg-red-600 focus:outline-none">
            <img src="https://static.thenounproject.com/png/3432156-200.png" alt="delete" className="m-2 w-6 h-auto" />
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
