import React from 'react';
import ProfilePicture from './ProfilePicture';

/*
Will replace all the <img> tags for icons with an Icon component

most elements here are non functional
*/

export default function ProfileSidebar() {
  const [src, setSrc] = React.useState('https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');

  const fileInput = React.createRef();

  const changeAvatar = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (onLoadEvent) => {
        setSrc(onLoadEvent.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const deleteAvatar = () => {
    const defaultAvatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    if (src !== defaultAvatar) {
      setSrc(defaultAvatar);
    }
  };

  return (
    <div className="relative w-full sm:w-72 md:w-96 lg:w-128 flex flex-col items-center pb-52">
      <div className="absolute top-0 transform -translate-y-24">
        <ProfilePicture src={src} />
      </div>
      <div className="mt-20 tracking-wide">
        <p className="mt-16 mb-2 font-bold text-3xl">Marcela Lagil</p>
        <p className="mb-16 opacity-75 tracking-wider font-light text-2xl">UX Designer</p>
        <div className="mt-10 flex flex-col items-center text-xl">
          <button
            type="button"
            onClick={() => document.getElementById('inputAvatarFile').click()}
            onChange={changeAvatar}
            className="mb-6 px-10 py-3 tracking-wider font-semibold rounded-full bg-custom-5-cyan text-custom-0-dblue shadow-xl focus:outline-none"
          >
            Upload New Avatar
            <input accept="image/*" ref={fileInput} id="inputAvatarFile" type="file" className="hidden" />
          </button>
          <button
            type="button"
            onClick={deleteAvatar}
            className="px-10 py-3 tracking-widest border border-custom-5-cyan font-light rounded-full bg-custom-0-dblue text-custom-5-cyan shadow-xl focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>

      <hr className="w-2/3 border-t-2 border-gray-700 mt-10 mb-4" />

      <ul className="w-7/12 tracking-wider font-thin flex flex-col text-xl">
        <p className="text-center tracking-widest font-semibold text-2xl my-4">Profile</p>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/343422-200.png" alt="bio" className="text-sm w-8 h-8 mr-4" />
          <p className="text-custom-5-cyan">Enter a Bio</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/621754-200.png" alt="company" className="text-sm w-8 h-8 mr-4" />
          <p className="text-custom-5-cyan">Enter a Company</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1047157-200.png" alt="location" className="text-sm w-8 h-8 mr-4" />
          <p className="text-gray-400">Houston</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/3340626-200.png" alt="website" className="text-sm w-8 h-8 mr-4" />
          <a href="marcela.net" className="text-gray-400">Marcela.net</a>
        </li>
      </ul>

      <hr className="w-2/3 border-t-2 border-gray-700 mt-10 mb-4" />

      <ul className="w-7/12 tracking-widest font-light flex flex-col text-lg">
        <p className="text-center tracking-widest font-semibold text-2xl my-4">Linked Accounts</p>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <a href="https://www.facebook.com/" className="text-custom-5-cyan">Facebook</a>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="twitter" className="text-sm w-4 h-4 mr-4" />
          <a href="https://twitter.com/" className="text-custom-5-cyan">Twitter</a>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="google" className="text-sm w-4 h-4 mr-4" />
          <a href="https://www.google.com/" className="text-custom-5-cyan">Google</a>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="behance" className="text-sm w-4 h-4 mr-4" />
          <a href="https://www.behance.net/" className="text-custom-5-cyan">Behance</a>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="linkedin" className="text-sm w-4 h-4 mr-4" />
          <a href="https://www.linkedin.com/" className="text-custom-5-cyan">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}
