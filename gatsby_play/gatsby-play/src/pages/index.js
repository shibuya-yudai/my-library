import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "twin.macro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div tw='py-10'>
      <div tw="max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-gray-700 max-h-screen shadow-2xl flex-row rounded relative">
        <div tw="p-2 bg-gray-600 text-blue-900 rounded-t">
          <h5 tw="text-white text-2xl capitalize">About HotSymbol</h5>
        </div>
        <div tw="p-2 w-full h-full overflow-y-auto text-gray-100">
          <p tw="text-justify py-2">
            HotSymbol is a simple and easy online tool to copy <a tw="text-blue-300 hover:text-gray-400" href="https://www.hotsymbol.com/symbols" title="copy symbol">symbol</a>, text <a tw="text-blue-300 hover:text-gray-400" href="https://www.hotsymbol.com/emojis" title="copy emoji">emoji</a> characters, and signs to Facebook posts, Instagram bio, blog posts, WhatsApp, Snapchat chat and comments, nicknames in games, or wherever else - these symbols work just about everywhere.
          </p>
          <p tw="text-justify py-2">
            We are growing this website timely. and adding more stunning features to make the web and mobile easy keeping care of the whole range of audiences. when we build the HotSymbol website we take care of many tiny details such as website User experience, Website performance, speed, design, etc. This is the reason you will find the HotSymbol website faster and feature reach than any other website available on the internet.
          </p>
        </div>
      </div>
    </div>
    <h1 tw="text-center">Hi 悠大ああ</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
