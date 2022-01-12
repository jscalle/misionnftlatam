
export default function CardInfo({title, content1, content2, bgCircule, option, width, imagn, animation, hide}) {
    return (
        <>
            {option===1
                ?<div className={`pt-6 w-full md:w-${width} px-4 text-center mx-auto`}>
                    <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-8 py-5 flex-auto">
                            {bgCircule&&<div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgCircule?bgCircule:'bg-gray-500'}`}>
                                <i className="fas fa-fingerprint"></i>
                            </div>}
                            <h6 className="text-xl font-semibold"> {title} </h6>
                            <p className={`mt-5 mb-4 text-justify text-blueGray-500`}> {content1} </p>
                            {content2 && <p className="mt-2 mb-4 text-justify text-blueGray-500"> {content2} </p>}
                        </div>
                    </div>
                </div>
                : option===2 
                ?   <div className={`w-full md:w-${width} px-4 text-center mx-auto`}>
                        <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-8 py-5 flex-auto">
                            {bgCircule&&<div className={`text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgCircule?bgCircule:'bg-gray-500'}`}>
                                <i className="fas fa-fingerprint"></i>
                            </div>}
                            <h6 className="text-xl font-semibold"> {title} </h6>
                            <p className={`mt-5 mb-4 text-justify text-blueGray-500`}> {content1} </p>
                            {content2 && <p className="mt-2 mb-4 text-justify text-blueGray-500"> {content2} </p>}
                            </div>
                        </div>
                    </div>
                :   option === 3
                ?  <div className={`w-full md:w-${width} px-4 text-center`}>
                        <div className="relative flex flex-col min-w-0 break-words text-gray-100 text-opacity-50 text-4xl w-full mb-8">
                            {/* <div className="px-4 py-5 flex-auto">
                            {bgCircule&&<div className={`text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgCircule?bgCircule:'bg-gray-500'}`}>
                                <i className="fas fa-fingerprint"></i>
                            </div>} */}
                            
                            <h6 className="text-6xl font-semibold"> {title} </h6>
                            {/* <h6 className="text-6xl font-josefin font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-pressStart font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-russoOne font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-shadowInto font-semibold"> {title} </h6> */}

                            {/* <p className="mt-2 mb-4 text-blueGray-500"> {content1} </p> */}
                            {/* </div> */}
                        </div>
                    </div>
                :   option === 4
                &&   <div className={`w-full md:w-${width} px-4 text-center ${hide ? 'hidden md:block' : 'block'}`}>
                        <div className="relative flex flex-col min-w-0 break-words text-gray-100 text-opacity-50 text-4xl w-full mb-8">
                            {/* <div className="px-4 py-5 flex-auto">
                            {bgCircule&&<div className={`text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgCircule?bgCircule:'bg-gray-500'}`}>
                                <i className="fas fa-fingerprint"></i>
                            </div>} */}
                            <img className={`${animation}`} src={imagn} alt='1' />
                            {/* <h6 className="text-6xl font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-josefin font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-pressStart font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-russoOne font-semibold"> {title} </h6> */}
                            {/* <h6 className="text-6xl font-shadowInto font-semibold"> {title} </h6> */}

                            {/* <p className="mt-2 mb-4 text-blueGray-500"> {content1} </p> */}
                            {/* </div> */}
                        </div>
                    </div>
            }
            {/* <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">Lorem Ipsum.</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                    Ipsum incididunt enim sit est magna.
                    Aliquip pariatur in est est voluptate occaecat occaecat excepteur minim laboris ad qui exercitation.
                    Id sint culpa veniam occaecat enim consectetur.
                </p>
                </div>
            </div>
            </div>
            
            <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                <div className="text-gray-400 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">Lorem Ipsum.</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                    
                </p>
                </div>
            </div>
            </div> */}
        </>
    )
}
