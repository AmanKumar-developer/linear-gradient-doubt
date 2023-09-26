import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  GradientDirectionList,
  ColorPickerDescription,
  ColorPickerContainer,
  CustomInputColorContainer,
  ColorValue,
  GenerateButton,
  CustomInput,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirectionItem: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${
      (gradientDirectionsList[0].value, '#8ae323', '#014f7b')
    }`,
  }

  onGenerate = () => {
    const {
      toColorInput,
      fromColorInput,
      activeGradientDirectionItem,
    } = this.state

    this.setState({
      gradientValue: `to ${activeGradientDirectionItem},${fromColorInput},${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGradientDirectionItem = direction => {
    this.setState({activeGradientDirectionItem: direction})
  }

  render() {
    const {
      activeGradientDirectionItem,
      toColorInput,
      fromColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                GradientDirectionDetails={eachDirection}
                onClickGradientDirectionItem={this.onClickGradientDirectionItem}
                isActive={activeGradientDirectionItem === eachDirection.value}
              />
            ))}
          </GradientDirectionList>
          <ColorPickerDescription>Pick the Colors</ColorPickerDescription>
          <ColorPickerContainer>
            <CustomInputColorContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeFromColor}
                value={fromColorInput}
                type="color"
              />
            </CustomInputColorContainer>
            <CustomInputColorContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                onChange={this.onChangeToColor}
                value={toColorInput}
                type="color"
              />
            </CustomInputColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
