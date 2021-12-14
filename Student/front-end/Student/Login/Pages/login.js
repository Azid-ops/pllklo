import React, {useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,StyleSheet,ScrollView,TextInput, TouchableHighlight } from "react-native";
import Aux from "../../../Auxiliary/Auxiliary";

const AdminLogin = () =>{

    const [gmail,setGmail] = useState("");
    const [retype,setRetype] = useState("");

    const PostData  = async (event) =>{

        console.log("Posting");
    

        //Sending Request to Node.js using Fetch API
        await fetch("http://192.168.0.107:3000/AdminLogin", {

            //Setting Method
            method:"POST",

            //Setting Headers
            headers:{

                //Setting Content-Type
                "Content-Type" : "application/json"
            },
            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                gmail,
                retype
            })
        }).then(result=>result.json())
            .then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    const navigation = useNavigation();
    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    Admin Login
                </Text>
                <ScrollView>
                    <TextInput 
                        placeholder="Enter your Gmail"
                        label="gmail"
                        value={gmail}
                        style={styles.id}
                        onChangeText={setGmail}
                    />
                    <TextInput 
                        placeholder="Enter your Password"
                        value={retype}
                        label="retype"
                        style={styles.id}
                        onChangeText={setRetype}
                    />
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.login} onPress={PostData}>
                            Login
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.login}>
                            Guardian Login
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.button}
                    >
                        <Text style={styles.login}
                            onPress={()=>{
                                navigation.navigate(
                                    'Admin Signup'
                                );
                            }}
                        >
                            Admin Signup
                        </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        </Aux>
    )
}

const styles = StyleSheet.create({
    outer: {
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center",
    },
    student: {
        fontSize:20,
        marginTop:"40%"
    },
    id:{
        marginTop:"10%",
        borderWidth:1,
        width:180,
        paddingLeft:20,
        height:30,
        borderColor:"gray"
    },
    button:{
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"gray",
        marginTop:10,
        height:30,
        justifyContent:"center",
        alignItems:"center",
    },
    login:{
        color:"white",
    }
    
});

export default AdminLogin;