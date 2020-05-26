<template>
	<div class="page-container">
		<Toolbar/>
		<md-list class="md-double-line">
			
			<md-list-item :key="name" @click="goTo(id)" v-for="{name, description, id} in toc">
				<div class="md-list-item-text">
					<span>{{name}}</span>
					<span>{{description}}</span>
				</div>
			</md-list-item>
		</md-list>
	</div>
</template>

<script>
	import Toolbar from '@/components/Toolbar'
	import toc from '@/content/toc'

	export default {
		name: 'Home',
		components: { Toolbar },
		data: () => ({
			menuVisible: false,
			toc: toc
		}),
		methods: {
			goTo(id){
				this.$router.push({ path: `/chapter/${id}` })
			}
		}
	}
</script>
