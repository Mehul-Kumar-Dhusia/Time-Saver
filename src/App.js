import { useContext, useEffect } from "react";
import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";
import { MyContext } from "./MyContext";
import axios from "axios";

function App() {
  const {setTicketData , setUserData , setShowDisplayBox , grouping} = useContext(MyContext);
  useEffect(() => {
    axios.get("https://api.quicksell.co/v1/internal/frontend-assignment").then((response) => {
      setTicketData(response.data.tickets)
      setUserData(response.data.users)
      setShowDisplayBox(false)
    })
  } , [])
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
