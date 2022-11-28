import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Hourglass } from "react-spinners-css";

const style = {
  opacity: 0.5,
}

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug },
  });

  if (loading) return <Hourglass color="#6b6965" size="50" style={style}/>; 
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
