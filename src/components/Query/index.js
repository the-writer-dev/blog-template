import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { slug: slug },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
