import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredusers] = useState([]);

  function inputSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setFilteredusers(data.users);
      });
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredusers(filteredUsers);
  }, [search]);
  return (
    <>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cari Users"
        onChange={(event) => inputSearch(event)}
      />

      {filteredUsers.map((user, index) => (
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={user.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstName} <span>{user.lastName}</span>
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item fw-bold">
                    Gender : {user.gender}
                  </li>
                  <li className="list-group-item fw-bold">
                    birth Date: {user.birthDate}
                  </li>
                  <li className="list-group-item fw-bold">
                    Email: {user.email}
                  </li>
                </ul>
                <div className="d-flex flex-row-reverse">
                  <Link
                    to={`/users/${user.id}/carts`}
                    className="btn btn-primary"
                  >
                    Cart Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
