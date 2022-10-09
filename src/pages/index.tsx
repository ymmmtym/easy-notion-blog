import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'
import { NEXT_PUBLIC_URL } from '../lib/notion/server-constants'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>📣 About（このサイトについて）</h2>
      <p>
        SRE エンジニアである{' '}
        <ExtLink href="https://yumenomatayume.net">
          yumenomatayume
        </ExtLink>
        {' '}が運営する個人ブログです。<br />
        エンジニア向けの記事が多めです。
      </p>
      <p>
        ブログの RSS フィードは <code>{NEXT_PUBLIC_URL}/feed</code> を RSS リーダーにご登録ください。
      </p>
      <h2>🔗 Links</h2>
      <p>
        <ul>
          <li><ExtLink href="https://github.com/ymmmtym">GitHub</ExtLink></li>
          <li><ExtLink href="https://yumenomatayume.net">Portfolio</ExtLink></li>
          <li><ExtLink href="https://zenn.dev/ymmmtym">Zenn</ExtLink></li>
          <li><ExtLink href="https://scrapbox.io/yumenomatayume">Scrapbox</ExtLink></li>
          <li><ExtLink href="https://blog.yumenomatayume.net">旧個人ブログ</ExtLink></li>
        </ul>
      </p>
    </div>
  </div>
)

export default RenderPage
