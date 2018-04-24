const counter =  (state = 0 , action) => {
  //   if (typeof state === 'undefined'){
  //     return 0
  //   }
  //   if (action.type === "INCREMENT"){
  //     return state + 1
  //   } else if (action.type === "DECREMENT"){
  //     return state - 1
  //   } else {
  //     return state;
  //   }
  // }
  
  //another an way to write is is 
  switch (action.type){
    case 'INCREMENT':
    return state + 1
    case 'DECREMENT': 
    return state - 1
    default: 
    return state
    
  }
  
  // expect(
  //   counter(0, {type: "INCREMENT"})
  //   .toEqual(1)
  // )
  // expect(
  //   counter(1, {type: "INCREMENT"})
  //   .toEqual(2)
  // )
  // expect(
  //   counter(2, {type: "DECREMENT"})
  //   .toEqual(1)
  // )
  // expect(
  //   counter(1, {type: "DECREMENT"})
  //   .toEqual(0)
  // )
  
  
  export default counterReducer;