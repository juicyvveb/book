import React from "react";
import { useLoaderData } from "react-router";
import fetch from "../../api/fetch";
import s from './PhotoAlbum.module.scss';

export async function loader({ params }) {
  // throw('SOME PROPNA')
  const url = `https://jsonplaceholder.typicode.com/${params.type}/${params.itemId}/photos`
  let response = await fetch(url);
  return response.data
}

export default () => {
  const data = useLoaderData();
  function Photo({ title, url }) {
    return (
      <li>
        <div className="img">
          <img src={url} alt="photo" />
        </div>
        <h4>{title}</h4>
      </li>
    )
  }

  const list = data.map(photo => <Photo key={photo.id} title={photo.title} url={photo.url} />)

  return (
    <div className={s.photos}>
      {data.length == false && <p>Не удалось загрузить фото</p>}
      {data.length > 0 && <ul className={s['photos-list']}>{list}</ul>}
    </div>
  )
}