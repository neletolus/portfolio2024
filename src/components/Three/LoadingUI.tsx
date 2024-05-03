import "./loadingUI.scss"

type Props = {
    progress: number
}
export default function LoadingUI({progress}: Props) {

    return (
        <div className="loadingUi">
            <div className="loadingUi__container">
                <div className="loadingUi__glitchedimage">
                    <div className="loadingUi__channel r"></div>
                    <div className="loadingUi__channel g"></div>
                    <div className="loadingUi__channel b"></div>
                </div>
                <div className="loadingUi__loadTextWrapper">
                    <div className="loadingUi__loadTextWrapper--content">
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    )
}
