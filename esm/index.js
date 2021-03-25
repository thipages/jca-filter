import parseBooleanQuery from  './booleanParser.js';
export default (logic,otherConditions={})=> {
    let i=0;
    let stack={};
    const re=logic.replace(/['"](.+?)['"]/g, (a) =>{
        const key=`$${i++}$`;
        stack[key]=a.replace(/['"]/g,'');
        return key;
    });
    const castArray=a=>Array.isArray(a)?a:[a];
    const postFilter=i=>i===0?'':i;
    return Object.assign(otherConditions,parseBooleanQuery(re).reduce(
        (acc,v,i)=>{
            acc['filter'+postFilter(i)]=castArray(v).map(v=>stack[v]);
            return acc;
        },{}
    )); 
}
