import { ReactNode } from "react"

type SiteLayoutProps = {
  children: ReactNode
  menu?: ReactNode
}
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children, menu = <></> }) => {
  return (
    <div className="site-container">
      <div className="menu">{menu}</div>
      <div className="content">{children}</div>
    </div>
  )
}
