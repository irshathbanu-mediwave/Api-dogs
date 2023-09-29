$(document).ready(function () {
  const loading = $("#loadingElement");
  function elemnetShow() {
    loading.show();
  }
  function elementHide() {
    loading.hide();
  }
  function optionBreeds(dogBreed) {
    const SelectOption = $("#DogsOption");
    SelectOption.empty();
    SelectOption.append('<option value="">Select The Breeds</optio>');
    for (let i = 0; i < dogBreed.length; i++) {
      const breed = dogBreed[i];

      SelectOption.append(`<option value="${breed}">${breed}</option>`);
    }
  }
  $("#submitbtn").click(function () {
    const BredItem = $("#DogsOption").val();
    if (BredItem) {
      getRandomImageOfDog(BredItem);
    }
  });
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
        optionBreeds(ListItemDog);
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
    elemnetShow();
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("Api request success");
        console.log(resp);
        elementHide();
        ShowImage(resp.message);
      },
      error: function () {
        console.log("Api request error");
      },
    });
  }
  function ShowImage(Imageurl) {
    const Img = $("#imageelement");
    Img.empty();

    const ImageItem = $("<img>");
    ImageItem.attr("src", Imageurl);
    Img.append(ImageItem);
  }
  getAllDogsFromApi();
});

// function doMath(num1, num2, cb) {
//   return cb(num1, num2);
// }
// function add(n1, n2) {
//   return n1 + n2;
// }
// function subtract(n1, n2) {
//   return n1 - n2;
// }
