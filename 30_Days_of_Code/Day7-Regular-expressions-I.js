function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  var re = RegExp(/^([aeiou]).*\1$/);
  /*
   * Do not remove the return statement
   */
  return re;
}
