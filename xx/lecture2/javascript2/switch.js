var monthsOfTheYear = [];
monthsOfTheYear.push('Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec');
console.log(monthsOfTheYear);

let presentMonth = monthsOfTheYear.indexOf('July');

switch(presentMonth){
    case 0:
        console.log('January')
        break;
    case 1:
        console.log('February')
        break;
    case 6:
        console.log('July')
        break;
    case 8:
        console.log('September')
        break;
    default:
        console.log('No Month Found')
}