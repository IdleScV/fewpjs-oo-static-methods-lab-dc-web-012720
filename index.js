class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.split(1)
  }
  
  static sanitize(string){
    return 
  }
  
  static titleize(sentence){
    let excepts = ['a', "an", "but", "of", "and", "for". "at". ]
    let array = sentence.split(" ");
    let first = array[0][0].toUpperCase()
    let last = array.slice(1).map( x => 
      if ()
    )
    
    return [first ...last]
  }
}