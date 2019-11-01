import React, { FunctionComponent } from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Hoge: FunctionComponent = () => {
  return <div css={css({ color: 'red' })}>hogeeeee</div>
}

const StyledDiv = styled.div({
  color: 'blue'
})

const Fuga: FunctionComponent = () => {
  return <StyledDiv>fugaaaaa</StyledDiv>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Hoge />
      <Fuga />
    </div>
  )
}

export default App
