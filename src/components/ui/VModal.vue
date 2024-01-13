<template>
    <div class="modal-wr" :show="show || null" @mousedown.self="close" @wheel.prevent @touchmove.self.prevent>
        <div class="modal" @touchmove.self.prevent>
            <slot/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "@vue/reactivity";

    const emit = defineEmits(['close']);

//call
    const show = ref(false);

    const call = ()=>{
        show.value = true;
    }
    const close = ()=>{
        show.value = false;
        emit('close')
    }

    defineExpose({
        call,
        close
    });

</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .modal-wr{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #00000066;
        z-index: 1000;
        transition: .3s;

        @include flex-c;

        .modal{
            box-shadow: 0px 4px 21px 0px #00000040;
            background: var(--c-dark-white);
            max-height: 90vh;
            transition: .3s;
        }

        &:not([show]){
            @include hidden(0);

            .modal{
                @include hidden(50px);
            }
        }

        @media (max-width:  1000px) {
            font-size: 2.5vw;

            align-items: end;

            .modal{
                border-radius: 7.1rem 7.1rem 0 0!important;
                padding: 4rem .9rem!important;
            }
            
        }
    }
</style>