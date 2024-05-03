export default function RandomizeLine() {
    const getRandomStyle = () => {
        return {
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            width: Math.random() * 50 + "%",
            height: Math.random() * 50 + "px",
            transform: "rotate(" + Math.random() * 360 + "deg)"
        };
    }
    return (
        <div style={getRandomStyle()}></div>
    )
}