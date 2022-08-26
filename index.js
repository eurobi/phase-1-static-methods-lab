class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[$@!#%\*\(\)\}\{\^\]]/gim,"")
  }
  static titleize(string){
    const nonCapWords = ["the","an","a","but","of","and","for","by","from","at"]
    const wordArray = string.split(' ')
    const titleArray = wordArray.map((word) => {
      if(nonCapWords.includes(word)){
        return word
      }else{
        return word[0].toUpperCase() + word.slice(1)
      }
    })
    return titleArray.join(' ')[0].toUpperCase() + titleArray.join(' ').slice(1)

  }
}

