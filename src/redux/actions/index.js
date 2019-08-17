export const increaseAction =(number) => {
    return {type:"INCREMENT",
            number:number
        };
};

export const decreaseAction = (number) =>{
 return {
    type: "DECREMENT",
    number:number
 };
}