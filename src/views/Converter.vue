<template>
	<div>
		<md-field>
			<label>Input</label>
			<md-textarea id="input" v-model="input"></md-textarea>
		</md-field>
		<md-button v-on:click="convert" class="md-primary">Convert</md-button>
		<md-field>
			<label>Output</label>
			<md-textarea id="output" v-model="output"></md-textarea>
		</md-field>
	</div>
</template>

<script>
	
	export default {
		name: "Converter",
		data: () => ({
			input : '',
			output: ''
		}),
		methods: {
			convert(){
				let output = []
				let num, q, a
				this.input.split('\n\n').forEach((el,i)=>{
					if(!(i%2) && Number(el.split(' ')[0].replace('.',''))){
						num = Number(el.split(' ')[0].replace('.',''))
						q = el.substr(4)
					}else{
						a = el
						output.push({
							"id": num,
							"q" : q,
							"a" : a
						})
					}
				})
				console.log(output)
				this.output = JSON.stringify(output)
			}
		}
	}
</script>

<style scoped>

</style>
