module.exports = function main(inputs) {
    dis = inputs.distance;
    mins = inputs.parkTime;

    if (dis < 2) {
        return Math.round(0.25 * mins + 6);
    } else if (dis >= 8) {
        return Math.round(0.25 * mins + 6 + 0.8 * 6 + 1.2 * (dis - 8));
    } else {
        return Math.round(0.25 * mins + 6 + 0.8 * (dis - 2));
    }
};