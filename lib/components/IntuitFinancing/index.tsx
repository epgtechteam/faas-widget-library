import React, { useEffect } from "react";
import {
    FinancingEnvironment,
    FinancingPIIData,
    FinancingType,
} from "../../@types/financing";
import { onErrorEvent, onEvent, onSuccessEvent } from "../../@types/events";
import { ServiceTitanHeaderInfo } from "../../@types/isv";

export type IntuitFinancingProps = {
    data?: FinancingPIIData;
    bearerToken?: string;
    offerType?: FinancingType;
    env?: FinancingEnvironment;
    headerInfo?: ServiceTitanHeaderInfo;
    onSuccess?: onSuccessEvent;
    onError?: onErrorEvent;
    onEvent?: onEvent;
};

const IntuitFinancing: React.FC<IntuitFinancingProps> = (
    props?: IntuitFinancingProps
) => {
    const logPropsOnMount = () => {
        try {
            if (!props) {
                console.warn("No props provided");
                return;
            }
            const propsToJson = JSON.stringify(props);
            if (propsToJson.length === 0) {
                console.warn("Props are now 100% empty");
                return;
            }
            console.log(propsToJson);
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        logPropsOnMount();
    }, []);
    return (
        <div className="flex flex-col min-h-screen p-10 bg-gray-100">
            <div>
                <h1 className="font-bold text-4xl">
                    Native ISV Widget Library Boilerplate
                </h1>
                <h2 className="font-bold text-2xl text-gray-500">
                    Check console for logged props...
                </h2>
            </div>
        </div>
    );
};

export default IntuitFinancing;
