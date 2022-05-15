import './App.css';

import Perfil from './assets/perfil.png';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetais from './components/CarDetais';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  //const name = ("João");
  const [userName] = useState("Raquel");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", km: 0, newCar:true },
    { id: 2, brand: "KIA", color: "Purple", km: 6564, newCar:false },
    { id: 3, brand: "Neesan", color: "White", km: 13452343, newCar:false },
  ];
function showMessage() {
  console.log("Evento do componente");
}

const [message, setMessage] = useState("")

const handleMessage = (msg) => {
  setMessage(msg);
};

const pessoa = [
  {id: 1, name: "André", age: 23, job: "dev"},
  {id: 2, name: "Raquel", age: 24, job: "admin"},
  {id: 3, name: "João", age: 16, job: "bricker"},
];
  return (
    <div className="App">
      <h1>seção 3</h1>
      {/* imagem em public */}
      <div>
        <img src="/bg.jpg" alt="fundo" />
      </div>
      {/* imagem em public */}
      <div>
        <img src={Perfil} alt="perfil" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      <CarDetais brand="VW" km={1000000} color="Blue" newCar={true} />
      {/* reaproveitando */}
      <CarDetais brand="Ford" km={0} color="Red" newCar={false} />
      <CarDetais brand="Fiat" km={200000} color="Green" newCar={true} />
      {/* Loop em Array de Objetos*/}
      {cars.map((car) => (
        <CarDetais key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="teste">
        <p>e este é o conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* Message */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoa.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          name={pessoa.name}
          job={pessoa.job}
          age={pessoa.age}
        />
      ))}
    </div>
  );
}

export default App;
