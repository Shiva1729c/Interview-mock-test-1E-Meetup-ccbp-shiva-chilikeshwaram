import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
`

export const ResponsiveContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeImage = styled.img`
  width: 50%;
`

export const HomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.name ? '60px' : '36px')};
  font-weight: ${props => (props.name ? '600' : '500')};
  color: ${props => (props.name ? '#2563eb' : '#334155')};
  margin-bottom: 10px;
`

export const HomeDescription = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.topic ? '36px' : '16px')};
  font-weight: ${props => (props.topic ? '500' : '400')};
  color: ${props => (props.topic ? '#334155' : '#64748b')};
  margin-top: 10px;
`
export const RegisterButton = styled.button`
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
  margin-bottom: 30px;
`
