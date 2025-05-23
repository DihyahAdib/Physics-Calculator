$(document).ready(function () {
  let sumNumbers = [];
  let differenceNumbers = [];
  let productNumbers = [];

  $("#addInputFieldForSum").on("click", function () {
    $("#numberInputsSum").append(
      '<input type="number" class="numberInputSum" />'
    );
  });

  $("#addInputFieldForSubtract").on("click", function () {
    $("#numberInputsSubtract").append(
      '<input type="number" class="numberInputSubtraction" />'
    );
  });

  $("#addInputFieldForMulti").on("click", function () {
    $("#numberInputsMulti").append(
      '<input type="number" class="numberInputProduct" />'
    );
  });

  $("#calculateSumButton").on("click", function () {
    sumNumbers = [];
    let sum = 0;

    $("#numberInputsSum .numberInputSum").each(function () {
      const number = parseFloat($(this).val());
      if (!isNaN(number)) {
        sum += number;
        sumNumbers.push(number);
      } else if ($(this).val().trim() !== "") {
        console.warn(`Invalid number for sum: ${$(this).val()}`);
      }
    });

    $("#result").text(
      "Sum: " + sum + " (Numbers: " + sumNumbers.join(", ") + ")"
    );
  });

  $("#calculateSubButton").on("click", function () {
    differenceNumbers = []; // clear it first
    let difference = 0;
    let first = true;

    $("#numberInputsSubtract .numberInputSubtraction").each(function () {
      const number = parseFloat($(this).val());
      if (!isNaN(number)) {
        differenceNumbers.push(number);
        if (first) {
          difference = number;
          first = false;
        } else {
          difference -= number;
        }
      } else if ($(this).val().trim() !== "") {
        console.warn(`Invalid number for sum: ${$(this).val()}`);
      }
    });

    $("#result").text(
      "Difference: " +
        difference +
        " (Numbers: " +
        differenceNumbers.join(", ") +
        ")"
    );
  });

  $("#calculateProductButton").on("click", function () {
    productNumbers = [];
    let product = 1;
    let hasNumber = false;

    $("#numberInputsMulti .numberInputProduct").each(function () {
      const number = parseFloat($(this).val());
      if (!isNaN(number)) {
        product *= number;
        productNumbers.push(number);
        hasNumber = true;
      } else if ($(this).val().trim() !== "") {
        console.warn(`Invalid number for product: ${$(this).val()}`);
      }
    });

    if (hasNumber) {
      $("#result").text(
        "Product: " + product + " (Numbers: " + productNumbers.join(", ") + ")"
      );
    } else {
      $("#result").text("Please enter valid numbers for product.");
    }
  });

  $("#clearForSum").on("click", function () {
    $("#numberInputsSum")
      .empty()
      .append(
        '<input type="number" class="numberInputSum" /><input type="number" class="numberInputSum" />'
      );
    sumNumbers = [];
    $("#result").text("");
  });

  $("#clearForSub").on("click", function () {
    $("#numberInputsSubtract")
      .empty()
      .append(
        '<input type="number" class="numberInputsSubtract" /><input type="number" class="numberInputsSubtract" />'
      );
    differenceNumbers = [];
    $("#result").text("");
  });

  $("#clearForMulti").on("click", function () {
    $("#numberInputsMulti")
      .empty()
      .append(
        '<input type="number" class="numberInputProduct" /><input type="number" class="numberInputProduct" />'
      );
    productNumbers = [];
    $("#result").text("");
  });

  $("#clear").on("click", function () {
    $("#numberInputsSum")
      .empty()
      .append(
        '<input type="number" class="numberInputSum" /><input type="number" class="numberInputSum" />'
      );
    $("#numberInputsSubtract")
      .empty()
      .append(
        '<input type="number" class="numberInputsSubtract" /><input type="number" class="numberInputsSubtract" />'
      );
    $("#numberInputsMulti")
      .empty()
      .append(
        '<input type="number" class="numberInputProduct" /><input type="number" class="numberInputProduct" />'
      );
    sumNumbers = [];
    differenceNumbers = [];
    productNumbers = [];
    $("#result").text("");
  });
});
