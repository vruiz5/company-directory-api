<script setup>
import { onMounted } from 'vue'
//const title = ref('Home Page')
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'
import useAPI from '@/composables/useAPI'

const { getEmployees, loading } = useAPI()

onMounted(async () => {
  await getEmployees()
})

</script>

<template>

  <p v-if="loading">Loading...</p>
  <div v-else>
    <MainCards></MainCards>
    <MainPagination></MainPagination>
  </div>
</template>
