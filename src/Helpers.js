export const dateFormat = (givenDate)=>{
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const date = new Date(givenDate);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth =  date.getDate()< 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1 }` : date.getMonth() + 1  ;
    const year = date.getFullYear();
    
    const formattedDate = `${dayOfWeek},${dayOfMonth}-${month}-${year}`;

   return formattedDate
}