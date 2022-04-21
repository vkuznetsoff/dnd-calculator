export const SetActiveBorder= (object, className) => {
  if (object.target.className == className) {
    object.target.style = "border: 2px solid #5D5FEF"
  }
}
