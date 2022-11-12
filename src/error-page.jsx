import { useRouteError } from "react-router-dom";
import { Bubbles } from "./components/bubbles/Bubbles";


export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>!!!!!!! {error.statusText || error.message}</i>
      </p>
      <Bubbles/>
    </div>
  );
}