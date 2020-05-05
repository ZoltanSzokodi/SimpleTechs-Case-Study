function a() {
  let grandpa = 'grandpa';
  let garbage = 'useless information';
  return function b() {
    let father = 'father';
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a()()());

// DEFINITIONS ======================================================================================
// LEXICAL SCOPE => lexical: where is the function declared / scope: what variables has the function access to. Where we write the function matters NOT where we call it!

// CLOSURE => ~ is the combination of a function and the lexical environment from which it was declared

// CLOSURES ALLOW FUNCTIONS TO ACCESS VARIABLES FROM AN ENCLOSING SCOPE EVEN AFTER IT LEAVES THE SCOPE WHICH IT WAS DECLARED (This is some of the magic of closures. You have access to values after the functions in which they are defined have finished executing.)
// ==================================================================================================

// 1) "function c" will always have access to the variables declared in "function b" & "function a" because they are referenced by it. The JS engine knows already before the execution which function has access to which variables.

// 2) Since "grandpa" & "father" are referenced in "function c", they won't be garbage collected as "a" & "b" pop off the execution stack.

// 3) However the "garbage" variable will be garbage collected until it is not referenced somewhere below.
