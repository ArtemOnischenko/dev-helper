import { Layout } from 'antd'
import { Outlet } from 'react-router'
import { Content } from 'antd/es/layout/layout'
import AppHeader from './components/AppHeader/AppHeader';

function App() {

  return (
    <Layout className='h-full'>
      <AppHeader />
      <Content className='pt-4 pb-4 px-10 flex justify-center'>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default App
