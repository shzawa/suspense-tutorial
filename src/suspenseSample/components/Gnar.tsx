import createResource from "../suspenseDataSources/createResource"

type ResourceType = { gnar: string }

const threeSecondsToGnar = new Promise<ResourceType>((resolve, reject) => {
  // setTimeout(() => resolve({ gnar: 'gnarly!' }), 3000)
  window.confirm('はいを押すとGnarコンポーネントを描画, いいえを押すとError内容を描画')
    ? resolve({ gnar: 'gnarly!' })
    : reject(new Error('hogehoge'))
})
const resources = createResource(threeSecondsToGnar)

const Gnar = () => {
  const result = resources.read()
  return <h1>status: {result.gnar}</h1>
}
export default Gnar
