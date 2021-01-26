<template>
	<div>
		<button @click="increment">{{ text }}</button>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
	count = 0;

	get times() {
		return this.count === 1 ? "time" : "times";
	}

	get text() {
		return `I have been clicked ${this.count} ${this.times}`;
	}

	increment() {
		this.count++;
	}
}
</script>
