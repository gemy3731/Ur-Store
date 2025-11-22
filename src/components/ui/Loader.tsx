

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-99999 overflow-hidden bg-[#000000] opacity-75 flex flex-col items-center justify-end text-white">
            <div className="loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    )
}

export default Loader