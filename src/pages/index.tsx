import { ReactElement } from 'react';
import SideBar from '@ui/SideBar';
import Head from 'next/head';
import { useStateContext } from 'src/context/stateContext';
import { Layout } from 'src/layouts';

import Orders from '../components/orders';
import Users from '../components/users';

import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { table } = useStateContext();

  function CurrentTable(props: string) {
    switch (props) {
      case '':
        return <Users />;
      case 'Users':
        return <Users />;
      case 'Orders':
        return <Orders />;
      default:
        return (
          <h1 className="flex h-full items-center justify-center">No table</h1>
        );
    }
  }
  return (
    <>
      <Head>
        <title>Door Dash Logistics</title>
        <meta content="logistics App" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="container mx-auto flex h-full bg-gray-50">
        <div className="w-[35%]">
          <SideBar />
        </div>
        <div className="w-full">{CurrentTable(table)}</div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;
