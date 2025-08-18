// Lexical: Can search from Local → Parent → Global
// But Global cannot search Local variables
function Parent() {
  let a = 10;
  function Child() {
    console.log(`From Child ${a}`);
    // console.log(`From Child ${b}`); // b.c he insed the grand

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  Child();
}
Parent();
