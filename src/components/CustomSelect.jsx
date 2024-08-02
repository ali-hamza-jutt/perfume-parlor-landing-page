import React, { useState,useEffect,useRef } from 'react'

const CustomSelect = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const containerRef = useRef(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    return (
      <div className="custom-select-container" ref={containerRef}>
        <div className="custom-select-header" onClick={toggleDropdown}>
          {selectedOption}
          <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
        </div>
        {isOpen && (
          <div className="custom-select-options">
            {options.map((option, index) => (
              <div
                key={index}
                className="custom-select-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };  export default CustomSelect;
  
  