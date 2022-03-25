<template>
	<div class="chapter">
		<md-app>
			<md-app-content>
				<div :key="id" v-for="{id, q, a, subchapter, title, content} in getChapter(id)">
					<h2 class="md-headline" v-if="subchapter">{{ title }}</h2>
					<h4 class="md-subheading md-accent" v-if="!subchapter" :id="id">{{id}}. {{q}}</h4>
					<div v-if="subchapter">
						<div :key="id" v-for="{id, q, a, subheader } in content">
							<h3 class="md-title" v-if="subheader">{{subheader}}</h3>
							<h4 class="md-subheading" v-if="id" :id="id">{{ id }}. {{ q }}</h4>
							<p class="md-body-1" v-html="a"></p>
						</div>
					</div>
					<p class="md-body-1" v-if="!subchapter" v-html="a"></p>
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
	h2{
		white-space: break-spaces;
	}
	h2, h3, h4{
		margin: 0;
	}
	p{
		white-space: pre-wrap;
	}
</style>
