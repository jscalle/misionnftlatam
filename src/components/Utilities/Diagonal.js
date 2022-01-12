export default function Diagonal() {
    return (
        <>
            <div className="pt-12"
                style={{ transform: "translateZ(0)" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden w-full"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-200 fill-current"
                        points="2560 0 2560 103 0 103"
                    ></polygon>
                </svg>
            </div>
        </>
    )
}