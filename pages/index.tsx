import { ReactElement } from 'react'
import MainLayout from '../components/layout/MainLayout'
import { NextPageWithLayout } from '../types/layout';

const Home: NextPageWithLayout = () => {
  return (
    <div>

    </div>
  )
}

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}