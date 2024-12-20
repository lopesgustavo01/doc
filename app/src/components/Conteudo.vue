<script setup>
import { watch, ref  } from 'vue';
import { content } from "../data/text";
import {activeSection} from '../data/states'

const currentContent = ref(content[activeSection.value]);
watch(() => activeSection.value, (newSection) => {
    currentContent.value = content[newSection];  
});
// Você pode acessar props.activeSection diretamente
console.log(activeSection.value);
</script>

<template>
    <div class="container-menu" v-html="currentContent"></div>
</template>

<style>
.c{
    background-color: aliceblue;
}
.custom-icon {
    height: 20px; /* Troque 'red' pela cor desejada */
}
.container-xxl {
    display: flex;
    flex-direction: row;
    
}

.container-menu {
    background-color: var(--cor-principal);
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
}
</style>
