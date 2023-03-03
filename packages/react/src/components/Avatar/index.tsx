import { ComponentProps } from 'react'
import { IconUser } from '../Icons/User'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export function Avatar({
  size,
  color = "gray",
  ...props
}: IAvatarProps) {
  return (
    <AvatarContainer color={color}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600} color={color}>
        <IconUser />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {
  size: number | string;
  /**
   * @default gray
   */
  color?: "green" | "blue" | "cyan" | "purple" | "yellow" | "pink" | "red" | "gray" | "white" | "black";
}

Avatar.displayName = 'Avatar'
