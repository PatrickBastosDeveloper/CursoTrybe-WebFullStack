import React from 'react';


// function Header() {
//   return (
//     <section>
//       <button>Primeiro botão</button>
//       <button>Segundo botão</button>
//     </section>
//   );
// }

// Header()

// Header.render()

// const Header = {
//   render: () => {}
// }


class Header extends React.Component {

  render(){
    return (
      <section>
        <button>Primeiro botão</button>
        <button>Segundo botão</button>
      </section>
    );
  }

}


export default Header;
