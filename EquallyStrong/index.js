
function areEquallyStrong(yourLeft, yourRight, friendLeft, friendRight) {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendWeakest = friendLeft <= friendRight ? friendLeft : friendRight;
  const friendStrongest = friendLeft >= friendRight ? friendLeft : friendRight;

  return (yourStrongest === friendStrongest && yourWeakest == friendWeakest)
};

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
