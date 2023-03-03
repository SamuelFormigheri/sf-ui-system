import { Label, MultiStepContainer, Step, Steps } from './styles'

export function MultiStep({
  size,
  currentStep = 1,
  label = "Passo"
}: IMultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        {label} {currentStep} / {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

export interface IMultiStepProps {
  size: number;
  currentStep?: number;
  /**
   * @default Passo
   */
  label?: string;
}

MultiStep.displayName = 'MultiStep'
