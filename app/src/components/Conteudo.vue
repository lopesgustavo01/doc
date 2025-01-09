<script setup>
import { watch, ref  } from 'vue';
import { content } from "../data/text";
import {activeSection} from '../data/states'

const currentContent = ref(content[activeSection.value]);
watch(() => activeSection.value, (newSection) => {
    currentContent.value = content[newSection];  
});

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
    padding: 0;
    margin: 0;
    background-color: var(--cor-principal);
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
}

@media (max-width: 665px) {
    .container-xxl {
        padding: 0;
        margin: 0;
    }
    .container-menu section {
        padding: 5px 7px !important;
        margin: 10px 0 !important;
    }
    .container-menu section div {
        margin: 0 !important;
        padding: 0 !important;
    }
    .container {
        padding-left: 0px !important;
    }
}
</style>
