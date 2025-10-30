
import { useEffect, useRef, useState } from "react";
import chatbotData from "./ChatbotData.json";
import { IoIosArrowDown } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import AOS from 'aos'
import { useLocation } from "react-router-dom";

const Chatbot = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const bodyRef=useRef()
  const {pathname}=useLocation();
    useEffect(() => {
        window.scrollTo({
        top: 0,
        });
    }, [pathname]);
  const getBotResponse = (userText) => {
    // Find first matching trigger
    const match = chatbotData.find((item) =>
      userText.toLowerCase().includes(item.trigger.toLowerCase())
    );

    // Return matching response or default
    return match
      ? match.response
      : chatbotData.find((item) => item.trigger === "default").response;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
   setHistory(prev => [...prev, { role: "user", text: input }]);
    setInput(""); // clear input

    // Add "Thinking..." bot message temporarily
    // const thinkingMessage = { role: "bot", text: "Thinking..." };
    setHistory(prev => [...prev,{ role: "bot", text: "Thinking..." }] );

    // After delay, replace "Thinking..." with actual bot response
    setTimeout(() => {
      setHistory(prev => {
        // Replace last message (Thinking...) with real response
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = { role: "bot", text: getBotResponse(input) };
        return newHistory;
      });
    }, 1000); // 1 second delay
  };

  useEffect(()=>{
    bodyRef.current.scrollTo({top: bodyRef.current.scrollHeight,behavior:"smooth"});
  },[history])

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };
  
  useEffect(() => {
          AOS.init({
          duration: 1000, 
          once: true,
          offset: 200,
      })
    },[]);
  return (
    <section>
      <div className="max-w-[1440px] px-10 py-32 mx-auto flex items-center justify-center min-h-screen">
        <div className="w-[500px] bg-gradient-to-r from-[#1a0026] via-[#001a26] to-[#001a1a] dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-transparent border border-zinc-400 shadow-[0_0_10px_#e3e3e3] rounded-lg overflow-hidden '">
            {/* Chatbot header */}
            <div className='flex items-center justify-between bg-fuchsia-700 p-3 rounded-t-lg'>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-3xl '><FaRobot /></span>
                    <p className='text-white text-2xl'>Chatbot</p>
                </div>
                <button className='px-4 py-2 rounded-lg hover:border hover:border-gray-500 hover:bg-zinc-400 text-white bg-transparent'>
                <IoIosArrowDown />
            </button>
            </div>
            {/* Chat body body */}
          <div ref={bodyRef} className='w-full h-[450px] p-5 overflow-y-auto scrollbar'>
            <div className='flex gap-4 items-center'>
                <span className='text-black text-3xl w-10 h-10 rounded-full bg-white flex justify-center items-center dark:bg-black dark:text-white'><FaRobot /></span>
                <p className='text-black bg-sky-100 p-2 rounded-lg'>Hey there <br /> How can I help you</p>
            </div>
            {
                history.map((message,index)=>(
                    <div  key={index} className={`flex w-full  items-center ${message.role !=='user' ? 'justify-start items-center gap-4':'justify-end' }`}>
                        {message.role !=='user' && <span className='text-black text-3xl min-w-10 min-h-10 rounded-full bg-white flex justify-center items-center dark:bg-black dark:text-white'><FaRobot/></span>}
                        <p className={`p-2  ${message.role !=='user' ?'text-black bg-sky-100 rounded-xl': 'rounded-bl-xl max-w-[75%] my-3 bg-blue-500 text-white rounded-t-xl'}`}>{message.text}</p>
                    </div>
                ))
            }
          </div>
            {/* Chatbot footer */}
          <div className="p-4">
                <div className='w-full border border-gray-400 rounded-full flex p-2 relative'>
                    <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    required className='peer text-white dark:text-zinc-500 flex-1 outline-0 '
                    />
                    <button
                    onClick={handleSend}
                    className='px-4 py-2 w-8 h-8 rounded-full flex items-center justify-center border absolute right-1 top-1 border-zinc-500 text-white bg-blue-500 cursor-pointer opacity-0 peer-valid:opacity-100 transition-opacity duration-300 '>
                        <span><HiArrowUp /></span>
                    </button>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Chatbot;
