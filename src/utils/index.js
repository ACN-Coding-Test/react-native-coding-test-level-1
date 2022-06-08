

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
function validateLetters(str){
    const regex =/^[a-zA-Z]+$/
    return regex.test(str)
}

function formatDate(date){
  const dateTimeObj = new Date(date)
  const year = dateTimeObj.getFullYear()
  const month = dateTimeObj.getMonth()
  const day = dateTimeObj.getDate()

  return `${year}-${month}-${day}`
}

export default{
    validateEmail:validateEmail,
    validateLetters:validateLetters,
    formatDate:formatDate
}
