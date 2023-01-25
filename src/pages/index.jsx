import Layout from '@/components/Layout/Layout';

export default function Home() {
  return <div className="">Hello !!!</div>;
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout title="Главная" description="Описание главной страницы">
      {page}
    </Layout>
  );
};
