import React from "react";
import { Link } from "react-router-dom";

const getData = () => {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
};

export default function User() {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let data = await getData();
      setData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Something is wrong");
      setErr(true);
      setIsLoading(false);
    }
  };

  console.log(data);

  return isLoading ? (
    <h1>...Loading</h1>
  ) : err ? (
    <h1>Something is seriously wrong</h1>
  ) : (
    <>
      <h1>User</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px"
        }}
      >
        {data?.map((ele) => (
          <div key={ele.id} style={{ border: "1px solid black" }}>
            <img src={ele.avatar} alt={ele.first_name} />
            <h3>{`${ele.first_name} ${ele.last_name}`}</h3>
            <h4>{ele.email}</h4>
            <Link to={`/user/${ele.id}`}>More Info</Link>
          </div>
        ))}
      </div>
    </>
  );
}
