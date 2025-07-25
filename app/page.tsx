import styles from "./page.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <Image
          className={styles.TopIcon}
          src="/top-icon.svg"
          alt=""
          width={85.33}
          height={32}
        />
        <Image
          className={styles.Segment}
          src="/Segment.png"
          alt=""
          width={37.28}
          height={35}
        />
      </section>
      <section className={styles.head}>
        <div className={styles.container}>
          <Image
            className={styles.ViewImg}
            src="/view-img.png"
            alt=""
            width={1440}
            height={160}
          />
          <Image
            className={styles.TopImg}
            src="/top-img.png"
            alt=""
            width={126}
            height={126}
          />
        </div>
        <div className={styles.HeadText}>
          <h1 className={styles.HeadTitle}>Yamamoto Reina</h1>
          <p className={styles.HeadItem}>
            元調理師のエンジニア
            <br />
            好きな食べ物はネイルと料理
            <br />
            自分で好きなネイルをしたりアニメ料理の
            <br />
            再現をするのが得意です！
            <br />
          </p>
        </div>
      </section>
    </>
  )
}
