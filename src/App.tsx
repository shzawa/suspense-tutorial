import { ErrorBoundary } from './common/components/ErrorBoundary';
import { ErrorScreen } from './common/components/ErrorScreen';
import { SiteLayout } from './layouts/SiteLayout';
import { BreakThings } from './suspenseSample/components/BreakThings';
import { Callout } from './suspenseSample/components/Callout';

const App = () => (
  <SiteLayout menu={
    <ErrorBoundary fallback={ErrorScreen}>
      <p>Site Layout Menu</p>
    </ErrorBoundary>
  }>
    <ErrorBoundary fallback={ErrorScreen}>
      <Callout>
        Callout
      </Callout>
    </ErrorBoundary>
    <ErrorBoundary fallback={ErrorScreen}>
      <h1>Contents</h1>
      <p>This is the main part of the example layout.</p>
      <BreakThings />
    </ErrorBoundary>
  </SiteLayout>
)

export default App;
