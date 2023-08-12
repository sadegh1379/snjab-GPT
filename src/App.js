import { useState } from 'react';
import ChatView from './components/ChatView';
import Modal from './components/Modal';
import Setting from './components/Setting';
import SideBar from './components/SideBar';
import { ChatContextProvider } from './context/chatContext';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   const apiKey = window.localStorage.getItem('api-key');
  //   if (!apiKey) {
  //     setModalOpen(true);
  //   }
  // }, []);
  return (
    <ChatContextProvider>
      <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <div className='flex transition duration-500 ease-in-out'>
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
