import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BasicText from './safari-solaces-tyletools/basictext';
import { ThemeContextInterface } from './safari-solaces-tyletools/themecontext';




export default function App() {
  const [pageIndx, setPageIndex] = useState(1);
  // const [user, setfirst] = useState(false);
  // const [employeeList, setfirst] = useState(false);
  // const [employeeIndex, setfirst] = useState(false);
  // const [theme, setfirst] = useState(false);
  // const [sync, setfirst] = useState(true);
  // const [theme, setTheme] = useState(3);

  function switchDisplay(){
    switch(pageIndx){
      case 0: {return (<BasicText text={"Login in page"}/>)  }
      case 1: {return (<BasicText text={"Main page"}/>)}
      case 2: { return (<BasicText text={"User setting"}/>)}
    }
  }
  //const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}
  const contxt = {

  }
  
  
  return (
    <View style={styles.container}>
      
      {switchDisplay()}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
