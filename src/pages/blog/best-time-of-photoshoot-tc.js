import React from 'react';
import * as styles from './best-time-of-photoshoot.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const BestTimeOfPhotoshootPageTC = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'攝影小貼士'}
              title={'6 到 12 個月 BB 影相嘅黃金時機'}
              image={toOptimizedImage('/bloghero.jpg')}
              alt={'寶寶寫真'}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  其實想影到 BB 最精靈可愛嘅一面，係有科學根據㗎！等我哋同大家分享下專家建議嘅時間表、睡眠貼士同朝早嘅準備功夫，幫各位 Daddy Mommy 影輯最難忘嘅靚相啦！
                </p>
                <p className={styles.blogParagraph}>
                  相信每個父母都最想影到 BB 笑得好燦爛、眼仔碌碌嗰個樣。其實一張好嘅相，除咗要有好嘅攝影師同靚景之外，準備功夫更加重要！一切就由拍攝前一晚嘅瞓覺時間開始講起。
                </p>
                <p className={styles.blogParagraph}>
                  6 到 12 個月大嘅 BB 發育得好快，性格開始出嚟，笑容又多，對身邊事物充滿好奇，影相就最適合不過。不過呢個階段嘅 BB 對瞓覺、肚餓同周圍環境都好敏感。只要掌握到啱嘅時機，就可以避免 BB 扭計喊住影，反而可以影到一輯你會珍藏一世嘅靚相！
                </p>
                <p className={styles.blogParagraph}>
                  喺 Kids U Baby Photography Studio，我哋影過幾百個呢個年紀嘅 BB，所以我哋好清楚幾時係影相嘅「Magic Hour」— 同埋點解會係咁。
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  第一步 — 拍攝前一晚
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>睡眠：影靚相嘅基礎</strong>
                  <br />
                  美國兒科學會建議 6 至 12 個月大嘅 BB 每日要瞓 12 到 16 個鐘（包埋午睡）。最好夜晚可以連續瞓到 10 到 12 個鐘。
                </p>
                <p className={styles.blogParagraph}>
                  <strong>建議瞓覺時間：夜晚 7:00。</strong> 如果約咗朝早 11 點影相，最好前一晚 7:00–7:30 就俾 BB 瞓覺。咁樣 BB 就有足夠 10–12 個鐘嘅睡眠去發育大腦同身體，第二朝 7:00–8:00 自然醒嗰陣，就會心情靚靚又精神奕奕啦！
                </p>
                <p className={styles.blogParagraph}>
                  千祈唔好諗住俾 BB 遲啲瞓佢就會遲啲起身啊！科學話俾我哋知，BB 越遲瞓反而越容易早醒，睡眠質素仲會差啲，第二日可能會扭計添。所以早睡早起身體好，BB 心情都會好啲㗎。
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  第二步 — 拍攝當日朝早
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>餵奶：關鍵嘅 70% 法則</strong>
                  <br />
                  BB 一醒，大家通常都會想餵飽佢先，但為咗影相效果，我哋有個小貼士俾大家。
                </p>
                <p className={styles.blogParagraph}>
                  建議俾 BB 食平時份量嘅 70% 就夠喇 — 既可以醫肚同保持血糖穩定，又唔會因為太飽而變得眼瞓呆滯。如果係餵人奶嘅話，每邊餵嘅時間可以短少少；食奶粉嘅話，就沖少四分之一左右啦。
                </p>
                <p className={styles.blogParagraph}>
                  點解唔好食全飽？因為 BB 食得太飽通常會好想瞓覺，「飯氣攻心」嘛。我哋想影到 BB 精靈活潑嘅眼神，所以食七成飽就最完美：血糖水平啱啱好，有足夠能量同好心情，又可以保持警覺同攝影師互動。
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>
                  第三步 — 到達前 1 小時
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>準備出門：最後一小時 Checklist</strong>
                </p>
                <ul
                  style={{
                    listStyle: 'disc',
                    paddingLeft: '20px',
                    marginBottom: '48px',
                  }}
                >
                  <li>出門前 30 分鐘換條乾淨片片</li>
                  <li>幫 BB 著件舒服鬆身嘅衫出門</li>
                  <li>帶齊奶粉/奶泵同 BB 最鍾意嘅零食</li>
                  <li>帶 1-2 件安撫玩具或者私家毛巾仔</li>
                  <li>搭車過嚟嗰陣盡量保持安靜平穩</li>
                  <li>提早 10 分鐘到，等 BB 適應下環境</li>
                  <li>記得帶多套衫俾 BB 同自己替換</li>
                </ul>

                <h2 className={styles.blogSubHeader}>
                  科學法則：點解朝早 11 點係黃金時間？
                </h2>
                <p className={styles.blogParagraph}>
                  呢個唔係靠估，係有根據㗎。當 BB 喺朝早 7:30–8:00 左右醒，大約 10:45 嚟到 Studio 準備 11:00 影相，佢哋剛好醒咗 3 個鐘。呢個時候 BB 嘅皮質醇（警覺性）最高，血糖又穩定，係最精靈、最肯同人玩嘅時間！
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
                  常見問題 FAQ
                </h2>
                <p className={styles.blogParagraph}>
                  <strong>如果我個 BB 平時 8 點後先醒點算？</strong>
                  <br />
                  絕對無問題！只要將拍攝時間順延到 BB 自然醒之後嘅 3 個鐘就得。Book 嗰陣話俾我哋知 BB 平時幾點醒，我哋會幫你安排。
                </p>
                <p className={styles.blogParagraph}>
                  <strong>
                    如果 BB 已經開始加固，使唔使帶嘢食？
                  </strong>
                  <br />
                  帶埋就最好喇！如果你 BB 已經加固，出門前可以俾佢食少少平時食開嘅早餐（大約七成飽），再帶一小盒佢最鍾意嘅零食，拍攝中途可以食少少開心下。
                </p>
                <p className={styles.blogParagraph}>
                  <strong>6–12 個月大嘅 BB 影相要搞幾耐？</strong>
                  <br />
                  呢個階段嘅拍攝通常預 90 分鐘。呢段時間足夠我哋慢慢換衫、有需要嗰陣補下奶，同埋捕捉大量得意瞬間，趕得切喺 BB 攰同扭計瞓覺之前完成。
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BestTimeOfPhotoshootPageTC;