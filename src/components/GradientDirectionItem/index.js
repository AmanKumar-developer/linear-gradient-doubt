// Write your code here

import {GradientListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    GradientDirectionDetails,
    isActive,
    onClickGradientDirectionItem,
  } = props
  const {displayText, value} = GradientDirectionDetails

  const onChangeGradientDirection = () => {
    onClickGradientDirectionItem(value)
  }

  return (
    <GradientListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        className="direction-button"
        onClick={onChangeGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </GradientListItem>
  )
}

export default GradientDirectionItem
