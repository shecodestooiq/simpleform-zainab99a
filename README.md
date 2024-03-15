[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/dzHYPkNK)
# simpleForm

1. you should make a folder for your components named `components`.

2. you should `create a folder for each component` you create
inside of the components folder.

3. you should create 3 components `(InputField,TextAreaField,HW)`.

4. you should render your `HW` component inside of the App component.

5. you should render the `InputField`, `TextAreaField` and a button of type submit inside a form
element inside of the `HW` component to resemble the structure of the homework `(name,email,message)`.

6. `InputField`, `TextAreaField` should have a label and a text input `(input,textarea)` element.

7. you should declare your states for your component inside of the HW component and then pass them to the related components ie `value={state}` `setValue={setState}`.

8. you should handle the displaying of your states and the state change inside of the component related to the state.

9. the props you should pass to your child components from the HW component are:
   1. `InputField({ label, type, value, onChange,required })`
   2. `TextAreaField({ label, value, onChange,required })`

10. your input fields should all be `required`.

11. when you click the submit button it should submit the form.
