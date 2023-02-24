import React, {useContext} from "react";
export const themes = {
    light: {
      color: '#000000',
      colorA:"#B1B1B1",
      colorTime:"#B1B1B1",
      borderHeader:"1px solid #181818",
      background: "#fff",
      backgroundNote:"#F6F4F4",
      backgroundMenu:"#F6F5F3",      
      backgroundSpanMenu:"#181818",
      backgroundAuthorDiv:"#F6F4F4"
      
    },
    dark: {
      color: '#fff',
      background: "#181818",
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });  
  
  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);  
    if(!theme) return theme.dark;  
    return theme;
  }