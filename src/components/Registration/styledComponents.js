import styled from 'styled-components'

export const RegistrationContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

export const ImageContainer = styled.img`
  width: 400px;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  color: #334155;
`
export const FormContainer = styled.form`
  width: 300px;
  // border: 1px solid red;
`
export const FormDetailsContainer = styled.div``

export const NameInput = styled.input`
  width: 100%;
  border: 1px solid #cbd5e1;
  outline: none;
  height: 30px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #7b8794;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #475569;
`

export const DropdownContainer = styled(NameInput)`
  color: #334155;
  margin-bottom: 20px;
`

export const TopicOption = styled.option``

export const RegisterNowButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  padding: 8px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 5px;
  margin-bottom: 5px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ff0b37;
  margin-top: 0px;
`
