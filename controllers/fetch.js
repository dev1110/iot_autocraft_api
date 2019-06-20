/**************fetch Api**************** */
const handleFetch = (req ,res ,db) => {
    db('employee')
        .select('name as Name','id_code as ID','commercial_id as Barcode')
        .sum('coffee_cups as Coffee Cups')
        .sum('tea_cups as Tea Cups')
        .sum('drink3 as Drink3')
        .sum('drink4 as Drink4')
        .where('date', '>', '2019-02-01').andWhere('date', '<', '2019-03-01')
        .groupBy('commercial_id')
        .orderBy('id_code')
    .then(user => {
        if(user.length){
            console.log(user);
            res.json(user);
        }else{
            res.status(400).json('user not found');
            console.log('user not found');
        }
    })
    .catch(err => {
            res.status(400).json('error fetching user',err)
            console.log('error fetching user');
        });
}
module.exports = {
    handleFetch : handleFetch
}