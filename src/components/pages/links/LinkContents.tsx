import LinkTitleArea from "./LinkTitleArea.tsx";

export default function LinkContents() {
    return (<div className="contents">
        <LinkTitleArea></LinkTitleArea>
        <div className="linkContainer__databody databody">
            <ul>
                <li>
                    <a href="https://github.com/neletolus" target="_blank">github</a>
                </li>
                <li>
                    <a href="https://qiita.com/Yohei_Suda" target="_blank">Qiita</a>
                </li>
                <li>
                    <a href="https://www.lancers.jp/profile/neletolus" target="_blank">ランサーズ</a>
                </li>
                <li>
                    <a href="https://twitter.com/ra4n8ra6n" target="_blank">X（Twitter）</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100076001464951" target="_blank">Facebook</a>
                </li>
            </ul>
        </div>
    </div>)
}