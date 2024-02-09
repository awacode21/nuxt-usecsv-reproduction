<script setup>
// useHead({
//   script: [
//     {
//       src: "/usecsv.js",
//       type: "module",
//     },
//   ],
// });

onMounted(() => {
  window.usecsv = {
    importerKey: "e3033735-73be-498a-9d3c-0a8b4c070e67",
    user: { userId: 123 },
    metadata: { anotherId: 12345 },
    batchSize: 1000,
    onData: (data) => console.log({ data }),
    onClose: () => console.log("importer is closed"),
    // ... other options
  };
});
</script>

<template>
  <h1>UseCSV example in Vue.js</h1>
  <button id="usecsv-importer-button">Import Data</button>
  <div id="usecsv-importer-root"></div>
</template>

<style scoped>
#usecsv-importer-button {
  width: 170px;
  height: 70px;
  color: #fff;
  background-color: #027ad6;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.07);
  font: 700 24px sans-serif;
  text-align: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
