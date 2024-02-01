import axios from 'axios';
import { useState } from 'react';
import { customColor } from 'src/constants';
import styled from 'styled-components';

const Kojaem = () => {

  const supabase = async () => {
    await axios.post('/api/supabase');
  };

  return (
    <Container>
      <Wrapper>
        <button
          type="button"
          onClick={supabase}
        >{`context -> supabase 버튼`}</button>
      </Wrapper>
    </Container>
  );
};

export default Kojaem;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Wrapper = styled.article`
  border: 1px solid ${customColor.blue};
  width: fit-content;
  padding: 4px;
  border-radius: 999px;
`;
