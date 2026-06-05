import { Alert as ChakraAlert } from "@chakra-ui/react"
import * as React from "react"

export interface AlertProps extends Omit<ChakraAlert.RootProps, "title"> {
  title?: React.ReactNode
  icon?: React.ReactElement
  closable?: boolean
  onClose?: () => void
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    const { title, children, icon, closable, onClose, ...rest } = props
    return (
      <ChakraAlert.Root ref={ref} {...rest}>
        {icon || <ChakraAlert.Indicator />}
        <ChakraAlert.Content>
          {title && <ChakraAlert.Title>{title}</ChakraAlert.Title>}
          <ChakraAlert.Description>{children}</ChakraAlert.Description>
        </ChakraAlert.Content>
      </ChakraAlert.Root>
    )
  },
)
