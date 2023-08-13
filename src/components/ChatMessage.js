import moment from 'moment';
import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import snjabLogo from '../assets/images/ai.png';
import Image from './Image';

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const ChatMessage = (props) => {
  const { id, createdAt, text, ai = false, selected } = props.message;

  return (
    <div
      key={id}
      className={`${ai ? ' bg-gray-300 text-gray-600' : 'bg-s-blue text-white'} message`}>
      {selected === 'DALL·E' && ai ? (
        <Image url={text} />
      ) : (
        <div className='message__wrapper'>
          <ReactMarkdown
            // className={`message__markdown ${ai ? 'text-left' : 'text-right'}`}
            className={`text-right`}
            children={text}
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || 'language-js');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={oneDark}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}{' '}
                  </code>
                );
              },
            }}
          />

          <div
            className={`text-right text-sm font-thin mt-2 ${ai ? 'text-gray-600' : 'text-slate-200'}`}>
            {moment(createdAt).calendar()}
          </div>
        </div>
      )}

      <div className='message__pic'>
        {ai ? (
          <div className='avatar'>
            <div className='w-14 rounded-full'>
              <img className='w-24 h-24' src={snjabLogo} alt='profile pic' />
            </div>
          </div>
        ) : (
          <div className='avatar'>
            <div className='w-14 rounded-full flex justify-center items-center'>
            <HiUserCircle size={60}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
