export const SetActiveBorderStyle = (object, className) => {
  let style = undefined
  
  if (object.className === className) {
    style = "border: 2px solid #5D5FEF"
    return style
  }
}

export const formatNum = (num) => {
  if (String(num).length >=8) {
    return num.toPrecision(8)
  }
  return num
}