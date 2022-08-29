import { lazy, Suspense, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { ErrorBoundary } from './common/components/ErrorBoundary';
import { Agreement } from './main/components/Agreement';

// agree が true になってからダウンロードさせる
const Main = lazy(() => import('./main/components/Main'))

const App = () => {
  const [agree, setAgree] = useState(false)

  if (!agree) return <Agreement onAgree={() => { setAgree(true) }} />

  return <ErrorBoundary>
    <Suspense fallback={<ClimbingBoxLoader />}>
      <Main />
    </Suspense>
  </ErrorBoundary>
}

export default App;
