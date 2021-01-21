var LedStatus = "LED_OFF";

module.exports = {
    setLedStatus: (status)=>{
        LedStatus = status
    },
    getLedStatus: ()=>{
        return LedStatus;
    }
}