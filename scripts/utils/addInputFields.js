// scripts/utils/addInputFields.js

export function addNumberField(
  addButtonSelector,
  inputFieldWrapper,
  inputField
) {
  $(addButtonSelector).on("click", function () {
    $(inputFieldWrapper).append(inputField);
  });
}
