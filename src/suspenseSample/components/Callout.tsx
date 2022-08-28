import { FC, ReactNode } from "react"

type CalloutProps = {
  children: ReactNode
}
export const Callout: FC<CalloutProps> = ({children}) => {
  return (
    <div className="callout">{children}</div>
  )
}
