import ChatView from './components/ChatView';
import Header from './components/Header';
import { ChatContextProvider } from './context/chatContext';

const App = () => {
  return (
    <ChatContextProvider>
        <div>
        <Header/>
        <ChatView />
        </div>
    </ChatContextProvider>
  );
};

export default App;
