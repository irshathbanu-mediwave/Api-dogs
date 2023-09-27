getAllDogsFromApi();
function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      //   console.log(resp);
      const ListItemDog = Object.keys(resp.message);
      console.log(ListItemDog);
    },
    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed");
    },
  });
}
function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
  });
}

// function doMath(num1, num2, cb) {
//   return cb(num1, num2);
// }
// function add(n1, n2) {
//   return n1 + n2;
// }
// function subtract(n1, n2) {
//   return n1 - n2;
// }
