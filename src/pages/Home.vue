<template>
    <div>
        <div class="glob-wr">
            <PageMobile class="mobile"/>
            <PagePC class="PC"/>
        </div>
        <VFooter/> 
    </div>
</template>

<script setup>
import PageMobile from "@/components/PageMobile.vue";
import PagePC from "@/components/PagePC.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<style lang="scss" scoped>
    .mobile{
        display: none;
    }

    .PC{
        display: block;
    }

    @media (max-width:  1000px) {
        .mobile{
            display: block;
        }

        .PC{
            display: none;
        }
    }
</style>