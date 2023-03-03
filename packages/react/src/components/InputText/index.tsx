import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export const InputText = forwardRef<ElementRef<typeof Input>, IInputTextProps>(
  ({ prefix, ...props }: IInputTextProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

export interface IInputTextProps extends ComponentProps<typeof Input> {
  prefix?: string
}


InputText.displayName = 'TextInput'
