import React, { useState, useEffect, useRef } from 'react';
import { Slider, Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const RangeSelector = () => {
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Use media query to check if the screen width is less than 728px
  const isMobile = useMediaQuery('(max-width: 728px)');

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: isMobile ? 200 : 250, // Adjust width based on screen size
        textAlign: 'left',
        zIndex: 20,
        marginBottom: '20px',
        marginRight: '20px'
      }}
    >
      <Typography
        variant="body2"
        onClick={toggleOpen}
        sx={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '18px',
          backgroundColor: '#ffffff',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '4px',
          position: 'relative',
          zIndex: 21
        }}
      >
        <Box sx={{ flex: 1 }}>FILTER PRICE</Box>
        {open && (
          <Typography variant="body2" sx={{ fontSize: '0.75rem', ml: 1 }}>
            Rs{priceRange[0]} - Rs{priceRange[1]}
          </Typography>
        )}
        <IconButton style={{ padding: 0 }}>
          {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
        </IconButton>
      </Typography>
      <Box
        sx={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.2s ease, opacity 0.2s ease',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '10px',
          zIndex: 20
        }}
      >
        <Slider
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={15000}
          sx={{ color: 'red' }}
        />
      </Box>
    </Box>
  );
};

export default RangeSelector;
