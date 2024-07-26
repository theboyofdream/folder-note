import React from "react";
import { ViewProps } from "react-native";
import { Column } from "./Column";

export const Screen: React.FC<ViewProps> = function ({ style, ...props }) {
  return (
    <Column
      {...props}
      style={[
        {
          flex: 1,
          backgroundColor: '#fff'
        },
        style
      ]}
    />
  )
}
