<style>
.cardWrap {
    border: 1px solid red;
    padding: 5px;
}
</style>

<template>
    <div class="cardWrap">
        <h1>{{title}}</h1>
    </div>
</template>

<script setup>
    defineProps([
      'title',
    ])
</script>