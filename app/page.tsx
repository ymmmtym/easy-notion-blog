import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'
import Image from 'next/image'
import ExtLink from '../components/ext-link'
import { NEXT_PUBLIC_URL } from './server-constants'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
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
        <ul>
          <li><ExtLink href="https://github.com/ymmmtym">GitHub</ExtLink></li>
          <li><ExtLink href="https://yumenomatayume.net">Portfolio</ExtLink></li>
          <li><ExtLink href="https://zenn.dev/ymmmtym">Zenn</ExtLink></li>
          <li><ExtLink href="https://scrapbox.io/yumenomatayume">Scrapbox</ExtLink></li>
          <li><ExtLink href="https://blog.yumenomatayume.net">旧個人ブログ</ExtLink></li>
        </ul>
        <h2>🧚 Activity</h2>
        <h3>GitHub</h3>
        <ExtLink href="https://github.com/ymmmtym"><Image src="https://raw.githubusercontent.com/ymmmtym/ymmmtym/main/dist/github-snake.svg" width={880} height={192} alt="GitHub Snake"></Image></ExtLink>
      </div>
    </div>
  </>
)

export default RootPage
