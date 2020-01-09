function getCurrentDate() {
  return new Date().toJSON().split('T')[0]
}

function getFiveDaysLater() {
  let now = new Date()
  now.setDate(now.getDate() + 5)
  return now.toJSON().split('T')[0]
}

module.exports = { getCurrentDate, getFiveDaysLater }
