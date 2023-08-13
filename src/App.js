// import axios from "axios";
import ChatView from "./components/ChatView";
import Header from "./components/Header";
import { ChatContextProvider } from "./context/chatContext";
// import { useEffect } from "react";

const App = () => {

  // const getData = async () => {
  //   const res = await axios.get("https://api.ipify.org/?format=json");
  //   console.log(res.data);
  //   // setIP(res.data.ip);
  // };

  // useEffect(() => {getData()}, [])

  return (
    <ChatContextProvider>
      <div className="main">
        <Header />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
