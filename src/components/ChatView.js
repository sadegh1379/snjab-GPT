import Filter from 'bad-words';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SiTelegram } from 'react-icons/si';
import { ChatContext } from '../context/chatContext';
import { davinci } from '../utils/davinci';
import ChatMessage from './ChatMessage';
import Thinking from './Thinking';

/**
 * A chat view component that displays a list of messages and a form for sending new messages.
 */
const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState('');
  const [thinking, setThinking] = useState(false);
  const [messages, addMessage] = useContext(ChatContext);

  /**
   * Scrolls the chat area to the bottom.
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Adds a new message to the chat.
   *
   * @param {string} newValue - The text of the new message.
   * @param {boolean} [ai=false] - Whether the message was sent by an AI or the user.
   */
  const updateMessage = (newValue, ai = false, selected) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      selected: `ChatGPT`,
    };

    addMessage(newMsg);
  };

  /**
   * Sends our prompt to our API and get response to our request from openai.
   *
   * @param {Event} e - The submit event of the form.
   */
  const sendMessage = async (e) => {
    e.preventDefault();

    const key = process.env.OPEN_AI_API_KEY;

    const filter = new Filter();
    const cleanPrompt = filter.isProfane(formValue)
      ? filter.clean(formValue)
      : formValue;

    const newMsg = cleanPrompt;
    const aiModel = 'ChatGPT';

    setThinking(true);
    setFormValue('');
    updateMessage(newMsg, false, aiModel);

    try {
        const response = await davinci(cleanPrompt, key);
        const data = response.data.choices[0].message.content;
        data && updateMessage(data, true, aiModel);
    } catch (err) {
      window.alert(`Error: ${err} please try again later`);
    }

    setThinking(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // 👇 Get input value
      sendMessage(e);
    }
  };

  /**
   * Scrolls the chat area to the bottom when the messages array is updated.
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  /**
   * Focuses the TextArea input to when the component is first rendered.
   */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='chatview'>
      <main className='chatview__chatarea mt-3'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={{ ...message }} />
        ))}
        {thinking && <Thinking />}

        <span ref={messagesEndRef}></span>
      </main>
      <form className='form' onSubmit={sendMessage}>
        <div className='flex flex-row-reverse items-stretch justify-between w-full my-5'>
          <textarea
            ref={inputRef}
            className='chatview__textarea-message'
            value={formValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='سوال خود را بپرسید'
          />
          <button
            type='submit'
            className='cursor-pointer'
            disabled={!formValue}>
            <SiTelegram size={50} color="rgb(16, 76, 130)" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatView;
