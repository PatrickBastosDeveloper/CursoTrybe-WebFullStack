import { useState } from "react";

function Comments() {
  const [active, setActive] = useState(false);

  return (
    <section>
      <h1 style={{ fontSize: "150px", margin: 0, color: "#ff8052" }}>404.</h1>

      {!active && (
        <div>
          <h1>
            Nada encontrado. <br /> Queríamos achar o <strong>André</strong>...
          </h1>
          <img
            src="https://res.cloudinary.com/robertotcestari/image/upload/v1645115144/trybe/andrehorman_adilaa.png"
            alt="André"
            width="400"
          />
          <button
            className="isaac"
            style={{ display: "block", margin: "20px auto" }}
            onClick={() => setActive(true)}
          >
            E o que Encontramos?
          </button>
        </div>
      )}
      {active && (
        <div>
          <h2>
            ... a galera tomando <strong>suco de laranja!</strong>
          </h2>
          <img
            src="https://res.cloudinary.com/robertotcestari/image/upload/v1645115862/trybe/silvinha-andre_tokbqo.png"
            alt="Suco de laranja"
            width="600"
          />
        </div>
      )}
    </section>
  );
}
export default Comments;
