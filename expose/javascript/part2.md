1: Line 12 prints 3. This is because the variable "i" was declared with the var keyword. Variables declared with var have no block scope. So, access to the variable "i" is not restricted to the for block it is declared in; it can also be accessed after the for loop inside the same function. So, we break out of the loop when the for loop condition breaks, which is when i equals 3 (as this is the length of the input prices array). Immediately after, the value of i is printed (which would be 3).

2: Line 13 prints 150. The variable "discountedPrice" was declared with the var keyword inside the for loop, meaning that it is accessible outside the for loop as well. The variable is modified for the last time in the third and last iteration of the loop in line 7, which is when the original price is 300. The code calculates the discounted price after applying the .5 discount on 300 and finds 150, storing this into "discountedPrice". The variable is not modified after this, and so it remains as 150.

3: Line 14 prints 150. The variable "finalPrice" was declared with the var keyword inside the function, meaning that it is function-scoped (visible through blocks). The variable is modified for the last time in the third and last iteration of the loop in line 7, which is when the original price is 300. In this iteration, discountedPrice is found to be 150, and we set finalPrice to be equal to Math.round(150 * 100 / 100 which is again 150. finalPrice retains this value after we exit the for loop (due to scope of var), and so 150 is what gets printed.

4: The function returns the array [50, 100, 150]. The variable "discounted" is function scoped, so it can be modified and accessed anywhere in the funciton. The variable is modified in the for loop, finding the discounted price of an original price from the "prices" array and pushing it into its array value in each iteration. In the first iteration, it finds and pushes the discounted price of 100: 50. In the second iteration, it finds and pushes the discounted price of 200: 100. In the third iteration, it finds and pushes the discounted price of 300: 150. As mentioned earlier, "discounted" is function scoped, so it retains the array [50,100,150] after exiting the for loop, and so this is the value that is returned. 

5: The code causes an error. This is because "i" is declared with the let keyword in the for loop, meaning that the scope of this variable is limited to only the for loop block. This variable cannot be accessed/visible outside of the for loop. So, since line 12 attempts to access variable "i" outside of the for loop, the code causes an error.

6: The code causes an error. This is because "discountedPrice" is declared with the let keyword in the for loop, meaning that the scope of this variable is limited to only the for loop block. This variable cannot be accessed/visible outside of the for loop. So, since line 13 attempts to access variable "discountedPrice" outside of the for loop, the code causes an error. 

7: Line 14 prints 150. The variable "finalPrice" was declared with the let keyword in the beginning of the function in its outermost block. So, this variable can be accessed anywhere in the function after its declaration in line 4 (both inside and outside the for loop). As explained before, the last modification to this variable occurs when applying the discount to the original price of 300 to get 150 inside the for loop. So, the variable holds on to the value of 150 after exiting the for loop, and so this is what gets printed. 

8: The function returns the array [50, 100, 150]. The variable "discounted" was declared with the let keyword at the beginning of the function in its outermost block. So, this variable can be accessed anywhere in the function after its declaration in line 3. As explained before, prices get pushed into the "discounted" array, and the array is [50, 100, 150] after exiting the for loop. The variable holds on to this array outside of the for loop due to its function-wide scope, and so its array of [50, 100, 150] is what gets returned. 

9: The code causes an error. This is because "i" is declared with the let keyword in the for loop, meaning that the scope of this variable is limited to only the for loop block. This variable cannot be accessed/visible outside of the for loop. So, since line 12 attempts to access variable "i" outside of the for loop, the code causes an error.

10: Line 12 prints 3. The variable "length" is declared with the const keyword and immediately initalized to the length of the prices array, which is 3. Since it was declared and initailized in the outermost block of the function in line 4, the variable can be accessed anywhere after line 4 within the function. Although it is a const variable, it is never reassigned. None of the other const variables are reassigned as well. So, no error is generated and the code prints 3. 

11: The function returns the array [50, 100, 150]. The variable "discounted" was declared with the let keyword at the beginning of the function in its outermost block. So, this variable can be accessed anywhere in the function after its declaration in line 3. As explained before, prices get pushed into the "discounted" array, and the array is [50, 100, 150] after exiting the for loop. The variable holds on to this array outside of the for loop due to its function-wide scope, and so its array of [50, 100, 150] is what gets returned. Although "discounted" was declared as const and we changed its value by pushing new numbers into the array, its reference was never changed; rather, only its value was directly modified. This is legal to do with const variables.  

12:

    A) student.name

    B) student['Grad Year']

    C) student.greeting()

    D) student['Favorite Teacher'].name

    E) student.courseLoad[0]

13:

    A) Output:'32'

       Explanation: Javascript notes that a string and a number are being added, so it interprets '+' as the concatenation operator and converts the number to a string. So, '3' and '2' are concatenated to form '32'.

    B) Output: 1
    
       Explanation: Since Javascript cannot subtract strings, it converts the string '3' to a number and performs mathematical subtraction with the two resulting numbers: 3 and 2.

    C) Output: 3

       Explanation: As we are trying to add a number with null, Javascript interprets '+' as mathematical addition. So, it will convert null to its numeric value of 0 and then add 3 and 0 to find 3.

    D) Output: '3null'

       Explanation: As we are trying to add a string with null, Javascript interprets '+' as the string concatenation operator. '3' will remain as a string and convert null to its string value of 'null'. Concatenating '3' and 'null' results in '3null'.

    E) Output: 4
    
       Explanation: As we are trying to add a boolean with a number, Javascript interprets '+' as mathematical addition. So, it keeps 3 as a number type and converts the boolean true to its numeric value of 1. 3 and 1 are then added to form 4. 

    F) Output: 0
    
       Explanation: Javascript interprets '+' as mathematical addition, so it converts the boolean false to its mathematical representation of 0 and also converts null to its mathematical representation of 0. 0 and 0 are then added to form 0.

    G) Output: '3undefined'

       Explanation: As we are adding a string with undefined, Javascript interprets '+' as the string concatentation operator. So, it tries to convert all types in the expression to a string. '3' is kept as a string, and undefined is converted to its string representation of 'undefined'. When string concatentation is applied, we get '3undefined'.

    H) Output: NaN
     
       Explanation: Since the minus sign cannot be used with strings, Javascript interprets '-' as mathematical subtraction. So, it will convert all types in the expression to type Number. The string '3' is converted to the number 3 and undefined is converted to its Number representation of NaN (because it is not a valid number). So, performing a mathematical operation when something not representable as a number is involved, the result is also NaN

14:

    A) Output: true

       Explanation: When comparing values of different types, Javascript converts the values to numbers. So the string '2' is converted to the number 2, and then the expression 2 > 1 is evaluated, which turns out to be true.

    B) Output: false

       Explanation: Here, Javascript is comparing the values of two strings. Javascript compares two strings lexicographical order. Since the first character in '2' is lexicographically greater than the first character in '12', '2' is evaluated to be greater than '12, meaning that the given statement results in false.

    C) Output: true

       Explanation: When comparing values of different types, Javascript converts the values to numbers. So the string '2' is converted to the number 2, and then the expression 2 == 2 is evalued, which is true.

    D) Output: false
    
       Explanation: Here, we have the strict equality operator '==='. Javascript immediately returns false when two values of different types are compared. Since we are comparing a number with a string with this operator here, false is returned.

    E) Output: false

       Explanation: When comparing values of different types, Javascript converts the values to numbers. So, the boolean true is converted to its numerical representation of 1. Then, the expression 1 == 2 is evaluated, which obviously results in false.

    F) Output: true

       Explanation: In this expression, Boolean(2) is first evaluated. Since the boolean representation of the number 2 is true, Boolean(2) returns true. We are then left with the expression true === true, which is true because both sides of the strict equality operator are the same type and same value. So, true is returned.

15: The difference between == and === is that === immediately returns false if two values of different types are being compared whereas == allows for type conversion before evaluating equality. So, for example, '2' == 2 returns true since == allows '2' to be converted from a string to a number. However, '2' === 2 returns false because the type of the values are different (string vs number).

16: See file part2-question16.js

17: The result will be the array [2, 4, 6]. This is because the function modifyArray creates an empty array and for each element in the input array, it calls the callback function doSomething with that element as the argument. This callback function returns 2 times the value of the argument. So, modifyArray does this for each element in the input array, takes the returned value from the callback function, and pushes it into the new array created in that function. So for element 1 in the input array, 2 is pushed into the new array; for element 2 in the input array, 4 is pushed into the new array; for element 3 in the input array, 6 is pushed into the new array. Finally, that new array of [2, 4, 6] is returned.

18: See file part2-question18.js

19: 1

    4

    3

    2

   