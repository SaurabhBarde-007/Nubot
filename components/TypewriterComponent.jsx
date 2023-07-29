import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
  const strings = ["Hello, this is a typewriter effect.", "This is another line.", "And a third line."];

  return (
    <div className="typewriter">
      <Typewriter
        string={strings}
        delay={50} // Adjust the typing speed (optional)
        stopBlinkinOnComplete={true} // Stops cursor blinking when typing is complete (optional)
        cursorClassName="cursor" // CSS class for the cursor (optional)
      />
    </div>
  );
};

export default TypewriterComponent;
