import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ author, content, date }) => {
  const hideContent = (e) => {
    /* similar to reddit where if you press the top bar in comments it hides the comment text

    on mobile there's this weird background flash of blue when you press it, the solution is to use
    -webkit-tap-highlight-color: transparent, but that doesn't exist in tailwind

      it'd look a lot nicer if there was a transition attached to it, but since we're changing only
      changing display, there's no transition for that. maybe make it change the height or opacity
      and transition that
    */
    const commentContent = e.currentTarget.parentNode.lastChild;
    if (commentContent.style.display === 'block' || commentContent.style.display === '') {
      commentContent.style.display = 'none';
    } else if (commentContent.style.display === 'none') {
      commentContent.style.display = 'block';
    }
  };

  return (
    <div className="w-full bg-gray-200 mb-4 sm:mb-6 md:mb-8 text-black rounded-lg shadow-md">
      <div
        role="button"
        tabIndex={0}
        onClick={hideContent}
        onKeyPress={hideContent}
        className="flex px-4 py-4 items-center w-full focus:outline-none"
      >
        <a href="/profile" className="w-8 h-8 border-1 border-black">
          <img
            src="https://images.unsplash.com/photo-1601900706327-1632f6d48d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="PFP"
            className="object-cover w-full h-full rounded-full"
          />
        </a>
        <div className="flex flex-grow items-center ml-3">
          <a href="/profile" className="text-sm sm:text-lg font-semibold text-left hover:underline">{author}</a>
        </div>
        <p suppressHydrationWarning className="text-sm w-0 lg:w-auto text-right text-gray-700 flex flex-grow-0 items-center justify-end">{date}</p>
      </div>
      <div id="commentContent" className="w-full px-4 pb-3 overflow-auto break-words">{content}</div>
    </div>
  );
};

CommentCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentCard;
