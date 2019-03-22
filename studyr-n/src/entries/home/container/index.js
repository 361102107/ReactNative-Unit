import React, { PureComponent } from "react";
import { View, Text, Image,FlatList,TouchableOpacity,Platform, StatusBar } from "react-native";
import addIcon from "../../../assets/images/add.png";
import Confirm from "../../../components/confirm";
import styles from "./style";
import Header from "./homeHeader"

class Index extends PureComponent {
    constructor() {
        super();
        
    }
    componentDidMount() {
       
    }
    clickCell(value){
          
          
    }
      _header = () => {
        return <Header></Header>;
    }
    render() {
        return (
            <View style={styles.pageBox}>
                <View style = {{height: 64,backgroundColor: 'white'}}></View>
                <FlatList
                            data={[
                                    { id: "1", title: 'ringtone_clock'},
                                    { id: "2", title: 'ringtone_crystal'},
                                    { id: "3", title: 'ringtone_getup'},
                                    { id: "4", title: 'ringtone_lighter'},
                                    { id: "5", title: 'ringtone_melody'},
                                    { id: "6", title: 'ringtone_percussion'},
                                    { id: "7", title: 'ringtone_radar'},
                                    { id: "8", title: 'ringtone_rock'},
                                    { id: "9", title: 'ringtone_time'},
                                    { id: "10", title: 'ringtone_waving_flag'},
                                ]}
                                keyExtractor={(item) => item.id}
                                ListHeaderComponent={this._header}
                                renderItem={({item}) => <TouchableOpacity onPress={this.clickCell.bind(this, item.title)}>
                                    <View style = {{height:120,flexDirection:'row',
                                    borderBottomColor:'rgba(220,220,220,1)',borderBottomWidth:1,alignItems:'center'}}>
                                        <View  style = {{flex:1,marginLeft:35,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                                <Text style = {{ fontSize:14}}>{item.title}</Text>
                                        </View>
                                        
                                        <View style = {{width:20,height:20,marginRight:15,justifyContent:'center'}}>
                                                <Image source={null} 
                                                style={{width: 20, height: 20, 
                                                resizeMode:'contain'}}>
                                                </Image>
                                        
                                        </View>
                                    </View>
                                    
                                    </TouchableOpacity>}
                    />
            </View>
        );
    }
}
export default Index;
