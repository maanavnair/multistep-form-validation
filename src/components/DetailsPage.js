import React, { useContext } from 'react';
import { FormContext } from './FormComponent';

const DetailsPage = () => {
  const { value } = useContext(FormContext);

  //function to convert camelCase to Proper String
  function toProperString(camelCase) {
    const properString = camelCase.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){
      return str.toUpperCase();
    });
  
    return properString;
  }

  //displaying all the user details

  return (
    <div className="container">
        <h1>User Details</h1>
      {Object.entries(value).map(([key, keyValue]) => {
        if(key !== 'confirm'){
            return <div key={key} className='details'>
                        <p className='key'>{toProperString(key)}: </p>
                        <p className='value'>{keyValue}</p>
                    </div>
        }
    })}
    </div>
  );
};

export default DetailsPage;
