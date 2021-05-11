import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo={faker.time.recent()}
        text={faker.lorem.text()}
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo={faker.time.recent()}
        text={faker.lorem.text()}
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
