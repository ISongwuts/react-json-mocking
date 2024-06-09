import usePatternStore from "../store/store"

type Props = {
    textColor: string
    borderColor: string
    bgColor: string
    text: string
    do?: () => void
}

const ActionButton = (props: Props) => {
    const pattern = usePatternStore(state => state.pattern)
    return (
        <button
            className={`text-lg font-bold ${props.textColor} border-2 ${props.borderColor} px-2 rounded-md ${props.bgColor} hover:text-[#131420]`}
            onClick={props.do}
        > {props.text} </button>
    )
}

export default ActionButton