module.exports = function main(inputs) {
    // write your code here...
    dis = inputs.distance
    mins = inputs.parkTime

    if (dis < 2){
        return Math.round(6+0.25*mins)
    } else if (2 <= dis < 8){
        return Math.round(6+0.8*(dis-2)+0.25*mins)
    }
    return "price";
};
