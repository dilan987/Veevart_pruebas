var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function test19(items, capacity) {
    var dp = Array(capacity + 1).fill(0);
    var chosenItems = Array(capacity + 1).fill([]);
    for (var i = 0; i < items.length; i++) {
        var _a = items[i], weight = _a[0], value = _a[1];
        for (var j = capacity; j >= weight; j--) {
            if (dp[j - weight] + value > dp[j]) {
                dp[j] = dp[j - weight] + value;
                chosenItems[j] = __spreadArray(__spreadArray([], chosenItems[j - weight], true), [items[i]], false);
            }
        }
    }
    return [chosenItems[capacity], dp[capacity]];
}
var items = [[2, 3], [3, 4], [4, 5], [5, 6]];
var capacity = 8;
console.log(test19(items, capacity));
