import React from 'react';
import * as styles from './best-time-of-photoshoot.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const BestTimeOfPhotoshootPageSC = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'摄影干货'}
              title={'宝妈必看！6-12个月宝宝拍写真的黄金时间表 ⏰✨'}
              image={toOptimizedImage('/bloghero.jpg')}
              alt={'宝宝写真'}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  想要捕捉宝宝最耀眼的瞬间？📸 其实是有科学依据的！这篇超全「拍摄时间管理」攻略，教你利用睡眠和早晨的魔法，轻松拍出大片！💖 建议收藏！
                </p>
                <p className={styles.blogParagraph}>
                  集美们！是不是都想拍出那种宝宝眼睛亮晶晶、笑得咯咯响的照片？😍 其实除了摄影师和布景，最重要的是【时机】！这篇干货告诉你，怎么从前一天晚上就开始准备！📝
                </p>
                <p className={styles.blogParagraph}>
                  6-12 个月的宝宝可是表情包大户！👶 这个阶段他们好奇心爆棚，互动感超强。但是！这个时期的宝宝对睡眠和饥饿也超级敏感。选对时间，就是天使宝宝；选错时间，可能就是泪奔现场... 😭
                </p>
                <p className={styles.blogParagraph}>
                  我们在 Kids U Baby 拍了几百个宝宝，总结出了这套【黄金法则】，亲测有效！👇
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  🌙 Step 1 — 前一天晚上的秘密
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>💤 睡眠是王道！</strong>
                  <br />
                  美国儿科学会建议 6-12 个月的宝宝每天需要 12-16 小时睡眠。拍摄前一晚，最好能保证 10-12 小时的整觉。
                </p>
                <p className={styles.blogParagraph}>
                  <strong>⏰ 最佳入睡时间：晚上 7:00</strong>
                  <br />
                  如果是约了第二天上午 11 点拍摄，前一晚 7:00-7:30 就让宝宝睡觉吧！这样第二天早上 7-8 点自然醒，精神状态简直不要太好！✨
                </p>
                <p className={styles.blogParagraph}>
                  千万别想着晚点睡能晚点起！❌ 过度疲劳的宝宝反而容易早醒，而且会有起床气。早睡早起才是硬道理！
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  ☀️ Step 2 — 拍摄当天的早晨
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>🍼 喂奶小撇步：70% 法则</strong>
                  <br />
                  重点来了！宝宝醒了别喂太饱！我们建议只喂平时早晨奶量的 **70%**。
                </p>
                <p className={styles.blogParagraph}>
                  为什么呢？🤔 因为吃太饱容易犯困（饭气攻心嘛），我们要的是眼睛亮亮、精神饱满的宝宝，不是睡眼惺忪的小可爱。70% 的饱腹感刚刚好，血糖稳定，心情靓靓，又不至于想睡觉。👍
                </p>
                <p className={styles.blogParagraph}>
                  对于母乳宝宝，每边喂的时间短一点点；奶粉宝宝，就少冲 1/4 左右。
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  🚗 Step 3 — 到达前 1 小时
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>🎒 妈妈包里装什么？Checklist 拿走不谢！</strong>
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    paddingLeft: '0',
                    marginBottom: '48px',
                  }}
                >
                  <li>✅ 出门前 30 分钟换个干爽的尿布 🚼</li>
                  <li>✅ 穿宽松舒适的衣服出门，方便在车上休息 👕</li>
                  <li>✅ 带好奶粉/辅食，还有宝宝最爱的零食（大招！）🍪</li>
                  <li>✅ 1-2 件安抚玩具或小被子，陌生环境也不怕 🧸</li>
                  <li>✅ 车上保持安静，让宝宝蓄力 🤫</li>
                  <li>✅ 提前 10 分钟到，让宝宝熟悉一下环境 🏠</li>
                  <li>✅ 记得带备用衣服，以防万一！👔</li>
                </ul>

                <h2 className={styles.blogSubHeader}>
                  🔬 为什么 11 AM 是 YYDS？
                </h2>
                <p className={styles.blogParagraph}>
                  这可是有科学依据的！📚 宝宝 7:30-8:00 醒，到了 11:00 刚好醒了 3 个小时。这时候皮质醇（警觉性）最高，血糖稳定，互动欲最强！简直就是出片的黄金窗口期！🌟
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img
                    src={toOptimizedImage('/collections/collection1.jpg')}
                    alt={'newborn baby photoshoot'}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={toOptimizedImage('/collections/collection2.jpg')}
                    alt={'baby smiling photoshoot'}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>
                  💬 宝妈常见 Q&A
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>Q: 我家宝宝平时 8 点以后才醒怎么办？</strong>
                  <br />
                  A: 没问题！👌 只要把拍摄时间往后顺延，保证在自然醒后 3 小时左右拍摄就 OK 啦！预订时记得告诉我们哦。
                </p>
                <p className={styles.blogParagraph}>
                  <strong>
                    Q: 宝宝加辅食了要带吃的吗？
                  </strong>
                  <br />
                  A: 必须带！🍱 出门前吃 7 分饱，带点平时爱吃的零食，中场休息补充能量，心情瞬间变好！
                </p>
                <p className={styles.blogParagraph}>
                  <strong>Q: 6-12 个月拍多久合适？</strong>
                  <br />
                  A: 一般 90 分钟最合适！⏳ 趁着宝宝没电（犯困）之前，换造型、喝奶、互动，节奏刚刚好！
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BestTimeOfPhotoshootPageSC;