import { lazy, Suspense, useState } from 'react';
import { ClimbingBoxLoader, GridLoader } from 'react-spinners';
import { ErrorBoundary } from './common/components/ErrorBoundary';
import { Agreement } from './main/components/Agreement';

// agree が true になってからダウンロードさせる
const Main = lazy(() => import('./main/components/Main'))
const Gnar = lazy(() => import('./suspenseSample/components/Gnar'))

const App = () => {
  const [agree, setAgree] = useState(false)

  if (!agree) return <Agreement onAgree={() => { setAgree(true) }} />

  return <>
    <Suspense fallback={<ClimbingBoxLoader />}>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      </Suspense>
    <Suspense fallback={<GridLoader />}>
      <ErrorBoundary>
        <Gnar />
      </ErrorBoundary>
    </Suspense>
  </>
}

export default App;
