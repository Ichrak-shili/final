export const currency=(num)=>{

    return "$"+Number(num.toFixed(1)).toLocaleString()+" ";
   }