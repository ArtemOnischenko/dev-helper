import { Button } from 'antd'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Button type="primary">Button</Button>
      </div>
      <Outlet />
    </>
  )
}

export default App
