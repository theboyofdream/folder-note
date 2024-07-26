import React from "react";
import { View, ViewProps } from "react-native";

export const Column: React.FC<ViewProps> = function (props) {
    return (
        <View
            {...props}
            // style={[
            //     { flex: 1 },
            //     style
            // ]}
        />
    )
}
