<template>
  	<div id="app">
		<router-view/>
		<notifications group="builder" />
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style>
body {
	background-color: #f2f4f7;
	/* background-color: #fff; */
	font-family: 'Roboto', sans-serif;
	color: #333;
	font-size: 13px;
	letter-spacing: 0.25px;
}

.input.is-danger,
.textarea.is-danger {
	border-color: #ff3860;
}

.is-danger {
	border-color: #ff3860;
}

.help.is-danger {
	color: #ff3860;
}

.help {
	display: block;
	font-size: 11px;
	margin-top: 5px;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.input-error {
	border-color: #d43f3a;
}

.error {
	color: #d43f3a;
}
</style>
