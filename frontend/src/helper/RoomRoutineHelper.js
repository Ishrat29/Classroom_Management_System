export function roomRoutineToCourseCode(roomRoutine){
    console.log("RoomRoutineHelper: RoomroutinrToCourseCode:"+roomRoutine)
    let reqInd= roomRoutine.indexOf('|');
    if(reqInd!=0) return roomRoutine.substring(0,reqInd);
    else return "";
};

export function roomRoutineToStatus(roomRoutine){
    const inds = roomRoutine.indexOf('|');
    return roomRoutine.substring(inds+1,inds+2);
}

export function isValidDate(date){
    const currentDate=new Date();
    if((currentDate.getMonth()+1)*100+currentDate.getDate()<=date) return 1;
    else return 0;
}

export function roomRoutineToDate(roomRoutine){
    const inds = roomRoutine.indexOf('|')+2;
    const res = parseInt(roomRoutine.substring(inds));
    if(isNaN(res)===true) return 0;
    return res;
}

export function  isNeedUpdateRoomRoutineTempPair(roomRoutine,roomRoutineTemp){
    if(roomRoutineToCourseCode(roomRoutine)==='n'){
        if(!isValidDate(roomRoutineToDate(roomRoutineTemp)))
        return 1;
    }
    return 0;
}