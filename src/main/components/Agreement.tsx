import { FC, MouseEventHandler } from "react"

type AgreementProps = {
  onAgree?: MouseEventHandler<HTMLButtonElement>
}

export const Agreement: FC<AgreementProps> = ({ onAgree = () => void 0}) => {
  return (
    <div>
      <p>Terms...</p>
      <p>These are the terms and stuff. Do you agree?</p>
      <button onClick={onAgree}>I agree</button>
    </div>
  )
}
