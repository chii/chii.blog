import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
    const { title, children } = props
    const siteTitle = "Never forget the beginner's humility"

    return (
        <div className="page">
          <Head>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css" integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ==" crossorigin="anonymous" />
          </Head>

          <header>
            <h1 className="site-title">
              <Link href="/">
                <a>{siteTitle}</a>
              </Link>
            </h1>
          </header>

          <main>
            {title ? <h1 className="page-title">{title}</h1> : ``}
            <div className="page-main">
              {children}
            </div>
          </main>

          <footer>
            &copy; {siteTitle}
          </footer>

          <style jsx>{`
            .page {
              padding: 2em 1em;
              max-width: 75%;
              margin-left: 5%;
              margin-right: auto;
            }
            header {
              margin: 0 0 4em;
            }
            .site-title a {
              color: inherit;
              text-decoration: none;
            }
            footer {
              margin-top: 4em;
              padding-top: 2em;
              padding-bottom: 2em;
            }
        `}</style>

          <style global jsx>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: 'Noto Sans JP', -apple-system, "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
              color: #222;
            }

            img,
            iframe {
              max-width: 100%;
            }

            h1, h2, h3, h4, h5, h6 {
              font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue", "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
            }

            * {
              box-sizing: border-box;
            }
        `}</style>
        </div>
    )
}

export default Layout
