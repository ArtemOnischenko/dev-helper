import { Layout } from 'antd'
import './App.css'
import { Outlet } from 'react-router'
import { Content, Header } from 'antd/es/layout/layout'

function App() {

  return (
    <Layout className='h-full'>
      <Header>
        <div className="logo" />

      </Header>
      <Content className='pt-4 pb-4 px-10'>
        <Outlet />
      </Content>
    </Layout>
    
  )
}

export default App
