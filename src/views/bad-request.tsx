import { Html } from "../templates/html-tmpl.js";

export default () => {
  return (
    <Html>
      <div class="main-container">
        <div class="bad-request-message">
          <h2>Bad Request</h2>
          <p>Sorry, the request you made was invalid.</p>
          <a href="/">Go back to the main page</a>
        </div>
      </div>
    </Html>
  );
};
