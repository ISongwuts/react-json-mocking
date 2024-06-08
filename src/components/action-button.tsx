type Props = {
    textColor: string
    borderColor: string
    bgColor: string
    text: string
}

const ActionButton = (props: Props) => {
    return (
        <button
            className={`text-lg font-bold ${props.textColor} border-2 ${props.borderColor} px-2 rounded-md ${props.bgColor} hover:text-[#131420]`}
        > {props.text} </button>
    )
}

export default ActionButton