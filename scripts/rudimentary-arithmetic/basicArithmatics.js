// scripts/rudimentary-arithmetic/basicArithmatics.js
import { addNumberField } from "../utils/addInputFields.js";
import { clear } from "../utils/clear.js";

document.addEventListener("DOMContentLoaded", () => {
  let sumNumbers = [];
  let differenceNumbers = [];
  let productNumbers = [];
  let quotientNumbers = [];

  addNumberField(
    "#addInputFieldForSum",
    "#numberInputsSum",
    '<input type="number" class="numberInputSum" />'
  );

  addNumberField(
    "#addInputFieldForSubtract",
    "#numberInputsSubtract",
    '<input type="number" class="numberInputSubtraction" />'
  );

  addNumberField(
    "#addInputFieldForMulti",
    "#numberInputsMulti",
    '<input type="number" class="numberInputProduct" />'
  );

  $("#numberInputsDivide")
    .empty()
    .append(
      '<input type="number" class="numberInputQuotient" /><input type="number" class="numberInputQuotient" />'
    );

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
    differenceNumbers = [];
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

  $("#calculateQuotientButton").on("click", function () {
    quotientNumbers = [];
    quotient = 0;
    const $divisionInputs = $("#numberInputsDivide .numberInputQuotient");
    const num1 = parseFloat($divisionInputs.eq(0).val()); // First input
    const num2 = parseFloat($divisionInputs.eq(1).val()); // Second input

    if (isNaN(num1) || isNaN(num2)) {
      $("#result").text("Please enter two valid numbers for division.");
      return;
    }

    if (num2 === 0) {
      $("#result").text("Error: Cannot divide by zero!");
      return;
    }

    quotient = num1 / num2;
    quotientNumbers.push(num1, num2);

    $("#result").text(
      "Quotient: " +
        quotient +
        " (Numbers: " +
        quotientNumbers.join(" / ") +
        ")"
    );
  });

  $("#clearForSum").on("click", function () {
    $("#numberInputsSum")
      .empty()
      .append(
        '<input type="number" class="numberInputSum" /><input type="number" class="numberInputSum" />'
      );
    sumNumbers = [];
    clear();
  });

  $("#clearForSub").on("click", function () {
    $("#numberInputsSubtract")
      .empty()
      .append(
        '<input type="number" class="numberInputsSubtract" /><input type="number" class="numberInputsSubtract" />'
      );
    differenceNumbers = [];
    clear();
  });

  $("#clearForMulti").on("click", function () {
    $("#numberInputsMulti")
      .empty()
      .append(
        '<input type="number" class="numberInputProduct" /><input type="number" class="numberInputProduct" />'
      );
    productNumbers = [];
    clear();
  });

  $("#clearForDivide").on("click", function () {
    $("#numberInputsDivide")
      .empty()
      .append(
        '<input type="number" class="numberInputQuotient" /><input type="number" class="numberInputQuotient" />'
      );
    quotientNumbers = [];
    clear();
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
    $("#numberInputsDivide")
      .empty()
      .append(
        '<input type="number" class="numberInputQuotient" /><input type="number" class="numberInputQuotient" />'
      );
    sumNumbers = [];
    differenceNumbers = [];
    productNumbers = [];
    quotientNumbers = [];
    clear();
  });
});
