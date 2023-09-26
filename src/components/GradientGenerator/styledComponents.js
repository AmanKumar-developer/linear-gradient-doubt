// Style your elements here

import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 950px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const DirectionDescription = styled.p`
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 6px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 450px;
  }
`

export const ColorPickerDescription = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 320px;
`

export const CustomInputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
`

export const GenerateButton = styled.button`
  font-family: 'Roboto';
  background-color: #00c9b7;
  color: #ffffff;
  font-weight: 700;
  max-width: 25px;
  border-radius: 7px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
`
