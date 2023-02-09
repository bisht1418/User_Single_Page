import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`https://reqres.in/api/users/${id}`).then((res) => res.json());
};

export default function UserSinglePage() {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [err, setErr] = React.useState(false);

  let params = useParams();
  console.log(params);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let data = await getData(params.user_id);
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
      <img src={data?.avatar} alt="" />
      <h3>{`${data?.first_name} ${data?.last_name}`}</h3>
      <h4>{data?.email}</h4>
    </>
  );
}
