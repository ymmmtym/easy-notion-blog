import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>About</h2>
      <p>
        SRE エンジニアの{' '}
        <ExtLink href="https://yumenomatayume.net">
          yumenomatayume
        </ExtLink>
        {' '}によるブログです。
      </p>
    </div>
  </div>
)

export default RenderPage
