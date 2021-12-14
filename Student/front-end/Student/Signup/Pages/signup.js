import React from "react";
import { useState } from "react";
import { View,Text,StyleSheet,ScrollView,TextInput, Button, TouchableHighlight } from "react-native";
import Aux from "../../../Auxiliary/Auxiliary";

const AdminSignup = (navigation) =>{
    //Creating useState
    const [name,setName] = useState("");
    const [gmail,setGmail] = useState("");
    const [password,setPassword] = useState("");
    const [retype,setRetype] = useState("");

    const [change,setChange] = useState(true);

    const [error,setError] = useState("");

    //Creating PostData function which will send requests to Node.js
    const PostData  = () =>{

        console.log("Posting");
        //Sending Request to Node.js using Fetch API
        fetch("http://192.168.0.107:3000/Adminsignup", {

            //Setting Method
            method:"POST",

            mode: "no-cors",
            cache: "no-cache", 
            credentials: "same-origin", 
            //Setting Headers
            headers:{
                //Setting Content-Type
                'Access-Control-Allow-Origin':'*',
                "Content-Type" : "application/json"
            },

            //Stringifying the email and password and storing it into body
            body:JSON.stringify({
                name,
                gmail,
                password,
                retype
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <Aux>
            <View style={styles.outer}>
                <Text style={styles.student}>
                    Admin Signup
                </Text>
                <ScrollView>
                    <TextInput 
                        label="name"
                        placeholder="Enter Student Name"
                        value={name}
                        style={styles.id}
                        onChangeText={setName}
                    />
                    <TextInput 
                        label="gmail"
                        value={gmail}
                        placeholder="Enter Gmail"
                        style={styles.id}
                        onChangeText={setGmail}
                    />
                    <TextInput 
                        label="password"
                        value={password}
                        placeholder="Enter your Password"
                        style={styles.id}
                        onChangeText={setPassword}
                    />
                    <TextInput 
                        label="retype"
                        value={retype}
                        placeholder="Re-Enter your Password"
                        style={styles.id}
                        onChangeText={setRetype}
                    />
                    <Text>
                        {error}
                    </Text>
                    <TouchableHighlight style={styles.button}>
                        <Text 
                            style={styles.login}
                            onPress={PostData}
                        >
                            SignUp
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
        width:220,
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

export default AdminSignup;