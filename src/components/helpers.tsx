export const sorting =(arr:[],value:string)=>{

    function SortArray(x:any, y:any){
        return x[value].localeCompare(y[value]);
    }

    let sortArr = arr.sort(SortArray);

    return sortArr
}