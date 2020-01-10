const axios = require('axios')

function getCurrentDate() {
  return new Date().toJSON().split('T')[0]
}

function getFiveDaysLater() {
  let now = new Date()
  now.setDate(now.getDate() + 5)
  return now.toJSON().split('T')[0]
}

function getPhoto(url) {
  // get photo tag from song-kick uri
  return axios.get(url)
    .then(({ data }) => {
      let index = data.indexOf(`<meta property="og:image" content="`)
      let newData = data.slice(index)
      index = newData.indexOf('>')
      let newData2 = newData.slice(0, index + 1)
      return newData2
    })
}

function checkPhoto(photoUrl) {
  // return true if url photo is real
  // false otherwise
  if (photoUrl.lastIndexOf('//') === 5) return true
  else false
}

function urlPhoto(tag) {
  // extract picture url from given tag
  let index = tag.indexOf(`content="`)
  let newData = tag.slice(index + 9, -2)
  if (checkPhoto(newData)) return newData
  else return 'https://assets.sk-static.com/images/default_images/huge_avatar/default-event.png'
}

module.exports = { getCurrentDate, getFiveDaysLater, getPhoto, urlPhoto }
