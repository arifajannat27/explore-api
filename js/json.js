const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
// JavaScript Objects Notation (JSON)
const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

// { id: 1, name: 'Gorib Amir', job: 'actor' }
// {"id":1,"name":"Gorib Amir","job":"actor"}

const shop = {
    owner: 'Alia',
    address: {
    street: 'kochukher voot er goli',
    city: 'ranbir',
    country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// console.log(typeof shop);
// console.log(typeof shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);