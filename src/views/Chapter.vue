<template>
	<div class="chapter">
		<md-app>
			<md-app-content>
				<div :key="id" v-for="{id, q, a} in getChapter(id)">
					<h3 :id="id">{{id}}. {{q}}</h3>
					<p v-html="a"></p>
				</div>
			</md-app-content>
		</md-app>
	</div>
</template>

<script>
	import db from '@/content/db'

	export default {
		name: "Chapter",
		data: () => ({
			db: db
		}),
		props: ['id'],
		methods: {
			getChapter(id){
				const i = db.chapters.findIndex(c => c.id == id)
				return db.chapters[i].content
			}
		}
	}
</script>

<style scoped>
	.chapter {
		height: 100vh;
	}
	p{
		white-space: pre-wrap;
	}
</style>
