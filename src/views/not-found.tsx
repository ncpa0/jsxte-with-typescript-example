import { Html } from "../templates/html-tmpl.js";

export default () => {
  return (
    <Html>
      <div class="main-container">
        <div class="not-found-message">
          <h2>Error 404: Not Found</h2>
          <p>
            Sorry, the page you were looking for was not found. Please check the
            URL and try again.
          </p>
          <a href="/">Go back to the main page</a>
        </div>
      </div>
    </Html>
  );
};
