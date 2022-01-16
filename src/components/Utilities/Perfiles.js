const Perfiles = ({persRight, name, desemp, twt, fb, ig}) => (
    <div className="px-6 pb-20 flex flex-col justify-center items-center">
        <img
            alt="..."
            src={persRight}
            className="shadow-lg rounded-full mx-auto h-48 bg-gradient-to-b from-gray-700 via-gray-700"
            // style={{height:'200px'}}
        />
        <div className="pt-6 text-center md:w-4/5">
            <h5 className="text-xl font-bold">{name}</h5>
            <p className="mt-1 text-xs uppercase font-semibold"> {desemp} </p>
            <div className="mt-6">
                {twt && 
                    <a href={`${twt}`} target="_blank" ><button
                        className="bg-blue-400 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </button></a>
                }
                {fb &&
                    <a href={`${fb}`} target="_blank" ><button
                        className="bg-blue-600 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </button></a>
                }
                {ig &&
                    <a href={`${ig}`} target="_blank" ><button
                        className="bg-gradient-to-tr from-purple-800 to-pink-500 w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </button></a>
                }
            </div>
        </div>
    </div>
)

export default Perfiles