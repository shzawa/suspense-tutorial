// 非同期処理を、SuspenseコンポーネントやErrorBoundaryコンポーネントと協調させてくれる君
const createResource = <T>(pending: Promise<T>) => {
  let error: Error
  let response: T
  pending
    .then(r => { response = r })
    .catch(e => { error = e })
  return {
    // 非同期処理の返却値を参照するだけの処理をメソッドとして切り出さないと、
    // コンポーネントが再レンダリングされた時に、pending()ごと再実行されてしまう
    read() {
      if (error) throw error
      if (response) return response
      throw pending // Promise を throw する: 保留中を示す
    }
  }
}
export default createResource
