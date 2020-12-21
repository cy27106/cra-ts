import React from 'react'

interface Props {
  message: string
}

const App: React.FC<Props> = props => {
  return (
      <div>{ props.message } </div>
  )
}

export default App
