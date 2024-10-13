import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${result.id.raw}`); 
  };

  console.log(result);

  return (
    <div 
      className="result-card border border-[#e3e3e3] p-2 rounded-md cursor-pointer bg-white my-2"
      onClick={handleClick}
    >
      {/* Nom Commercial */}
      <h3 className="text-md " style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#000000',
        fontSize: '12px'
      }}>
        {result['Nom Commercial'].raw}
      </h3>

      {/* Forme and Dosage */}
      <div className="mt-1 flex items-center space-x-2">
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          color: '#FFFFFF',
          fontSize: '8px',
          backgroundColor: '#0E0E52',
          borderRadius: '10%',
          padding: '2px 3px'
        }}>
          {result['Forme'] ? result['Forme'].raw : 'N/A'}
        </span>
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          color: '#FFFFFF',
          fontSize: '8px',
          backgroundColor: '#D2D9FF',
          borderRadius: '10%',
          padding: '2px 3px', 
          
        }}>
          {result['Dosage'] ? result['Dosage'].raw : 'N/A'}
        </span>
      </div>
    </div>
  );
};

export default CustomResult;
