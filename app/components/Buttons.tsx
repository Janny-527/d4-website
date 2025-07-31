export function OrangeButton({ label, onClick }: any) {
    return (
        <button
            className="bg-[#EC5735] hover:bg-[#fc7f66] transition text-white sm:px-14 px-10 sm:py-2 py-1 rounded-lg sm:text-[18px] text-[16px]"
            onClick={onClick}
        >{label}</button>
    )
}

export function BlueButton({ label, onClick }: any) {
    return (
        <button
            className="border-[1px] p-2 border-[#67A9FD] rounded-lg text-[#67A9FD] text-[14px] px-4 whitespace-nowrap"
            onClick={onClick}
        >{label}</button>
    )
}