'use client'
import React, { useState, useEffect } from 'react';
import { Laugh, PartyPopper, Sparkles } from 'lucide-react';

const AprilFoolsDesign = () => {
  const [bounce, setBounce] = useState(false);
  const [rotate, setRotate] = useState(false);
  
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setBounce(prev => !prev);
    }, 2000);
    
    const rotateInterval = setInterval(() => {
      setRotate(prev => !prev);
    }, 3000);
    
    return () => {
      clearInterval(bounceInterval);
      clearInterval(rotateInterval);
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-4">
      <div className={`transition-transform duration-1000 ${bounce ? 'transform translate-y-6' : ''}`}>
        <div className={`bg-white rounded-lg shadow-2xl p-8 max-w-2xl transition-transform duration-1000 ${rotate ? 'transform rotate-3' : 'transform rotate-0'}`}>
          <div className="flex justify-between mb-6">
            <PartyPopper className="h-10 w-10 text-yellow-500" />
            <Laugh className="h-10 w-10 text-red-500" />
            <PartyPopper className="h-10 w-10 text-yellow-500" />
          </div>
          
          <h1 className="text-6xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            APRIL FOOL!
          </h1>
          
          <div className="flex items-center justify-center my-6">
            <Sparkles className="h-8 w-8 text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold text-center text-gray-800">
              <p>From</p>
              Modest Wilton 
              
              <p className='text-red-600 block text-xs'>(What you get when you buddy is a programmer)</p>
              "i got you Good"
              Happy new month 
            </h2>
            <Sparkles className="h-8 w-8 text-purple-500 ml-2" />
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <div className="h-12 w-12 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="h-12 w-12 bg-green-400 rounded-full animate-bounce delay-100"></div>
            <div className="h-12 w-12 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprilFoolsDesign;