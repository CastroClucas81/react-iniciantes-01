import React from 'react';

//importando arquivo css
import './App.css';

const App = () => {
    //preciso retornar um elemento do tipo react
    //o create element tu inforna o tipo de tag html tu quer com as caracteristicas dele
    //o babel tranforma isso tudo em uma tag simples

    /*
        CRIANDO UM ELEMENTO SEM O BABEL
        return (
            React.createElement('a', {href: "https://www.youtube.com/"}, "youtube")
        );
    */

    //CRIANDO UM ELEMENTO COM O BABEL
    return (
        <div>
            <a href="https://www.youtube.com/">ola mundo</a>
        </div>
    );
    
}

//informar o que eu estou exportando
export default App;