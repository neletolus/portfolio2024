import WorkTitleArea from "./WorkTitleArea.tsx";
import WorkInfo from "./WorkInfo.tsx";
import {logotype} from "../../logotype.ts";

export default function WorkContents() {
    return (<div className="contents">
        <WorkTitleArea></WorkTitleArea>
        <div className="workContainer__databody databody">
            <details open>
                <summary>
                    <h2>個人事業</h2>
                </summary>
                <WorkInfo title={"サービスのプロト開発"} date={"2024/4~"} contract={"直接契約"}
                          linkUrl={"https://note.com/libproc/n/n1c61ebc23d25"}
                          linkText={"Next.jsとSupabaseで求人マッチングアプリを作る①～ユーザ認証～"}
                          description={<>ブログ作成支援の一環でマッチングアプリのプロトタイプ開発に携わっています。</>}
                          icons={[logotype.NEXTJS, logotype.SUPABASE, logotype.VERCEL]}
                />
                <WorkInfo title={"技術ブログ作成支援"} date={"2023/11 ~ 2024/3"} contract={"直接契約"}
                          linkUrl={"https://note.com/libproc/n/n37959203cc65"}
                          linkText={"Next.jsとSupabaseで認証つきチャットアプリを作成する（SNS風UI）"}
                          description={<>技術ブログにおけるひな形の実装、記事の草稿作成等に携わっています。</>}
                          icons={[logotype.NEXTJS, logotype.SUPABASE, logotype.VERCEL]}
                />
                <WorkInfo title={"LP作成"} date={"2023/3"} contract={"ランサーズ経由"}
                          linkUrl={null}
                          linkText={""}
                          description={<><span
                                       className="warn">※現在はサイト非公開</span><br/>クリニックの採用LPをデザイン～コーディングまで一括で対応しました。</>}
                          icons={[logotype.HTML, logotype.CSS, logotype.JAVASCRIPT]}
                />
                <WorkInfo title={"サイトのM&A売却"} date={"2021"} contract={"M&A"}
                          linkUrl={"https://seiza-uranai.jp/"}
                          linkText={"星座占い比較サイト"}
                          description={<>Google Apps
                                       Scriptを利用し、半自動投稿のブログを作成し、<br/>1ヵ月後に企業に売却しました。</>}
                          icons={[logotype.WORDPRESS, logotype.GAS]}
                />
            </details>
            <details>
                <summary>
                    <h2>趣味の成果物</h2>
                </summary>
                <WorkInfo title={"GLTFビュワー"} date={"2024"} contract={null}
                          linkUrl={"https://my-threejs-gltf-viewer.vercel.app/"}
                          linkText={"ホスト先のURL"}
                          description={<>GLTFのモデルを表示できるやつです。<br />GLBになってなくてもGLTFとテクスチャが入ったフォルダを投げればまとめて表示してくれるようにしています。</>}
                          icons={[logotype.VERCEL, logotype.THREE]}
                />
                <WorkInfo title={"サイトデザイン作成"} date={"2023/3"} contract={null}
                          linkUrl={"https://www.figma.com/file/8jkfXLp0d94P40hk3aegnV/cafe-mellow?type=design&node-id=0-1&mode=design"}
                          linkText={"FigmaのURL"}
                          description={<>FigmaとAffinity Photo、Affinity Designerでデザインの勉強成果として作成しました。</>}
                          icons={[logotype.FIGMA, logotype.AFFINITYPHOTO, logotype.AFFINITYDESIGNER]}
                />
                <WorkInfo title={"ダミー画像生成"} date={"2023/3"} contract={null}
                          linkUrl={"https://qiita.com/Yohei_Suda/items/d97df8ceec1c291b24d4"}
                          linkText={"QiitaのURL"}
                          description={<>Placeほげほげ系のダミー画像生成サービスをNode.jsベース(Express)で作成しました。</>}
                          icons={[logotype.NODEJS]}
                />
                <p className="workContainer__etc">2023以前の成果物は<a href="https://github.com/neletolus" target="_blank">github</a>まで</p>
            </details>

        </div>
    </div>)
}