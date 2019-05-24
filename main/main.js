module.exports = function main(inputs) {
    // write your code here...
    if (inputs.distance < 6){
        return Math.round(6+0.8*inputs.parkTime)
    }
    return "price";
};
