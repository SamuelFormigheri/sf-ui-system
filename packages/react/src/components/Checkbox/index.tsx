import { ComponentProps } from 'react'
import { IconCheck } from '../Icons/Check'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function Checkbox(props: ICheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <IconCheck stroke="#fff" strokeWidth={"2px"} />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

export interface ICheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

Checkbox.displayName = 'Checkbox'
