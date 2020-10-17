export default function ProfilePicture({ src }) {
  return (
    <div className="h-40 w-40">
      <img
        alt="Profile Icon"
        className="h-full w-full object-cover rounded-3xl bg-white"
        src={src}
      />
    </div>
  );
}
