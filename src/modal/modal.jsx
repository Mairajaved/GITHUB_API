
const Modal = ({ user, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <img src={user.avatar_url} alt={user.login} />
        <p>Name: {user.name}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Location: {user.location}</p>
      </div>
    </div>
  );
};

export default Modal;
