import React from "react";
import fetch from "../../api/fetch";
import { useLoaderData, Link } from "react-router-dom";

export async function loader({ request, params }) {
  const url = `https://jsonplaceholder.typicode.com/${params.type}/${params.itemId}`
  let response = await fetch(url)
  return { data: response.data, type: params.type }
}

export default () => {
  const { data, type } = useLoaderData();
  console.log(data)
  const { title, id, body } = data;
  return (
    <div>
      <h3>{title}  номер: {id}</h3>
      <p>{body}</p>
      {
        type == "albums" && <Link to="photos">смотреть фото</Link>
      }
    </div>
  )
}