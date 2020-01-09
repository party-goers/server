module.exports = ()=>{
    const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const randomLength = Math.round( Math.random()*10 ) + 6

    let randomPassword = ''

    for(let x = 0; x < randomLength; x++)
      {
        randomPassword += dict[ Math.floor( Math.random()*dict.length ) ]
      }
    // console.log(randomPassword);
    return randomPassword
}