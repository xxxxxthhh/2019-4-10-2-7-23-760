function total_price (dis, basic_price, mile_price) {
    if (dis < 2) {
        return Math.round(basic_price);
    } else if (dis >= 8) {
        return Math.round(basic_price + mile_price * (8-2) + 1.5 * mile_price * (dis - 8));
    } else {
        return Math.round(basic_price + mile_price * (dis - 2));
    }
}

module.exports = function main(inputs) {
    var dis = inputs.distance;

    var mile_price = 0.8
    var start_price = 6
    var wait_fee = 0.25

    var basic_price = wait_fee * inputs.parkTime + start_price

    return total_price(dis, basic_price, mile_price)
};