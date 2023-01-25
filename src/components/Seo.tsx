import Head from 'next/head';
type Props = {
  title: string;
};
export const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{`KoJaem's Exhibition | ${title}`}</title>
    </Head>
  );
}
