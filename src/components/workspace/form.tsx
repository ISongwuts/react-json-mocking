import { useState } from "react"
import ActionButton from "../action-button"

type InputPatternProps = {
    placeholder: string
}

const InputPattern = (props: InputPatternProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className="pt-4">
                <label htmlFor="">~</label>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-xs text-end">Field Name</label>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    className="h-[2.5rem] outline-none focus:border-green-400 text-sm bg-transparent border border-white rounded-md px-1"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-xs text-end">Options</label>
                <select defaultValue={"0"} className="h-[2.5rem] text-sm bg-transparent border border-white rounded-md px-1" >
                    <option className="" value="0">Checked</option>
                </select>
            </div>
            <div className="flex gap-2 pt-4">
                <ActionButton
                    textColor="text-red-400"
                    borderColor="border-red-400"
                    bgColor="hover:bg-red-400"
                    text="x"
                />
            </div>
        </div>
    )
}

const Form = () => {
    const [count, setCount] = useState<number>(4)
    const initialPlaceholder = ["username", "password", "address", "birth"]
    return (
        <form className="flex flex-col gap-4 text-lg font-bold text-white pl-5 overflow-y-scroll h-full">
            {
                Array.from({ length: count }).map((_, index) => (
                    <InputPattern placeholder={initialPlaceholder[index]} key={index} />
                ))
            } 
        </form>
    )
}

export default Form