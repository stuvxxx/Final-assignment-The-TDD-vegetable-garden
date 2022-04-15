// const corn = {
//     name: "corn",
//     yield: 3,
// };
// const pumpkin = {
//     name: "pumpkin",
//     yield: 4,
// };
// const crops = [
//     { crop: corn, numCrops: 5 },
//     { crop: pumpkin, numCrops: 2 },
// ];
// 
// 
// getYieldForPlant = (obj) => {
//     return obj.yield
// }
// 
// getYieldForCrop = (obj) => {
//     jield = getYieldForPlant(obj.crop)
//     return jield * obj.numCrops
// }
// 
// getTotalYield = (obj) => {
//   const sepTotalYield = (obj.map(x => getYieldForCrop(x)))
//   const sumTotalYield = sepTotalYield.reduce((partialSum, a) => partialSum + a, 0);
//   return sumTotalYield
// }
// console.log(crops)
//
//const corn = {
//    name: "corn",
//    yield: 3,
//};
//const pumpkin = {
//    name: "pumpkin",
//    yield: 4,
//};
//const crops = [
//    { crop: corn, numCrops: 5 },
//    { crop: pumpkin, numCrops: 2 },
//];
//
//
//
//let strCrops = JSON.stringify({crops})
//let objCrops = ({crops})
//let noBrackCrops = crops
//
//
//let cropCheck = (input) => {
//    console.log(input.crops)
//    }
 //cropCheck(strCrops)     // <-input.map not function 
//  cropCheck(objCrops)     // <-input.map not function 
 //cropCheck(noBrackCrops)    // <- What I want

