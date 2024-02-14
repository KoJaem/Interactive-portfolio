import { SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { RxCross1 } from 'react-icons/rx';
import { customColor } from 'src/constants';
import { customColorType } from 'src/constants/customColor';
import styled from 'styled-components';
import { Typography, handleColor } from './Typography';
type Props = {
  boxHeaderColor: keyof customColorType;
  handleModal: () => void;
  setAccessKey: (value: SetStateAction<string | undefined>) => void;
};
export const AccessKeyModal = ({
  boxHeaderColor,
  handleModal,
  setAccessKey,
}: Props) => {
  const { register, getValues } = useForm();
  return (
    <Container>
      <Wrapper>
        <AccessKeyHeader color={boxHeaderColor}>
          <Typography size="1rem">Access Key</Typography>
          <RxCross1
            onClick={handleModal}
            size={20}
            color={`${customColor.white}`}
            cursor={'pointer'}
          />
        </AccessKeyHeader>
        <InputWrapper>
          <Input {...register('accessKey')} />
          <SubmitButton
            type="button"
            aria-label='accessKey-submit'
            onClick={() => {
              setAccessKey(getValues('accessKey'));
              handleModal();
            }}
          >
            <HiOutlinePaperAirplane />
          </SubmitButton>
        </InputWrapper>
      </Wrapper>
      <Overlay />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${customColor.darkGray}90;
  border-radius: 12px;
  z-index: 1;
`;

const Wrapper = styled.section`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 50%;
  z-index: 2;
  min-width: 160px;
`;

type StyledProps = {
  color?: keyof customColorType;
};
const AccessKeyHeader = styled.section<StyledProps>`
  background-color: ${({ color }) =>
    color ? handleColor(color) : customColor.purple};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const InputWrapper = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${customColor.lightGray};
  padding: 8px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Input = styled.input`
  resize: none;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
`;
