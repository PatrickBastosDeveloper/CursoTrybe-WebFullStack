import React from "react";
import contents from "../data";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <section>
        {contents.map((item) => (
          <Card key={item.id} module={item} />
        ))}
      </section>
    );
  }
}

export default CardList;
