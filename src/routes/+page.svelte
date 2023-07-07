<script>
	let a = 3;

	function inc() {
		a++;
	}

	let abc = `xyz,term, designatation,term,designatation
000,x'y'z', m0 , x+y+z    , M0
001,x'y'z , m1 , x+y+z'   , M1
010,x'yz' , m2 , x+y'+z   , M2
011,x'yz  , m3 , x+y'+z'  , M3
100,xy'z' , m4 , x'+y+z   , M4
101,xy'z  , m5 , x'+y+z'  , M5
110,xyz'  , m6 , x'+y'+z  , M6
111,xyz   , m7 , x'+y'+z' , M7 `;
</script>

<h1>Equation solvers</h1>

vaisakh {a}

<table>
	<tr><th /> <th colspan="2">minterms</th> <th colspan="2">maxterms</th> </tr>
	{#each abc.split('\n') as item}
		<!-- content here -->
		<tr>
			{#each item.split(',') as i}
				<td>{i}</td>
			{/each}
		</tr>
	{/each}
</table>

<button on:click={inc}> {a} </button>

<style>
	table,
	th,
	td {
		border: 1px solid black;
	}
</style>
