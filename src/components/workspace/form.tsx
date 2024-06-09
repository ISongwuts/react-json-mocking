import ActionButton from "../action-button"
import usePatternStore from "../../store/store"
import { functionNames } from "../../util/select-faker-func";

type InputPatternProps = {
    placeholder: string;
    index: number;
};

const InputPattern = (props: InputPatternProps) => {
    const { inputValues, selectValues, decreasePattern, setInputValue, setSelectValue } = usePatternStore((state) => ({
        inputValues: state.inputValues,
        selectValues: state.selectValues,
        decreasePattern: state.decreasePattern,
        setInputValue: state.setInputValue,
        setSelectValue: state.setSelectValue,
    }));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(props.index, value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectValue(props.index, value);
    };
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
                    value={inputValues[props.index]}
                    onChange={handleInputChange}
                    className="h-[2.5rem] outline-none focus:border-green-400 text-sm bg-transparent border border-white rounded-md px-1"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-xs text-end">Options</label>
                <select
                    value={selectValues[props.index]}
                    onChange={handleSelectChange}
                    className="h-[2.5rem] text-sm bg-transparent border border-white rounded-md px-1"
                >
                    <option className="text-sm bg-slate-700" value="none">None</option>
                    {functionNames.map((name: string, index: number) => (
                        <option key={index} className="text-sm bg-slate-700" value={name}>{name}</option>
                    ))}
                </select>
            </div>
            <div className="flex gap-2 pt-4">
                {(inputValues.length - 1) === props.index && (
                    <ActionButton
                        textColor="text-red-400"
                        borderColor="border-red-400"
                        bgColor="hover:bg-red-400"
                        text="x"
                        do={decreasePattern}
                    />
                )}
            </div>
        </div>
    );
};


const Form = () => {
    const pattern = usePatternStore(state => state.pattern);
    const initialPlaceholder = ["username", "password", "address", "birth"];

    return (
        <form className="flex flex-col gap-4 text-lg font-bold text-white pl-5 overflow-y-scroll h-full">
            {Array.from({ length: pattern }).map((_, index) => (
                <InputPattern
                    placeholder={initialPlaceholder[index] || `placeholder ${index}`}
                    key={index}
                    index={index}
                />
            ))}
        </form>
    );
};
export default Form