import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { Header } from "../features"
import { CenterPanel } from "../features/CenterPanel"
import { LeftPanel } from "../features/LeftPanel/LeftPanel"
import { RightPanel } from "../features/RightPanel"
import { Template } from "../template"

export async function getServerSideProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  const postsData = await posts.json()

  return {
    props: {
      postsData,
    },
  }
}

type IHome = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Home({ postsData }: IHome) {
  return (
    <Template>
      <Head>
        <title>Infinitum | Home</title>
      </Head>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-body-grid gap-x-14 mt-9">
        <LeftPanel />
        <CenterPanel data={postsData} />
        <RightPanel />
      </section>
    </Template>
  )
}
