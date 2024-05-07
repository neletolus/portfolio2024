import AboutMeTitleArea from "./AboutMeTitleArea.tsx";
import profile from "./images/profile.jpg"
import AboutMeInfo from "./AboutMeInfo.tsx";
import {logotype} from "../../logotype.ts";

export default function AboutMeContents() {
    return (<div className="contents">
        <AboutMeTitleArea></AboutMeTitleArea>
        <div className="aboutMeContainer__databody databody">
            <div className="aboutMeContainer__databody__top">
                <div className="aboutMeContainer__databody__top__image">
                    <img src={profile} alt="プロフィール画像"/>
                </div>
                <div className="aboutMeContainer__databody__top__profile">
                    <h2>須田耀平は、</h2>
                    <p>
                        群馬県出身、東京在住のエンジニアです。<br/>
                        WebフロントエンドとRPAツール開発（Windows向けアプリ）を経験しています。<br/>
                        WebGLとゼロ年代ロックと犬が好きです。
                    </p>
                </div>
            </div>
            <div className="aboutMeContainer__databody__middle">
                <h2>経歴：</h2>
                <AboutMeInfo title={"株式会社PKSHA Associates"} titleUrl={"https://asc.pkshatech.com/"}
                             date={"2022/1/1 ~ 2024/5/31"}
                             linkUrl={"https://prtimes.jp/main/html/rd/p/000000003.000110483.html"}
                             linkText={"UI/UXアップデートプロジェクト"}
                             description={<>RPAツール「ロボオペレータ」の開発に従事していました。<br/>いわゆるプロダクトエンジニア的な立ち位置で要件定義~テストまでの基本的な開発フローの他、<br/>UXリサーチや効果音作成、カスタマーサポート支援なども行っていました。</>}
                             icons={[logotype.AWS, logotype.KOTLIN, logotype.SELENIUM, logotype.NODEJS]}/>
                <AboutMeInfo title={"ディップ株式会社"} titleUrl={"https://www.dip-net.co.jp/"}
                             date={"2020/04/01 ~ 2021/12/31"}
                             linkUrl={null}
                             linkText={""}
                             description={<>
                                 新卒入社し、自社サービスのフロントエンド開発を担当していました。<br/>
                                 <ul>
                                     <li>UI開発</li>
                                     <li>Adobe Targetを用いたABテスト実装</li>
                                     <li>WebPack導入</li>
                                     <li>UX関係の社内Wikiの立ち上げ</li>
                                     <li>ちょっとしたデザイン作成</li>
                                 </ul>
                                 など、内外問わず色々やっていました。
                                 <br/>
                                 <br/>
                                 在籍中に参加したブログなど：
                                 <ul>
                                     <li>
                                         <a
                                             href="https://developer.dip-net.co.jp/entry/2021/06/11/20%E5%8D%92%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%8C%E3%83%87%E3%82%A3%E3%83%83%E3%83%97%E3%81%A7%E3%81%AE1%E5%B9%B4"
                                             target="_blank">20卒振り返り記事</a>
                                     </li>
                                     <li><a href="https://developer.dip-net.co.jp/entry/%E3%82%AC%E3%82%BF%E3%81%A4%E3%81%8D%E3%81%AE%E3%81%AA%E3%81%84%E9%AB%98%E3%81%95%E5%8F%AF%E5%A4%89%E3%81%AE%E3%82%AB%E3%83%AB%E3%83%BC%E3%82%BB%E3%83%AB%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC"
                                        target="_blank">
                                         複雑なカルーセルスライダーの作成法
                                     </a></li>
                                     <li><a href="https://dippeople.dip-net.jp/13465/" target="_blank">
                                         CTO x 20卒エンジニア対談
                                     </a></li>
                                 </ul>
                             </>}
                             icons={[logotype.HTML, logotype.CSS, logotype.JAVASCRIPT]}/>
                <AboutMeInfo title={"合同会社NEWSKOOL"} titleUrl={"https://newskool.jp/"}
                             date={"2019/07/01 ~ 2020/01/30"}
                             linkUrl={null}
                             linkText={""}
                             description={<>
                                 同社主催の<a href="https://qetic.jp/music/bornnow-180710/290585/" target="_blank">Bornnow 2018</a>にサポートのVJとして参加した縁で、<br />
                                 インターンのフロントエンドエンジニアとして参加しました。<br />
                                 <br />
                                 主に下記案件のマップアプリやタイムテーブル周辺を担当しました。<br />
                                 <a href="https://newskool.jp/casestudy/siw2019/" target="_blank">SIW2019紹介</a>
                             </>}
                             icons={[logotype.WORDPRESS, logotype.HTML, logotype.CSS, logotype.JAVASCRIPT]}/>
                <AboutMeInfo title={"株式会社CRANE"} titleUrl={"https://crane-inc.io/"}
                             date={"2018/09/01 ~ 2020/02/28"}
                             linkUrl={"https://crane-inc.io/posts/interview_suda"}
                             linkText={"卒業時のインタビュー記事"}
                             description={<>
                                 アルバイトでWebコーダ、フロントエンドエンジニアとして参加しました。<br />
                                Wordpress案件やECショップの立ち上げ、軽い予約システムの開発など対応していました。
                             </>}
                             icons={[logotype.WORDPRESS, logotype.HTML, logotype.CSS, logotype.JAVASCRIPT]}/>
            </div>
        </div>
    </div>)
}