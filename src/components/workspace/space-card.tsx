
import ActionButton from "../action-button"; 
import usePatternStore from "../../store/store";
import Form from './form';

type SpaceCardProps = {
    output: OutputType | null
}

const SpaceCard = (props: SpaceCardProps) => {
    const increasePattern = usePatternStore(state => state.increasePattern); 
    const clearPattern = usePatternStore(state => state.clearPatterns); 

    const mockJson = {
        data: {
            username: "mock username",
            password: "mock password",
            address: "mock address",
            birth: "mock birth",
        }
    };

    return (
        <div className="flex gap-2 w-full h-[500px] border border-white py-8 bg-[#090a13] rounded-md">
            <div className="flex flex-col basis-1/2 gap-2 px-4">
                <div className="flex gap-2 items-center">
                    <h3 className="text-lg font-bold text-white">~ data</h3>
                    <ActionButton
                        textColor="text-green-400"
                        borderColor="border-green-400"
                        bgColor="hover:bg-green-400"
                        text="+"
                        do={increasePattern} // Pass the function reference
                    />
                    <ActionButton
                        textColor="text-red-500"
                        borderColor="border-red-500"
                        bgColor="hover:bg-red-500"
                        text="-"
                        do={clearPattern} // Pass the function reference
                    />
                </div>
                <Form />
            </div>
            <div className="h-full w-[0.05rem] bg-white rounded-md"></div>
            <div className="flex flex-col basis-1/2 gap-2 px-4 text-white">
                <h3 className="text-lg font-bold ">~ output</h3>
                <pre>{JSON.stringify(props.output == null ? mockJson : props.output, null, 2)}</pre>
            </div>
        </div>
    );
};

export default SpaceCard;
