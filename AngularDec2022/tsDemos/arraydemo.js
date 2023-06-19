var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myArr = [10, 20, 30];
/*for(let element of myArr)
{
   console.log(element);
}*/
var myArr2 = __spreadArray([], myArr, true);
var mergedarr = __spreadArray(__spreadArray([], myArr, true), myArr2, true);
for (var _i = 0, mergedarr_1 = mergedarr; _i < mergedarr_1.length; _i++) {
    var element = mergedarr_1[_i];
    console.log(element);
}
