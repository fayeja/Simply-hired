import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error-page">
      <h1>404!</h1>
      <p>Oops!Page not found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}