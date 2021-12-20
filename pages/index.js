import Head from 'next/head'

import { Card, Container, Filter } from 'components'

import { useGetNftItems } from 'hooks'

import styles from 'styles/screens/Home.module.scss'

export default function Home() {
  const { loading, error, data } = useGetNftItems()

  if (error) return <span>Unexpected error occurred. Please try again </span>
  return (
    <div>
      <Head>
        <title>NFT Marketplace | Token Suite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/token-logo.svg" />
      </Head>
      <Container>
        <img
          className={styles.logo}
          src="/token-logo.svg"
          width="152"
          height="94"
        />
        <h1 className={styles.header}>NFT marketplace</h1>
        <Filter />
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className={styles['card-wrapper']}>
            {data?.cardEntities?.map(item => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
