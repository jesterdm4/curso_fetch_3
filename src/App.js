import React from 'react'
import styled from 'styled-components';
import { useFetch } from "./useFetch";

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

function App() {

  const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <StyledBg>
      <StyledH1>Fetch like a PRO</StyledH1>
      <button onClick={handleCancelRequest}> Cancelar peticion </button>
      <div>
        <ul>
          {
            error ? 
              (<li> Error: {error}</li>) : 
              (loading ?
                  (<li>Cargando. . .</li>) : 
                  (data?.map((user) => (
                    <li key={user.id}>
                      {user.name}
                    </li>
                  ))))
          }
        </ul>
      </div>
    
    </StyledBg>
  );
}

export default App;
