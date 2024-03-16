const Item = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.login}</p>
      <a href={user.html_url}>Profile</a>
    </div>
  );
};

export default Item;
