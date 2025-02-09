
import Main from './_Main/page'
import Header from './_shared/Header/page'
import Footer from './_shared/Footer/page'

export default function Home () {
  return (
    <>
      <section>
        <Header />
      </section>
      <main>
        <Main></Main>
      </main>
      <section>
        {/* <Footer /> */}
      </section>
    </>
  )
}
