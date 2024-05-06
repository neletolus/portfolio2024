import ConceptTitleArea from "./ConceptTitleArea.tsx";

export default function ConceptContents() {
    return (<div className="contents">
        <ConceptTitleArea></ConceptTitleArea>
        <div className="conceptContainer__databody databody">
            <h2>このサイトは、</h2>
            <p>ロシア・アヴァンギャルドを代表する芸術家、グラフィックデザイナーである<br />
                <a href="https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%AB%E3%83%BB%E3%83%AA%E3%82%B7%E3%83%84%E3%82%AD%E3%83%BC">エル・リシツキー（El Lissitzky ）</a>のシュプレマティックな作品群から着想を得てデザインされました。<br />
                <br />
                サイト内の統一的な赤とグレーと背景の白は、彼がよく使用した赤、黒、白の配置をもとに構成しました。<br />
                <br />
                参考：
                <ul>
                    <li><a href="https://www.kodomo.go.jp/gallery/modernism/09_for2/index.html">二つの正方形について</a></li>
                    <li><a href="https://bunka.nii.ac.jp/heritages/detail/112187">赤き楔で白を撃て</a></li>
                </ul>
                <br />
                赤、白はそれぞれ赤軍と白軍を表し、黒は無秩序を意味しており、プロパガンダ芸術としての側面が強いですが、彼のシンプルかつ優れたデザイン感覚は思想が形骸化し、デザインとしてのみ享受された上でも価値が失われないものと考えています。
                <br />
                <br />
                トップページに表示されるランダムに広がる赤とグレーの直方体と円はまさに彼の作品からインスパイアされたものであり、読み込むたびにランダムな大きさと位置に配置されることで無秩序でありながらも美しく自然な配置が生まれるようになっています。
                <br/>
                <br/>
                また、トップページに表示される立方体と床面の3Dモデルも印象的かつ全体の調和を崩さないよう考慮して作成されており、サイトに奥行き感を追加するだけでなく、構成主義との融合を表現することにも挑戦しています。
            </p>
        </div>
    </div>)
}