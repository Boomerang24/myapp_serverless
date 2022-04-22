import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

import "./App.css";
import { UserCard } from "./components/UserCard";

function App() {
  const [currentUsers, setCurrentUsers] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const users = useFetch();

  useEffect(() => {
    setCurrentUsers(users);
  }, [users]);

  const handleDelete = () => {
    const userID = selectedCard.id.value;
    setSelectedCard(null);
    const filteredUsers = currentUsers.filter(
      (user) => user.id.value !== userID
    );
    setCurrentUsers(filteredUsers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="column">
            <h1>User's list</h1>
            {currentUsers !== null &&
              currentUsers.map((user, id) => (
                <div
                  key={id}
                  className="list-wrapper pointer"
                  onClick={() => setSelectedCard(user)}
                >
                  <img src={user.picture.thumbnail} alt={user.email} />
                  <p>
                    {user.name.title} {user.name.first} {user.name.last}
                  </p>
                </div>
              ))}
          </div>
          <div className="column">
            <h1>Card Information</h1>
            {selectedCard && (
              <UserCard
                title={selectedCard.name.title}
                name={selectedCard.name.first}
                lastname={selectedCard.name.last}
                location={selectedCard.location.country}
                email={selectedCard.email}
                phone={selectedCard.phone}
                picture={selectedCard.picture.large}
                deleteCard={handleDelete}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
