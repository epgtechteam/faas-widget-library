import {
    FinancingEnvironment,
    FinancingType,
    IntuitFinancing,
    IntuitFinancingProps,
} from "../";
import React from "react";
import "../dist/index.css";

const DemoApp: React.FC = () => {
    const props: IntuitFinancingProps = {
        data: undefined,
        bearerToken: "string",
        offerType: FinancingType.B2C_CK_PERSONAL_LOAN,
        env: FinancingEnvironment.E2E,
        headerInfo: {
            xCorrelationid: "string",
            xPartnerId: "string",
            xMerchantid: "string",
        },
        onSuccess: () => console.log("onSuccess"),
        onError: () => console.log("onSuccess"),
        onEvent: () => console.log("onEvent"),
    };
    return <IntuitFinancing {...props} />;
};

export default DemoApp;
