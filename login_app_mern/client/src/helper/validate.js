import toast from "react-hot-toast"

/**validate username */
function usernameVerify(error = {},values){
    if(!values.username){
        error.username=toast.error('Username Required...!');
    }
}