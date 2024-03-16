import Item from "./item";

const List = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </div>
  );
};

export default List;
