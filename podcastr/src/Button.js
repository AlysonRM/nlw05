
export default function Button (props) {
	let counter = 1

	function increment() {
		counter += 1;
		console.log(counter);
	}

  return (
  	<>
  	<span>{counter}</span>
    <button onClick={increment}>{props.children}</button>
    <br/>
    </>
  );
}