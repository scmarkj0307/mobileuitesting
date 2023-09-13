import Toast from "react-native-toast-message";

export default function ToastFunction(type, message, position){
    return Toast.show({ 
        type:type, 
        position: position?position:"top", 
        text1:type==="success" ? "Great!" : type === "warning" ? "Opps!" : "Sorry!", 
        text2: message ,
    });
}