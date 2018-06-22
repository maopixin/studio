<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@global/Header'
export default {
    components: {
        Header
    }
}
</script>

<style>

</style>
