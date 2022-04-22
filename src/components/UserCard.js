export const UserCard = ({
  title,
  name,
  lastname,
  location,
  email,
  phone,
  picture,
  deleteCard,
}) => {
  if (!title | !name) return null;
  return (
    <div className="card-wrapper">
      <img src={picture} alt={(name, lastname)} />
      <p>
        {title} {name} {lastname}{" "}
      </p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{location}</p>
      <button className="button-delete" onClick={deleteCard}>
        Delete user
      </button>
    </div>
  );
};
