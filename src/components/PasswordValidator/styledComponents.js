// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PasswordCardContainer = styled.div`
  min-height: 40%;
  width: 40%;
  border-radius: 6px;
  background-color: #475569;
  box-shadow: 1px 1px 1px #434451;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderContainer = styled.div``
export const CardHeader = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 0px;
`
export const CardDescription = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`

export const PasswordEl = styled.input`
  height: 42px;
  width: 80%;
  margin-top: 2rem;
`
export const ErrorEl = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
