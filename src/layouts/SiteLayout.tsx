type SiteLayoutProps = {
  children: React.ReactNode
  menu: JSX.Element
}
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children, menu = <></> }) => {
  return (
    <div className="site-container">
      <div className="menu">{menu}</div>
      <div className="content">{children}</div>
    </div>
  )
}
