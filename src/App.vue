<template>
	<div>
		<Toolbar/>
		<transition>
			<router-view/>
		</transition>
	</div>
</template>

<script>
	import Toolbar from '@/components/Toolbar'

	export default {
		components: { Toolbar }
	}
</script>
