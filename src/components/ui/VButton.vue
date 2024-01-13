<template>
    <div class="btn">
        <slot/>
        <ILogoFilled class="loader"/>
    </div>
</template>

<script setup>
    import ILogoFilled from '@/components/icons/ILogoFilled.vue'
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';
    
    .btn{
        width: 100%;
        height: 56px;
        font-size: 28px;
        padding: 0 20px;
        background: var(--c-black);
        color: var(--c-white);
        @include flex-c;
        gap: 10px;
        border-radius: 17px;
        cursor: pointer;
        position: relative;
        overflow: hidden;

        &:active{
            transform: translateY(2px);
        }

        &:after{
            @include pseudo-absolute;
            @include all-directions(0);
            background: #ffffff58;
            transition: .3s;
        }

        &[loading]{
            pointer-events: none;
        }

        &:not([loading]){
            .loader{
                @include hidden(-10px);
            }

            &:after{
                @include hidden(0);
            }
        }

        .loader{
            position: absolute;
            height: 65%;
            z-index: 2;
            animation: rotate 3s linear infinite;
            transition: .3s;
        }
    }

    @keyframes rotate {
        100%{
            transform: rotate(1turn);
        }
    }

    
</style>