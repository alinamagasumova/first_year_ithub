let sup = {
    'Окрошка': 160,
    'Куринный бульон': 145,
};
let goryachee = {
    'Пюре с котлетками': 110,
    'Макароны с сыром': 95,
};
let salad = {
    'Оливье': 160,
    'Греческий салат': 145,
};
let napitki= {
    'Чай': 60,
    'Кофе': 120,
};
function getNumber (max = 24, min = 9) {
    return Math.floor(Math.random()* (max-min)+min)
};

let time = getNumber();
let check = getNumber(3, 1);

console.log(getNumber());
if (getNumber()>=12 && getNumber()<=15) {
    let business = {

    }
}

