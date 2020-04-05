export default {
  formateTime(timeStr) {
    return timeStr.substring(0,4)+"-"+timeStr.substring(4,6)+"-"+timeStr.substring(6,8)+" "+timeStr.substring(8,10)+":"+timeStr.substring(10,12)+":"+timeStr.substring(12,14);
  }
}