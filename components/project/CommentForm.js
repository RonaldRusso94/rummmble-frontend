import React from 'react';
import { useForm } from 'react-hook-form';

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    // handle data
    reset();
  };

  /* there's a bug where if any button is pressed on the form, when you
    resize the textarea, it resizes similar to how you scroll using middle mouse button
    if instead you replace the button tag with a div tag, this problem doesn't occur
    not exactly sure what's causing it or why
  */

  // could replace the "Post" and "Delete" button text with image icons representing them

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
          className="p-2 text-lg w-full rounded-t-md text-black focus:outline-none"
          placeholder="Write something nice..."
        />
        <div className="w-full flex">
          <button type="submit" className="w-1/2 h-8 rounded-bl-md bg-blue-400 transition duration-150 hover:bg-blue-300 focus:outline-none">
            Post
          </button>
          <button type="button" onClick={reset} className="w-1/2 h-8 rounded-br-md bg-red-700 transition duration-150 hover:bg-red-600 focus:outline-none">
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
