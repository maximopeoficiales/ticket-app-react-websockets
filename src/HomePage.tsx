// import { useContext } from "react";
import EmployeAdd from "./app/presentation/components/EmployeAdd/EmployeAdd";
import EmployeChart from "./app/presentation/components/EmployeChart/EmployeChart";
import EmployeList from "./app/presentation/components/EmployeList/EmployeList";
// import { SocketContext } from "./app/presentation/context/SocketContext";

function HomePage() {
  // const { online } = useContext(SocketContext);

  return (
    <div className="App">
      <div className="container">
        <h1>Hola Mundo</h1>
      </div>
    </div>
  );
}

export default HomePage;
