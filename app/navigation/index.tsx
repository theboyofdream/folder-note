import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StackNavigation } from "./StackNavigation";

const Navigation: React.FC = function () {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default Navigation