<script setup>
    const testName = 'Tasya';

    const showName = () => {
      console.log(testName);
    }
</script>

<template>
  <div>
    <h1>Navbar</h1>
    <p>Nama : {{ testName }}</p>
    <button @click="showName">Show Name in inspect</button>
  </div>
</template>

<style>

</style>