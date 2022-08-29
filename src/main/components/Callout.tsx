import { FC, ReactNode } from "react"
import { ErrorBoundary } from "../../common/components/ErrorBoundary"

type CalloutProps = {
  children: ReactNode
}
export const Callout: FC<CalloutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="callout">{children}</div>
    </ErrorBoundary>
  )
}
