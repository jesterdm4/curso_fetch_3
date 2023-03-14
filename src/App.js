import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

function App() {

  const StyledBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    color: white;
    background-color: black;
  `;

  const StyledH1 = styled.h1`
    background-color: green;
  `;

  const url = "https://jsonplaceholder.typicode.com/users"
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data)=> setData(data))
  }, []);
  
  

  return (
    <StyledBg>

      <StyledH1>Fetch like a PRO</StyledH1>
    
      <div>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    
    </StyledBg>
  );
}

export default App;
