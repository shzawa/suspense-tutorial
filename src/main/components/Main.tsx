import { ErrorBoundary } from "../../common/components/ErrorBoundary"
import { SiteLayout } from "../../common/layouts/SiteLayout"
import { BreakThings } from "../../suspenseSample/components/BreakThings"
import { Callout } from "./Callout"
import { Menu } from "./Menu"

export const Main = () => {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Welcome to the site.</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page.</p>
        <BreakThings />
      </ErrorBoundary>
    </SiteLayout>
  )
}

export default Main
