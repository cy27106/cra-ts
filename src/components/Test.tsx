import React, {ReactNode, ReactNodeArray, useState} from 'react'

interface Props {

}
const defaultProps = {}

export interface User {
  name: string,
  [key: string]: string
}

const Test = (props: Props & typeof defaultProps) => {
  const [user, setUser] = useState<User>()


  return (
      <>
        <div>123</div>
        <div>123</div>
      </>
  )
}

Test.defaultProps = defaultProps

export default React.memo(Test)
