import "./loadingUI.scss"

type Props = {
    progress: number
}
export default function LoadingUI({progress}: Props) {

    return (
        <div className="background">
            <div className="container">
                <div className="glitchedimage">
                    <div className="channel r"></div>
                    <div className="channel g"></div>
                    <div className="channel b"></div>
                </div>
                <div className="loadTextWrapper">
                    <div className="loadTextWrapper--content">
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
    )
}
