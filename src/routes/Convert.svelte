<script>
	// a = prompt("dec")

	let output = '';

	let inp = ''; //= document.getElementById('inp');
	let type1;
	let type2;

	function fromdec(a, toBase) {
		let base = toBase;
		let out = 'dec:' + a + '\n';
		let res = '';
		while (a > 0) {
			let rem = a % base;
			a = a - rem;
			res = rem + res;
			out += base + '|' + (a + rem) + ' ' + rem + '\n';
			out += '  ---------------\n';
			a = a / base;
		}

		out += 'base-' + base + ': ' + res;
		return out;
	}

	function todec(input, fromBase) {
		let dec = 0;
		let l = input.length;
		let out = '';
		let output0 = '';
		let base = fromBase;
		for (let i = l - 1; i >= 0; i--) {
			let powered = Math.pow(base, l - 1 - i);
			let val = powered * input[i];
			dec += val;
			out += base + '^(' + i + ')*' + input[i] + (i != 0 ? ' + ' : '');
			output0 += val + (i != 0 ? ' + ' : '');
		}
		out += '\n=' + output0;
		out += '\n=' + dec;
		return out;
	}

	function todecdotnum(input, fromBase) {
		let dec = 0;
		let l = input.length;
		output = '';
		output0 = '';
		let base = fromBase;
		for (let i = -1; i >= -l; i--) {
			let powered = Math.pow(base, i);
			val = powered * input[-1 - i];
			dec += val;
			output += base + '^(' + i + ')*' + input[-1 - i] + (i != 0 ? ' + ' : '');
			output0 += val + (i != 0 ? ' + ' : '');
		}
		output += '\n=' + output0;
		output += '\n=' + dec;
		return output;
	}

	$: {
		let inpu = inp + '';
		let num = inpu.split('.')[0];
		let dotnum = inpu.split('.')[1];

		//let type1 = document.getElementById('inp1type').value;
		//let type2 = document.getElementById('inp2type').value;

		if (type1 == type2) {
			output = 'both types are same';
		} else if (type1 == 10) {
			output = fromdec(num, type2);
		} else if (type2 == 10) {
			output = todec(num, type1);
			console.log('helo:' + output);
			if (dotnum) {
				console.log('dotnum:' + dotnum);
				output += '\n\n\n' + todecdotnum(dotnum, type1);
			}
		} else {
			output = 'not supported yet';
		}

		console.log(type1);
		console.log(type1);
		console.log(output);

		//document.getElementById('a').innerText = output;
	}
</script>

<h2>Convert</h2>

<input id="inp" type="number" name="input" bind:value={inp} />
from

<select name="inp1type" id="inp1type" bind:value={type1}>
	<option value="10">dec</option>
	<option value="2">bin</option>
	<option value="8">oct</option>
	<option value="16">hex</option>
</select>
to

<select name="inp2type" id="inp2type" bind:value={type2}>
	<option value="10">dec</option>
	<option value="2">bin</option>
	<option value="8">oct</option>
	<option value="16">hex</option>
</select>

<br />
<button id="run"> run </button>

<textarea>{output}</textarea>
