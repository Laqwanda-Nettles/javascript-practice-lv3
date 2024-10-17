/**
 * Coding Bootcamp Assignment: Props, Tertiary Operator, & Array Destructuring
 *
 * Instructions:
 * You will create three components that demonstrate the use of:
 * 1. Passing props to a component.
 * 2. The ternary operator.
 * 3. Array destructuring.
 *
 * Follow the examples provided in the WelcomeMessage, CoinFlip, and FruitStore components to complete the assignment.
 *
 * - Follow the TODO comments to complete each task.
 */

// TASK 1: Demonstrate the simple use of props

// EXAMPLE: Passing a prop to display a welcome message
function WelcomeMessage(props) {
  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Welcome Message</h2>
      <p>{`Welcome, ${props.name}!`}</p>
    </div>
  );
}

// TODO: Add your own component that uses props to display dynamic data
// Example component: UserInfo
// Pass props such as "name" and "age" to the component and display them.
function UserInfo(props) {
  return (
    <div className="p-4 m-2 border-2 border-amber-600 rounded-md shadow-lg shadow-yellow-300">
      <h2 className="text-lg text-amber-500">Signed In!</h2>
      <p>{`Welcome back, ${props.name}!`}</p>
      <p>{`Thank you for being a member for ${props.years} years!`}</p>
    </div>
  );
}

function PropsDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Props Demo</h1>

      <div>
        <WelcomeMessage name="Alice" />
        <WelcomeMessage name="Bob" />
        <WelcomeMessage name="Carol" />
        <WelcomeMessage name="Derek" />
        <WelcomeMessage name="Emily" />
        <WelcomeMessage name="Frank" />
        TODO: Add a welcome message for Derek, Emily, and Frank using the
        WelcomeMessage component and a prop.
      </div>
      <div>
        TODO: Add your own component here demonstrating the use of props.
        <UserInfo name="Alice" years={2} />
        <UserInfo name="Bob" years={5} />
        <UserInfo name="Carol" years={3} />
      </div>
    </div>
  );
}

// TASK 2: Use the ternary operator to display different content

// EXAMPLE: Tertiary operator usage in JSX and variable declaration
// CoinFlip component uses a ternary operator to determine what to show.
function CoinFlip(props) {
  let announcement =
    props.coinSide === "heads" ? "Heads I win!" : "Tails you lose!";

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h1 className="text-lg">Coin flip</h1>
      <p>{announcement}</p>
      <img
        src={
          props.coinSide === "heads" ? "./img/heads.webp" : "./img/tails.webp"
        }
        alt="result"
        className="h-32 w-32"
      />
    </div>
  );
}

// TODO: Create your own component that uses the ternary operator
// Example component: Weather
// Use the ternary operator to display a message based on the props passed (e.g., "temperature").
function Weather(props) {
  let temperature =
    props.temp <= 50
      ? "Let's stay in and make some gumbo!"
      : "Let's get a snow ball!";

  return (
    <div className="p-4 m-2 border-2 border-sky-500 rounded-md shadow-lg shadow-indigo-600 hover:scale-110 flex flex-col items-center justify-evenly">
      <h2 className="text-xl font-semibold text-indigo-600">
        Louisiana Weather be like:
      </h2>
      <p>{temperature}</p>
      <img
        src={props.temp <= 50 ? "img/cold.webp" : "img/snowball.webp"}
        alt="results"
        className="h-32 w-32"
      />
    </div>
  );
}

function TertiaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Tertiary Operator</h1>

      <div className="flex justify-around">
        <CoinFlip coinSide="heads" />
        <CoinFlip coinSide="tails" />
      </div>
      <div className="flex justify-around">
        {/* TODO: Add your own component here */}
        <Weather temp={50} />
        <Weather temp={90} />
      </div>
    </div>
  );
}

// TASK 3: Use array destructuring inside your component to extract array values

// Example for Array Destructuring: You can use a prop or declare an array inside your component.
// Example array: const [firstName, lastName] = ["John", "Doe"];

function FruitStore() {
  const fruits = ["apples", "blueberries", "cherries"];
  // Destructure the fruit array
  const [f1, f2, f3] = fruits;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Three fruits!</h2>
      <p>Fruit 1: {f1}</p>
      <p>Fruit 2: {f2}</p>
      <p>Fruit 3: {f3}</p>
    </div>
  );
}

function AppleStore() {
  const products = ["iPad", "iPhone", "Apple Watch", "Mac"];
  const [product1, product2, product3, product4] = products;

  return (
    <div className="p-4 m-2 border-2 rounded-md border-green-500 bg-sky-100 flex flex-col items-center justify-evenly">
      <h2 className="text-2xl text-cyan-700 font-bold">Shopping Cart:</h2>
      <p className="text-xl">You are purchasing:</p>
      <ul>
        <li className="font-semibold text-cyan-600">
          <span className="text-lg text-black"> 1 </span>
          {product4}
        </li>
        <li className="font-semibold text-cyan-600">
          <span className="text-lg text-black"> 2 </span>
          {product3}
        </li>
        <li className="font-semibold text-cyan-600">
          <span className="text-lg text-black"> 1 </span>
          {product1}
        </li>
        <li className="font-semibold text-cyan-600">
          <span className="text-lg text-black"> 3 </span>
          {product2}
        </li>
      </ul>
      <button className="rounded-2xl bg-green-500 p-2 m-2 font-bold text-lg text-white hover:bg-green-700 shadow-lg hover:shadow-cyan-900">
        Check Out
      </button>
    </div>
  );
}
// TODO: Create your own component using array destructuring

function ArrayDestructureDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Array Destructuring Demo</h1>

      <div>
        <FruitStore />
      </div>
      <div>
        TODO: Add your own component here to demonstrate array destructuring.
        <AppleStore />
      </div>
    </div>
  );
}

// Render the App
function App() {
  return (
    <div>
      <PropsDemo />
      <hr class="border-blue-500 m-8" />
      <TertiaryDemo />
      <hr class="border-blue-500 m-8" />
      <ArrayDestructureDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
