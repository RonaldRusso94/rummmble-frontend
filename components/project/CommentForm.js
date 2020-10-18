import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Icon from '../Icon';

const CommentForm = ({ comments }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    // handle data
    reset();
  };

  return (
    <>
      <p className="font-semibold text-2xl text-custom-2-gray text-center sm:text-left">
        {`${comments} Comments`}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-6">
        <textarea
          ref={register}
          rows={3}
          name="comment"
          className="p-2 text-lg w-full resize-none rounded-t-md text-black focus:outline-none"
          placeholder="Write something nice..."
        />
        <div className="w-full flex text-white">
          <button type="submit" className="flex items-center justify-center w-1/2 rounded-bl-md bg-blue-400 transition duration-150 hover:bg-blue-300 focus:outline-none">
            <Icon icon="edit-pencil" className="m-3 w-5" />
          </button>
          <button type="button" onClick={reset} className="flex items-center justify-center w-1/2 rounded-br-md bg-red-700 transition duration-150 hover:bg-red-600 focus:outline-none">
            <Icon icon="trash" className="m-3 w-5" />
          </button>
        </div>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  comments: PropTypes.number.isRequired,
};

export default CommentForm;
