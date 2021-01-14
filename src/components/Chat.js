import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  word-break: break-word;
`;

const TopContainer = styled.main`
  flex-direction: column;
  padding: 25px 32px 0 32px;
  background: #4643d3;
`;

const UserContainer = styled.div`
  display: flex;
`;

const BottomContainer = styled.main`
  background: #ffffff;
  padding: 18px 32px 18px 32px;
`;

const FlexColContainer = styled.main`
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserName = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #ffffff;
  margin: 0;
`;

const UserTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 0.5;
  margin: 0;
  margin-top: 7px;
`;

const Close = styled.div`
  text-align: right;
  flex: 1;
  color: #ffffff;
  margin: 0;
  cursor: pointer;
`;

const Copy = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Input = styled.input`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #afafbd;
  outline: none;
  border: none;
`;

const Button = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #5856d7;
  background: none;
  outline: none;
  border: none;
`;

export const Chat = (props) => {
  return (
    <MainContainer>
      <TopContainer>
        <UserContainer>
          <Avatar src={props.avatar} alt="Emily Dougrer" />
          <FlexColContainer>
            <UserName>{props.username}</UserName>
            <UserTitle>{props.usertitle}</UserTitle>
          </FlexColContainer>
          <Close>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M12.3804 1.73433C12.4873 1.62776 12.5722 1.50111 12.6301 1.36167C12.688 1.22222 12.7178 1.07272 12.7178 0.921734C12.7178 0.770746 12.688 0.621243 12.6301 0.481799C12.5722 0.342355 12.4873 0.215712 12.3804 0.109133C12.2948 0.0385816 12.1873 0 12.0764 0C11.9654 0 11.8579 0.0385816 11.7723 0.109133L6.5 5.38435L1.73433 0.619637C1.62776 0.512688 1.50111 0.427829 1.36167 0.369927C1.22222 0.312026 1.07272 0.28222 0.921734 0.28222C0.770746 0.28222 0.621243 0.312026 0.481799 0.369927C0.342355 0.427829 0.215712 0.512688 0.109133 0.619637C0.0385816 0.70524 0 0.812716 0 0.923646C0 1.03458 0.0385816 1.14205 0.109133 1.22765L5.38435 6.5L0.619637 11.2657C0.512688 11.3722 0.427829 11.4989 0.369927 11.6383C0.312026 11.7778 0.28222 11.9273 0.28222 12.0783C0.28222 12.2293 0.312026 12.3788 0.369927 12.5182C0.427829 12.6576 0.512688 12.7843 0.619637 12.8909C0.70524 12.9614 0.812716 13 0.923646 13C1.03458 13 1.14205 12.9614 1.22765 12.8909L6.5 7.61565L11.2657 12.3813C11.3722 12.4883 11.4989 12.5731 11.6383 12.631C11.7778 12.6889 11.9273 12.7187 12.0783 12.7187C12.2293 12.7187 12.3788 12.6889 12.5182 12.631C12.6576 12.5731 12.7843 12.4883 12.8909 12.3813C12.9614 12.2957 13 12.1882 13 12.0773C13 11.9664 12.9614 11.8589 12.8909 11.7733L7.61565 6.5L12.3804 1.73433Z"
                fill="white"
              />
            </svg>
          </Close>
        </UserContainer>
        <Copy>{props.copy}</Copy>
      </TopContainer>
      <BottomContainer>
        <Form>
          <Input type="text" placeholder="Type your message..."></Input>
          <Button>Send</Button>
        </Form>
      </BottomContainer>
    </MainContainer>
  );
};
