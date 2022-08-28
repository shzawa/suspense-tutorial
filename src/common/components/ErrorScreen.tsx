import { FC } from "react"

type ErrorScreenProps = {
  error: Error
}
// 描画前にエラーオブジェクトの内容をチェックもしくは加工できる
export const ErrorScreen: FC<ErrorScreenProps> = ({ error }) => {
  return (
    <div className="error">
      <h3>We are sorry... something went wrong.</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  )
}
