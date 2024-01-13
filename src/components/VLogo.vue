<template>
    <div class="logo">
        <ILogoType class="type"/>
        <ILogo class="ico"/>
    </div>
</template>

<script setup>
    import ILogo from '@/components/icons/ILogo.vue';
    import ILogoType from '@/components/icons/ILogoType.vue';
</script>

<style lang="scss" scoped>
    .logo{
        display: flex;
        align-items: baseline;
        
        .type{
            width: 85.5%;
            flex-shrink: 0;
            min-width: 0;
        }

        .ico{
            width: 100%;
            //height: 70%;
            animation: rotation 20s linear infinite;
            min-width: 0;
        }
    }

    @keyframes rotation {
        100%{
            transform: rotate(1turn);
        }
    }
</style>