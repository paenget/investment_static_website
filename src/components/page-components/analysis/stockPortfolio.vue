<template>
    <div class="mb-5">
        <technical-analysis></technical-analysis>
        <single-stock></single-stock>
    </div>
</template>

<script>
import singleStock from '~/components/stocks/singleStock.vue';
import technicalAnalysis from '~/components/page-components/analysis/technicalAnalysis.vue';

export default {
    components: {
        singleStock,
        technicalAnalysis
    }
}
</script>

<style>

</style>