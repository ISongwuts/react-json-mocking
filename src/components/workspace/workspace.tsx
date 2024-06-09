import { useState } from "react";
import usePatternStore from "../../store/store";
import selectFakerFunction from "../../util/select-faker-func";
import ActionButton from "../action-button"
import SpaceCard from "./space-card"

const Workspace = () => {
  const [output, setOutput] = useState<OutputType | null>(null)
  const { inputValues, selectValues } = usePatternStore((state) => ({
    inputValues: state.inputValues,
    selectValues: state.selectValues,
  }));

  const generatePatternJson = () => {
    const patternJsonArray = inputValues.map((input, index) => ({
      [input]: selectFakerFunction(selectValues[index])
    }));

    const data = { data: patternJsonArray };
    setOutput(data)
    console.log(data);
  };

  return (
    <div className="flex flex-col w-[75%] gap-5">
      <h2 className="text-2xl text-white font-bold"><span className=" text-green-400">Work</span>space</h2>
      <SpaceCard output={output}/>
      <div className="flex justify-end gap-4 w-full text-white">
        <div className="flex  items-center gap-2">
          <label htmlFor="">Rows</label>
          <input type="text" className=" outline-none focus:border-green-400 text-sm bg-transparent border border-white rounded-md p-2" />
        </div>
        <div className="flex  items-center gap-2">
          <label htmlFor="">Format</label>
          <select defaultValue={"0"} className="h-[2.5rem] text-sm bg-transparent border border-white rounded-md px-1" >
            <option className="" value="0">Checked</option>
          </select>
        </div>
        <ActionButton
          textColor="text-green-400"
          borderColor="border-green-400"
          bgColor="hover:bg-green-400"
          text="Generate"
          do={generatePatternJson}
        />
        <ActionButton
          textColor="text-yellow-400"
          borderColor="border-yellow-400"
          bgColor="hover:bg-yellow-400"
          text="Copy"
        />
        <ActionButton
          textColor="text-blue-400"
          borderColor="border-blue-400"
          bgColor="hover:bg-blue-400"
          text="Download"
        />
      </div>
    </div>
  )
}

export default Workspace