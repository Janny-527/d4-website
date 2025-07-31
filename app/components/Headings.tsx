export function BigHeading({title}: any) {
    return (
        <>
            <h1 className="sm:text-[38px] text-[32px] font-bold sm:leading-[48px] leading-[46px]">{title}</h1>
            <div className="h-[4px] sm:max-w-[320px] max-w-[180px] rounded-md ml-1 bg-[linear-gradient(to_left,#A46FF2,#E49976)]"></div>
        </>
    )
}

export function Heading({title}: any) {
    return (
        <>
            <h1 className="text-[32px] font-bold leading-[48px]">{title}</h1>
            <div className="h-[4px] max-w-[280px] rounded-md bg-[linear-gradient(to_left,#A46FF2,#E49976)]"></div>
        </>
    )
}