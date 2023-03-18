import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container flex items-center justify-center flex-col mx-auto">
          <h1 className="text-9xl mb-12 p-2 rounded bg-gradient-to-r from-pink-700 font-display font-bold">404</h1>
          <p className="text-xl font-medium">Page not found. <Link to="/" className="underline hover:no-underline">Go home</Link></p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
